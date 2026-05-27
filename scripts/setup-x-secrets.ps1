$ErrorActionPreference = "Stop"

$host.UI.RawUI.WindowTitle = "Paste X API Secrets - AuntieNoMad"
$repo = "taiwanape/auntie-no-mad"

function Set-XSecret {
  param(
    [string] $SecretName,
    [string] $Label
  )

  Write-Host ""
  Write-Host "Paste full value for $Label -> $SecretName" -ForegroundColor Green
  $secretValue = Read-Host "Value"
  if ([string]::IsNullOrWhiteSpace($secretValue)) {
    throw "$SecretName is empty. Please run this script again."
  }

  $secretValue | gh secret set $SecretName --repo $repo
}

Write-Host "==============================================" -ForegroundColor Cyan
Write-Host "Paste X API Secrets - AuntieNoMad" -ForegroundColor Cyan
Write-Host "==============================================" -ForegroundColor Cyan
Write-Host "Paste full values only. Do not paste masked dot values." -ForegroundColor Yellow
Write-Host "These values will be saved to GitHub Secrets, not the repo." -ForegroundColor Yellow

Set-XSecret "X_API_KEY" "Consumer Key / API Key"
Set-XSecret "X_API_SECRET" "Consumer Secret / API Key Secret"
Set-XSecret "X_ACCESS_TOKEN" "Access Token"
Set-XSecret "X_ACCESS_TOKEN_SECRET" "Access Token Secret"

Write-Host ""
Write-Host "Current GitHub secret names:" -ForegroundColor Cyan
gh secret list --repo $repo
Write-Host ""
Write-Host "Done. Close this window and tell Codex: done" -ForegroundColor Cyan
Read-Host "Press Enter to close"
