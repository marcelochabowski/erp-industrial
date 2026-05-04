$ErrorActionPreference = "Stop"

$root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$public = Join-Path $root "public"
$prefix = "http://localhost:3000/"

$contentTypes = @{
  ".html" = "text/html; charset=utf-8"
  ".css" = "text/css; charset=utf-8"
  ".js" = "text/javascript; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".webmanifest" = "application/manifest+json; charset=utf-8"
  ".svg" = "image/svg+xml; charset=utf-8"
  ".png" = "image/png"
  ".jpg" = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".ico" = "image/x-icon"
}

function Send-Bytes {
  param(
    [System.Net.HttpListenerContext] $Context,
    [int] $StatusCode,
    [byte[]] $Bytes,
    [string] $ContentType
  )

  $Context.Response.StatusCode = $StatusCode
  $Context.Response.ContentType = $ContentType
  $Context.Response.Headers.Set("Cache-Control", "no-store")
  $Context.Response.Headers.Set("Access-Control-Allow-Origin", "*")
  $Context.Response.ContentLength64 = $Bytes.Length
  $Context.Response.OutputStream.Write($Bytes, 0, $Bytes.Length)
  $Context.Response.Close()
}

function Send-Text {
  param(
    [System.Net.HttpListenerContext] $Context,
    [int] $StatusCode,
    [string] $Text,
    [string] $ContentType
  )

  $bytes = [System.Text.Encoding]::UTF8.GetBytes($Text)
  Send-Bytes -Context $Context -StatusCode $StatusCode -Bytes $bytes -ContentType $ContentType
}

function Get-ContentType {
  param([string] $FilePath)

  $extension = [System.IO.Path]::GetExtension($FilePath).ToLowerInvariant()

  if ($contentTypes.ContainsKey($extension)) {
    return $contentTypes[$extension]
  }

  return "application/octet-stream"
}

$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add($prefix)

try {
  $listener.Start()
  Write-Host "Preview do ERP rodando em $prefix"

  while ($listener.IsListening) {
    $context = $listener.GetContext()

    try {
      $requestPath = [System.Uri]::UnescapeDataString($context.Request.Url.AbsolutePath)

      if ($requestPath.StartsWith("/api/")) {
        Send-Text `
          -Context $context `
          -StatusCode 404 `
          -Text '{"error":"PREVIEW_MODE","message":"API Node.js nao esta ativa; usando dados locais no frontend."}' `
          -ContentType "application/json; charset=utf-8"
        continue
      }

      if ($requestPath -eq "/") {
        $requestPath = "/index.html"
      }

      if ($requestPath -eq "/src/data/erpData.js") {
        $filePath = Join-Path $root "src\data\erpData.js"
      } else {
        $relative = $requestPath.TrimStart("/").Replace("/", [System.IO.Path]::DirectorySeparatorChar)

        if ($relative.Contains("..")) {
          Send-Text -Context $context -StatusCode 403 -Text "Forbidden" -ContentType "text/plain; charset=utf-8"
          continue
        }

        $filePath = Join-Path $public $relative
      }

      if (-not (Test-Path -LiteralPath $filePath -PathType Leaf)) {
        $filePath = Join-Path $public "index.html"
      }

      $bytes = [System.IO.File]::ReadAllBytes($filePath)
      Send-Bytes -Context $context -StatusCode 200 -Bytes $bytes -ContentType (Get-ContentType $filePath)
    } catch {
      Send-Text `
        -Context $context `
        -StatusCode 500 `
        -Text ("Erro no preview: " + $_.Exception.Message) `
        -ContentType "text/plain; charset=utf-8"
    }
  }
} finally {
  if ($listener.IsListening) {
    $listener.Stop()
  }

  $listener.Close()
}
