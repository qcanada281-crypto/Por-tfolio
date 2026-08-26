<#
================================================================================
  ABDELILAH EL ABED PORTFOLIO - UNIFIED ROBOT & ASSET COMPOSITE ENGINE
================================================================================
  Usage:
    powershell -ExecutionPolicy Bypass -File .\scripts\robot_composite_manager.ps1 align
    powershell -ExecutionPolicy Bypass -File .\scripts\robot_composite_manager.ps1 analyze
    powershell -ExecutionPolicy Bypass -File .\scripts\robot_composite_manager.ps1 audit
    powershell -ExecutionPolicy Bypass -File .\scripts\robot_composite_manager.ps1 all
================================================================================
#>

param (
    [Parameter(Position=0)]
    [ValidateSet("align", "analyze", "colors", "audit", "all")]
    [string]$Command = "all"
)

Add-Type -AssemblyName System.Drawing

$projectRoot = Split-Path -Parent $PSScriptRoot
$imagesDir   = Join-Path $projectRoot "images"
$humanPath   = Join-Path $imagesDir "abdelilah_11-removebg-preview.png"
$robotPath   = Join-Path $imagesDir "robot-tech.jpg"
$outAligned  = Join-Path $imagesDir "robot_aligned_1254.png"
$outOverlay  = Join-Path $imagesDir "test_alignment_overlay.png"

# ─── 1. ANALYZE GEOMETRY & LANDMARKS ─────────────────────────────────────────
function Analyze-Geometry {
    Write-Host "`n--- 🔍 1. ANALYZING HUMAN & ROBOT GEOMETRY ---" -ForegroundColor Cyan
    
    if (!(Test-Path $humanPath) -or !(Test-Path $robotPath)) {
        Write-Host "❌ Error: Source images missing from $imagesDir" -ForegroundColor Red
        return
    }

    $human = [System.Drawing.Bitmap]::FromFile($humanPath)
    $robot = [System.Drawing.Bitmap]::FromFile($robotPath)

    Write-Host "✔ Human Dimensions: $($human.Width) x $($human.Height)" -ForegroundColor Green
    Write-Host "✔ Robot Dimensions: $($robot.Width) x $($robot.Height)" -ForegroundColor Green

    # Scan Human Head Bounds
    $topY = $human.Height; $bottomY = 0; $minX = $human.Width; $maxX = 0
    for ($y = 0; $y -lt $human.Height; $y += 4) {
        for ($x = 0; $x -lt $human.Width; $x += 4) {
            $p = $human.GetPixel($x, $y)
            if ($p.A -gt 30) {
                if ($y -lt $topY) { $topY = $y }
                if ($y -gt $bottomY) { $bottomY = $y }
                if ($x -lt $minX) { $minX = $x }
                if ($x -gt $maxX) { $maxX = $x }
            }
        }
    }
    Write-Host "✔ Human Head & Body Bounds: TopY=$topY, BottomY=$bottomY, MinX=$minX, MaxX=$maxX" -ForegroundColor Gray

    $human.Dispose()
    $robot.Dispose()
}

# ─── 2. CHECK COLOR DISTRIBUTIONS ─────────────────────────────────────────────
function Check-Colors {
    Write-Host "`n--- 🎨 2. CHECKING COLOR & ALPHA DISTRIBUTIONS ---" -ForegroundColor Cyan
    
    if (!(Test-Path $robotPath)) { return }
    $robot = [System.Drawing.Bitmap]::FromFile($robotPath)

    $pCorners = @(
        $robot.GetPixel(0, 0),
        $robot.GetPixel($robot.Width - 1, 0),
        $robot.GetPixel(0, $robot.Height - 1),
        $robot.GetPixel($robot.Width - 1, $robot.Height - 1)
    )

    Write-Host "✔ Corner RGB Values (Background check):" -ForegroundColor Gray
    foreach ($c in $pCorners) {
        Write-Host "   - R=$($c.R), G=$($c.G), B=$($c.B)" -ForegroundColor DarkGray
    }

    $robot.Dispose()
}

# ─── 3. PERFORM HIGH-PRECISION ALIGNMENT & ALPHA CUTOUT ───────────────────────
function Perform-Alignment {
    Write-Host "`n--- ⚡ 3. EXECUTING HIGH-PRECISION ROBOT ALIGNMENT ---" -ForegroundColor Cyan

    if (!(Test-Path $humanPath) -or !(Test-Path $robotPath)) {
        Write-Host "❌ Error: Required assets not found." -ForegroundColor Red
        return
    }

    $human    = [System.Drawing.Bitmap]::FromFile($humanPath)
    $robotSrc = [System.Drawing.Bitmap]::FromFile($robotPath)

    # Clean Dark Background and Apply Edge Feathering
    $robotClean = New-Object System.Drawing.Bitmap $robotSrc.Width, $robotSrc.Height, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    for ($y = 0; $y -lt $robotSrc.Height; $y++) {
        for ($x = 0; $x -lt $robotSrc.Width; $x++) {
            $p = $robotSrc.GetPixel($x, $y)
            if ($p.R -lt 12 -and $p.G -lt 12 -and $p.B -lt 12) {
                $robotClean.SetPixel($x, $y, [System.Drawing.Color]::Transparent)
            } else {
                $maxC = [Math]::Max($p.R, [Math]::Max($p.G, $p.B))
                if ($maxC -lt 25) {
                    $alpha = [int](($maxC - 10) * 255 / 15)
                    if ($alpha -lt 0) { $alpha = 0 }
                    if ($alpha -gt 255) { $alpha = 255 }
                    $robotClean.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $p.R, $p.G, $p.B))
                } else {
                    $robotClean.SetPixel($x, $y, $p)
                }
            }
        }
    }

    # 1254 x 1254 Canvas Generation
    $outBmp = New-Object System.Drawing.Bitmap 1254, 1254, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($outBmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode     = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode   = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)

    # Calibrated Scale & Position Offset
    $scale = 0.468
    $destW = [int]($robotClean.Width * $scale)
    $destH = [int]($robotClean.Height * $scale)
    $destX = [int](627 - (605 * $scale))
    $destY = [int](310 - (54 * $scale))

    Write-Host "✔ Render Geometry: X=$destX, Y=$destY, W=$destW, H=$destH (Scale: $scale)" -ForegroundColor Green
    $rect = New-Object System.Drawing.Rectangle $destX, $destY, $destW, $destH
    $g.DrawImage($robotClean, $rect, 0, 0, $robotClean.Width, $robotClean.Height, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()

    # Save Output
    $outBmp.Save($outAligned, [System.Drawing.Imaging.ImageFormat]::Png)
    Write-Host "✔ Saved: $outAligned" -ForegroundColor Green

    # Generate Visual Test Overlay (70% opacity blend over human)
    $overlayBmp = New-Object System.Drawing.Bitmap 1254, 1254, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $gOver = [System.Drawing.Graphics]::FromImage($overlayBmp)
    $gOver.DrawImage($human, 0, 0, 1254, 1254)

    $cm = New-Object System.Drawing.Imaging.ColorMatrix
    $cm.Matrix33 = 0.70
    $ia = New-Object System.Drawing.Imaging.ImageAttributes
    $ia.SetColorMatrix($cm)

    $gOver.DrawImage($outBmp, (New-Object System.Drawing.Rectangle 0, 0, 1254, 1254), 0, 0, 1254, 1254, [System.Drawing.GraphicsUnit]::Pixel, $ia)
    $gOver.Dispose()

    $overlayBmp.Save($outOverlay, [System.Drawing.Imaging.ImageFormat]::Png)
    Write-Host "✔ Saved Verification Overlay: $outOverlay" -ForegroundColor Green

    # Cleanup memory
    $human.Dispose()
    $robotSrc.Dispose()
    $robotClean.Dispose()
    $outBmp.Dispose()
    $overlayBmp.Dispose()

    Write-Host "✅ ALIGNMENT PIPELINE EXECUTED WITH 100% SUCCESS." -ForegroundColor Green
}

# ─── 4. AUDIT ASSETS & REFERENCES ────────────────────────────────────────────
function Audit-Assets {
    Write-Host "`n--- 🔍 4. AUDITING PORTFOLIO ASSETS ---" -ForegroundColor Cyan
    $reqFiles = @(
        $humanPath,
        $outAligned,
        $outOverlay,
        (Join-Path $imagesDir "project1.png"),
        (Join-Path $imagesDir "project2.png"),
        (Join-Path $imagesDir "project3.png"),
        (Join-Path $imagesDir "project4.png"),
        (Join-Path $imagesDir "project5.png"),
        (Join-Path $imagesDir "project6.png")
    )
    $allGood = $true
    foreach ($f in $reqFiles) {
        if (Test-Path $f) {
            Write-Host "✔ Exists: $(Split-Path -Leaf $f)" -ForegroundColor Green
        } else {
            Write-Host "❌ Missing: $(Split-Path -Leaf $f)" -ForegroundColor Red
            $allGood = $false
        }
    }
    if ($allGood) {
        Write-Host "✅ All essential portfolio assets verified." -ForegroundColor Green
    }
}

# ─── DISPATCH COMMAND ────────────────────────────────────────────────────────
switch ($Command) {
    "analyze" { Analyze-Geometry }
    "colors"  { Check-Colors }
    "align"   { Perform-Alignment }
    "audit"   { Audit-Assets }
    "all"     {
        Analyze-Geometry
        Check-Colors
        Perform-Alignment
        Audit-Assets
    }
}
