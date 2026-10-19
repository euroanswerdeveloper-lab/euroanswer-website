# Build + arhivă ZIP pentru hosting Apache/cPanel (gazduire.ro).
# Utilizare (din folderul proiectului, cu `npm run dev` oprit):
#   powershell -File scripts/build-deploy.ps1 -SiteUrl https://testamentulporcului.ro -NoIndex   # versiune de test
#   powershell -File scripts/build-deploy.ps1                                                     # producție (euroanswer.co.uk)
param(
  [string]$SiteUrl = 'https://www.euroanswer.co.uk',
  [switch]$NoIndex
)
$ErrorActionPreference = 'Stop'
Set-Location (Split-Path $PSScriptRoot -Parent)

# 1. Curățare cache + build
foreach ($d in 'dist', 'node_modules/.vite', '.astro') { if (Test-Path $d) { Remove-Item $d -Recurse -Force } }
$env:SITE_URL = $SiteUrl
if ($NoIndex) { $env:PUBLIC_NOINDEX = 'true' } else { Remove-Item Env:PUBLIC_NOINDEX -ErrorAction SilentlyContinue }
npm run build
if ($LASTEXITCODE -ne 0) { throw 'Build eșuat' }
Remove-Item Env:SITE_URL, Env:PUBLIC_NOINDEX -ErrorAction SilentlyContinue

# 2. Imagini nefolosite + verificare URL-uri vechi
node scripts/prune-unused-uploads.mjs
Get-ChildItem dist -Recurse -Directory | Where-Object { -not (Get-ChildItem $_.FullName -Recurse -File -Force) } |
  Sort-Object { $_.FullName.Length } -Descending | Remove-Item -Force -ErrorAction SilentlyContinue

# 3. ZIP cu căi „/” și nume UTF-8 (Compress-Archive din PowerShell 5 nu e compatibil cu Linux)
Add-Type -AssemblyName System.IO.Compression, System.IO.Compression.FileSystem
$domain = ([uri]$SiteUrl).Host -replace '^www\.', ''
$zip = Join-Path (Split-Path (Get-Location) -Parent) ("euroanswer-deploy-{0}-{1}.zip" -f $domain, (Get-Date -Format 'yyyy-MM-dd'))
if (Test-Path $zip) { Remove-Item $zip -Force }
$fs = [IO.File]::Open($zip, [IO.FileMode]::CreateNew)
$archive = New-Object IO.Compression.ZipArchive($fs, [IO.Compression.ZipArchiveMode]::Create, $false, [Text.Encoding]::UTF8)
$base = (Resolve-Path 'dist').Path.TrimEnd('\') + '\'
Get-ChildItem dist -Recurse -File -Force | ForEach-Object {
  $name = $_.FullName.Substring($base.Length).Replace('\', '/')
  [void][IO.Compression.ZipFileExtensions]::CreateEntryFromFile($archive, $_.FullName, $name, [IO.Compression.CompressionLevel]::Optimal)
}
$archive.Dispose(); $fs.Dispose()
'Arhiva: {0} ({1:N1} MB)' -f $zip, ((Get-Item $zip).Length / 1MB)
