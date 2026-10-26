@echo off
chcp 65001 >nul
cd /d "%~dp0"
where git >nul 2>nul || (echo Brak gita. Zainstaluj go poleceniem: winget install Git.Git & pause & exit /b 1)
if not exist ".git" (
  git init -b main
  git remote add origin git@github.com:labiejroo/AWSCertTraining.git
)
git config user.name >nul 2>nul || git config user.name "Pawel Labuz"
git config user.email >nul 2>nul || git config user.email "pawel.labuz10@gmail.com"
git add -A
git commit -m "Aktualizacja materialow AWS CLF-C02" || echo Brak nowych zmian do zapisania.
git fetch origin 2>nul
git rev-parse --verify origin/main >nul 2>nul && git merge origin/main --allow-unrelated-histories -X ours -m "Scalenie z GitHub" --no-edit
git push -u origin main
echo.
echo Gotowe.
pause
