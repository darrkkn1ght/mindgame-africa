Add-Type -AssemblyName System.Drawing
$p = "c:\Users\HomePC\Downloads\mindgame-africa\oparachukwu.jpg"
$img = [System.Drawing.Image]::FromFile($p)
Write-Host "Width: $($img.Width), Height: $($img.Height)"
$img.Dispose()
