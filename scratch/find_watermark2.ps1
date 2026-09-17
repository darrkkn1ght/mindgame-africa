Add-Type -AssemblyName System.Drawing

$p = "c:\Users\HomePC\Downloads\mindgame-africa\oparachukwu.jpg"
$img = [System.Drawing.Image]::FromFile($p)
$bm = New-Object System.Drawing.Bitmap($img)

$minX = 9999; $maxX = 0; $minY = 9999; $maxY = 0

for ($y = 850; $y -le 960; $y++) {
    for ($x = 100; $x -le 400; $x++) {
        $c = $bm.GetPixel($x, $y)
        if ($c.R -lt 160) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

Write-Host "Watermark text bounds: X: $minX to $maxX, Y: $minY to $maxY"
$bm.Dispose()
$img.Dispose()
