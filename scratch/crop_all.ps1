Add-Type -AssemblyName System.Drawing

$root = "c:\Users\HomePC\Downloads\mindgame-africa"
$publicImages = Join-Path $root "public\images"

# Matrix of 22 items
$items = @(
    @{
        id = "STK-01"
        file = "STK-01.jfif"
        dest = "teaching-and-learning\home-education-seminar-4x3.jpg"
        cropX = 16; cropY = 0; cropW = 244; cropH = 183
    },
    @{
        id = "STK-02"
        file = "STK-02.jfif"
        dest = "multidisciplinary-collaboration\about-core-practice-4x3.jpg"
        cropX = 0; cropY = 1; cropW = 515; cropH = 386
    },
    @{
        id = "STK-03"
        file = "STK-03.jpg"
        dest = "training-and-competition\about-why-africa-context-4x3.jpg"
        cropX = 192; cropY = 0; cropW = 3072; cropH = 2304
    },
    @{
        id = "STK-04"
        file = "STK-04.jpg"
        dest = "observation-and-analysis\services-diagnostic-review-4x3.jpg"
        cropX = 288; cropY = 0; cropW = 4608; cropH = 3456
    },
    @{
        id = "STK-05"
        file = "STK-05.jpg"
        dest = "team-sessions\services-team-workshop-16x9.jpg"
        cropX = 0; cropY = 182; cropW = 3500; cropH = 1969
    },
    @{
        id = "STK-06"
        file = "STK-06.jpg"
        dest = "coaching-environments\services-coach-feedback-16x9.jpg"
        cropX = 0; cropY = 272; cropW = 5219; cropH = 2936
    },
    @{
        id = "STK-07"
        file = "STK-07.jpg"
        dest = "training-and-competition\practice-competitive-prep-4x3.jpg"
        cropX = 323; cropY = 0; cropW = 5164; cropH = 3873
    },
    @{
        id = "STK-08"
        file = "STK-08.jpg"
        dest = "practitioner-interaction\practice-collaboration-16x9.jpg"
        cropX = 0; cropY = 500; cropW = 3648; cropH = 2052
    },
    @{
        id = "STK-09"
        file = "STK-09.jpg"
        dest = "observation-and-analysis\practice-analytical-review-16x9.jpg"
        cropX = 0; cropY = 1600; cropW = 3771; cropH = 2121
    },
    @{
        id = "STK-10"
        file = "STK-10.jpg"
        dest = "teaching-and-learning\perf-science-academic-collab-21x9.jpg"
        cropX = 0; cropY = 900; cropW = 4349; cropH = 1864
    },
    @{
        id = "STK-11"
        file = "STK-11.jpg"
        dest = "observation-and-analysis\perf-science-field-capture-4x3.jpg"
        cropX = 248; cropY = 0; cropW = 3968; cropH = 2976
    },
    @{
        id = "STK-12"
        file = "STK-12.jpg"
        dest = "researchers-at-work\research-mandate-investigation-4x3.jpg"
        cropX = 288; cropY = 0; cropW = 4608; cropH = 3456
    },
    @{
        id = "STK-13"
        file = "STK-13.jfif"
        dest = "multidisciplinary-collaboration\research-symposium-4x3.jpg"
        cropX = 38; cropY = 0; cropW = 224; cropH = 168
    },
    @{
        id = "STK-14"
        file = "STK-14.jpg"
        dest = "performance-data\research-data-collection-4x3.jpg"
        cropX = 388; cropY = 0; cropW = 2325; cropH = 1744
    },
    @{
        id = "STK-15"
        file = "STK-15.jfif"
        dest = "teaching-and-learning\education-seminar-interactive-4x3.jpg"
        cropX = 0; cropY = 1; cropW = 638; cropH = 478
    },
    @{
        id = "STK-16"
        file = "STK-16.jpg"
        dest = "coaching-environments\education-coach-practice-16x9.jpg"
        cropX = 0; cropY = 312; cropW = 6000; cropH = 3375
    },
    @{
        id = "STK-17"
        file = "STK-17.jpg"
        dest = "team-sessions\education-workshop-collaboration-16x9.jpg"
        cropX = 0; cropY = 350; cropW = 6720; cropH = 3780
    },
    @{
        id = "STK-18"
        file = "STK-18.jpg"
        dest = "researchers-at-work\insights-literature-review-4x3.jpg"
        cropX = 304; cropY = 0; cropW = 4864; cropH = 3648
    },
    @{
        id = "STK-19"
        file = "STK-19.jfif"
        dest = "practitioner-interaction\insights-practitioner-discussion-4x3.jpg"
        cropX = 38; cropY = 0; cropW = 603; cropH = 452
    },
    @{
        id = "STK-20"
        file = "STK-20.jpg"
        dest = "practitioner-interaction\opportunities-mentoring-4x3.jpg"
        cropX = 352; cropY = 0; cropW = 5628; cropH = 4221
    },
    @{
        id = "STK-21"
        file = "STK-21.jpg"
        dest = "observation-and-analysis\opportunities-field-observation-16x9.jpg"
        cropX = 0; cropY = 285; cropW = 5472; cropH = 3078
    },
    @{
        id = "STK-22"
        file = "STK-22.jfif"
        dest = "multidisciplinary-collaboration\partner-institutional-meeting-16x9.jpg"
        cropX = 0; cropY = 36; cropW = 678; cropH = 381
    }
)

$encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.FormatID -eq [System.Drawing.Imaging.ImageFormat]::Jpeg.Guid }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]92)

foreach ($item in $items) {
    $srcPath = Join-Path $root $item.file
    $outPath = Join-Path $publicImages $item.dest
    $outDir = Split-Path $outPath -Parent
    if (!(Test-Path $outDir)) {
        New-Item -ItemType Directory -Path $outDir -Force | Out-Null
    }

    if (!(Test-Path $srcPath)) {
        Write-Error "Source file not found: $srcPath"
        continue
    }

    $srcImg = [System.Drawing.Image]::FromFile($srcPath)
    $cropRect = New-Object System.Drawing.Rectangle($item.cropX, $item.cropY, $item.cropW, $item.cropH)
    $destBitmap = New-Object System.Drawing.Bitmap($item.cropW, $item.cropH)
    $g = [System.Drawing.Graphics]::FromImage($destBitmap)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $destRect = New-Object System.Drawing.Rectangle(0, 0, $item.cropW, $item.cropH)

    $g.DrawImage($srcImg, $destRect, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)
    $destBitmap.Save($outPath, $encoder, $encoderParams)

    $g.Dispose()
    $destBitmap.Dispose()
    $srcImg.Dispose()

    $fileInfo = Get-Item $outPath
    Write-Host "Success: $($item.id) -> $($item.dest) ($($item.cropW)x$($item.cropH), $([math]::Round($fileInfo.Length / 1KB, 1)) KB)"
}
