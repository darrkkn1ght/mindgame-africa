Add-Type -AssemblyName System.Drawing

$p = "c:\Users\HomePC\Downloads\mindgame-africa\oparachukwu.jpg"
$img = [System.Drawing.Image]::FromFile($p)
$bm = New-Object System.Drawing.Bitmap($img)

$minX = 9999; $maxX = 0; $minY = 9999; $maxY = 0

for ($y = 800; $y -le 1100; $y++) {
    for ($x = 100; $x -le 500; $x++) {
        $c = $bm.GetPixel($x, $y)
        # Background is > 200, watermark text is dark (< 150)
        if ($c.R -lt 160 -and $c.G -lt 160 -and $c.B -lt 160) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

Write-Host "Watermark bounds: X: $minX to $maxX, Y: $minY to $maxY"
$bm.Dispose()
$img.Dispose()
