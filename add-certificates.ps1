# Script to help add certificate images to the certificates folder
# Usage: Place your certificate images in a folder, then run this script

$sourceFolder = Read-Host "Enter the path to the folder containing your certificate images (or press Enter to use current directory)"
if ([string]::IsNullOrWhiteSpace($sourceFolder)) {
    $sourceFolder = Get-Location
}

$certificatesFolder = Join-Path $PSScriptRoot "public\certificates"

# Required filenames
$requiredFiles = @(
    "outstanding-contributor.jpg",
    "meralco-internship.jpg",
    "ibm-ml-python.jpg",
    "stanford-medicine.jpg",
    "up-cids-explainable-ai.jpg",
    "imsp-research-seminar.jpg",
    "kozminski-ai-business.jpg"
)

Write-Host "`nLooking for certificate images in: $sourceFolder" -ForegroundColor Cyan
Write-Host "Target folder: $certificatesFolder`n" -ForegroundColor Cyan

# Find and copy images
foreach ($filename in $requiredFiles) {
    $sourceFile = Get-ChildItem -Path $sourceFolder -Filter $filename -Recurse -ErrorAction SilentlyContinue | Select-Object -First 1
    
    if ($sourceFile) {
        $destFile = Join-Path $certificatesFolder $filename
        Copy-Item -Path $sourceFile.FullName -Destination $destFile -Force
        Write-Host "✓ Copied: $filename" -ForegroundColor Green
    } else {
        Write-Host "✗ Not found: $filename" -ForegroundColor Yellow
    }
}

Write-Host "`nDone! Check the public\certificates folder." -ForegroundColor Green

