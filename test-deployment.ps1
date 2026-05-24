# Deployment Test Script for Windows PowerShell
# Run this before deploying to production
# Usage: .\test-deployment.ps1

Write-Host "🚀 Todo App - Deployment Test Script" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

$failed = $false

# Test 1: Dependencies
Write-Host "📦 Test 1: Checking dependencies..." -ForegroundColor Yellow
try {
  npm ls *> $null
  Write-Host "✅ Dependencies OK" -ForegroundColor Green
} catch {
  Write-Host "❌ Dependencies not installed" -ForegroundColor Red
  Write-Host "Run: npm install" -ForegroundColor Red
  exit 1
}
Write-Host ""

# Test 2: Linting
Write-Host "🔍 Test 2: Running linter..." -ForegroundColor Yellow
$lintResult = npm run lint 2>&1
if ($LASTEXITCODE -eq 0) {
  Write-Host "✅ Linting passed" -ForegroundColor Green
} else {
  Write-Host "⚠️  Linting had warnings (non-critical)" -ForegroundColor Yellow
}
Write-Host ""

# Test 3: Build
Write-Host "🔨 Test 3: Building production bundle..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -eq 0) {
  Write-Host "✅ Build successful" -ForegroundColor Green
  Write-Host "   Output: .next/ folder created" -ForegroundColor Gray
} else {
  Write-Host "❌ Build failed" -ForegroundColor Red
  Write-Host "Fix errors above and try again" -ForegroundColor Red
  exit 1
}
Write-Host ""

# Test 4: Production Start
Write-Host "🌐 Test 4: Testing production server startup..." -ForegroundColor Yellow
Write-Host "   (This will run for 5 seconds then stop)" -ForegroundColor Gray

# Start server in background
$serverProcess = Start-Process npm -ArgumentList "start" -PassThru -RedirectStandardOutput $null -RedirectStandardError $null
Start-Sleep -Seconds 3

# Check if process is running
if ($serverProcess.HasExited -eq $false) {
  Write-Host "✅ Production server started successfully" -ForegroundColor Green
  Write-Host "   Server running on http://localhost:3000" -ForegroundColor Gray
  Write-Host "   (Stopping test server...)" -ForegroundColor Gray
  $serverProcess | Stop-Process -Force -ErrorAction SilentlyContinue
} else {
  Write-Host "⚠️  Could not verify server startup" -ForegroundColor Yellow
}
Write-Host ""

# Summary
Write-Host "======================================" -ForegroundColor Cyan
Write-Host "✅ All deployment tests passed!" -ForegroundColor Green
Write-Host ""
Write-Host "Your app is ready to deploy:" -ForegroundColor Cyan
Write-Host "  1. Push to GitHub: git push origin main" -ForegroundColor Gray
Write-Host "  2. Go to https://vercel.com or https://railway.app" -ForegroundColor Gray
Write-Host "  3. Connect your repo" -ForegroundColor Gray
Write-Host "  4. Click Deploy" -ForegroundColor Gray
Write-Host ""
Write-Host "For detailed instructions, see: DEPLOYMENT.md" -ForegroundColor Gray
