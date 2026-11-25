@echo off
cd /d "%~dp0"
where npm >nul 2>nul
if errorlevel 1 (echo Instale Node.js 22 ou superior. & pause & exit /b 1)
if not exist node_modules\vite (call npm install & if errorlevel 1 (pause & exit /b 1))
call npm run dev
pause
