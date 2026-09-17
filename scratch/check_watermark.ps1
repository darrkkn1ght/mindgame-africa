Add-Type -AssemblyName System.Drawing

$p = "c:\Users\HomePC\Downloads\mindgame-africa\oparachukwu.jpg"
$img = [System.Drawing.Image]::FromFile($p)

# In original image, watermark is around X: 150 to 380, Y: 850 to 950
$bm = New-Object System.Drawing.Bitmap($img)
$c1 = $bm.GetPixel(150, 850)
$c2 = $bm.GetPixel(380, 850)
$c3 = $bm.GetPixel(150, 950)
$c4 = $bm.GetPixel(380, 950)

Write-Host "Pixel at (150, 850): R=$($c1.R), G=$($c1.G), B=$($c1.B)"
Write-Host "Pixel at (380, 850): R=$($c2.R), G=$($c2.G), B=$($c2.B)"
Write-Host "Pixel at (150, 950): R=$($c3.R), G=$($c3.G), B=$($c3.B)"
Write-Host "Pixel at (380, 950): R=$($c4.R), G=$($c4.G), B=$($c4.B)"

$bm.Dispose()
$img.Dispose()
