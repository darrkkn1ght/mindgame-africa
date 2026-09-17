Add-Type -AssemblyName System.Drawing

$p = "c:\Users\HomePC\Downloads\mindgame-africa\oparachukwu.jpg"
$img = [System.Drawing.Image]::FromFile($p)
$bm = New-Object System.Drawing.Bitmap($img)

$x1 = 180
$x2 = 370
$y1 = 910
$y2 = 965

for ($y = $y1; $y -le $y2; $y++) {
    $cLeft = $bm.GetPixel($x1, $y)
    $cRight = $bm.GetPixel($x2, $y)
    for ($x = $x1; $x -le $x2; $x++) {
        $t = ($x - $x1) / ($x2 - $x1)
        $r = [int]($cLeft.R + ($cRight.R - $cLeft.R) * $t)
        $g = [int]($cLeft.G + ($cRight.G - $cLeft.G) * $t)
        $b = [int]($cLeft.B + ($cRight.B - $cLeft.B) * $t)
        $bm.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $r, $g, $b))
    }
}

$cropW = 1589
$cropH = 1192
$cropY = 180

$destBitmap = New-Object System.Drawing.Bitmap($cropW, $cropH)
$g = [System.Drawing.Graphics]::FromImage($destBitmap)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality

$cropRect = New-Object System.Drawing.Rectangle(0, $cropY, $cropW, $cropH)
$destRect = New-Object System.Drawing.Rectangle(0, 0, $cropW, $cropH)
$g.DrawImage($bm, $destRect, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)

$encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.FormatID -eq [System.Drawing.Imaging.ImageFormat]::Jpeg.Guid }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]95)

$outFile = "c:\Users\HomePC\Downloads\mindgame-africa\scratch\opara_clean_perfect.jpg"
$destBitmap.Save($outFile, $encoder, $encoderParams)

$g.Dispose()
$destBitmap.Dispose()
$bm.Dispose()
$img.Dispose()

Write-Host "Done perfect clean"
