$ErrorActionPreference = "Stop"

$host.UI.RawUI.WindowTitle = "Paste Meta API Secrets - AuntieNoMad"
$repo = "taiwanape/auntie-no-mad"

function Set-MetaSecret {
  param(
    [string] $SecretName,
    [string] $Label,
    [bool] $Optional = $false
  )

  Write-Host ""
  Write-Host "Paste full value for $Label -> $SecretName" -ForegroundColor Green
  if ($Optional) {
    Write-Host "Optional. Press Enter to skip." -ForegroundColor DarkYellow
  }
  $secureValue = Read-Host "Value" -AsSecureString
  $bstr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secureValue)
  try {
    $secretValue = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($bstr)
  }
  finally {
    [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($bstr)
  }

  if ([string]::IsNullOrWhiteSpace($secretValue)) {
    if ($Optional) {
      Write-Host "Skipped $SecretName" -ForegroundColor DarkGray
      return
    }
    throw "$SecretName is empty. Please run this script again."
  }

  $secretValue | gh secret set $SecretName --repo $repo
}

Write-Host "==============================================" -ForegroundColor Cyan
Write-Host "Paste Meta API Secrets - AuntieNoMad" -ForegroundColor Cyan
Write-Host "==============================================" -ForegroundColor Cyan
Write-Host "Paste full values only. Do not paste masked dot values." -ForegroundColor Yellow
Write-Host "These values will be saved to GitHub Secrets, not the repo." -ForegroundColor Yellow
Write-Host ""
Write-Host "Required for Facebook Page posting:" -ForegroundColor Cyan
Write-Host "- META_PAGE_ID"
Write-Host "- META_PAGE_ACCESS_TOKEN"
Write-Host ""
Write-Host "Required for Instagram posting:" -ForegroundColor Cyan
Write-Host "- IG_USER_ID"
Write-Host "- IG_ACCESS_TOKEN"
Write-Host ""

Set-MetaSecret "META_PAGE_ID" "Facebook Page ID"
Set-MetaSecret "META_PAGE_ACCESS_TOKEN" "Facebook Page Access Token"
Set-MetaSecret "IG_USER_ID" "Instagram Business / Creator User ID"
Set-MetaSecret "IG_ACCESS_TOKEN" "Instagram Access Token"
Set-MetaSecret "META_GRAPH_VERSION" "Meta Graph API version, for example v23.0" $true

Write-Host ""
Write-Host "Current GitHub secret names:" -ForegroundColor Cyan
gh secret list --repo $repo
Write-Host ""
Write-Host "Done. Close this window and tell Codex: done" -ForegroundColor Cyan
Read-Host "Press Enter to close"
