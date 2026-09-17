Add-Type -AssemblyName System.Drawing

$p = "c:\Users\HomePC\Downloads\mindgame-africa\oparachukwu.jpg"
$img = [System.Drawing.Image]::FromFile($p)

$encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.FormatID -eq [System.Drawing.Imaging.ImageFormat]::Jpeg.Guid }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]95)

# Test tighter crops focused on founder portrait
$tests = @(
    @{ name = "bust_1"; x = 400; y = 150; w = 1100; h = 825 },
    @{ name = "bust_2"; x = 450; y = 100; w = 1138; h = 853 },
    @{ name = "bust_3"; x = 350; y = 120; w = 1238; h = 928 }
)

foreach ($t in $tests) {
    $destBitmap = New-Object System.Drawing.Bitmap($t.w, $t.h)
    $g = [System.Drawing.Graphics]::FromImage($destBitmap)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality

    $cropRect = New-Object System.Drawing.Rectangle($t.x, $t.y, $t.w, $t.h)
    $destRect = New-Object System.Drawing.Rectangle(0, 0, $t.w, $t.h)
    $g.DrawImage($img, $destRect, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)

    $outFile = "c:\Users\HomePC\Downloads\mindgame-africa\scratch\$($t.name).jpg"
    $destBitmap.Save($outFile, $encoder, $encoderParams)
    $g.Dispose()
    $destBitmap.Dispose()
}

$img.Dispose()
Write-Host "Done bust crops"
