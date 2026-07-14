@echo off
chcp 65001 >nul
title Portal de Guias Gacha - servidor local
cd /d "%~dp0"

echo.
echo   ========================================================
echo    Portal de Guias Gacha - servidor local
echo   ========================================================
echo.
echo    Se abrira en tu navegador: http://localhost:8080
echo.
echo    5 juegos en una sola web: Genshin, HSR, ZZZ, WuWa, NTE.
echo    Deja esta ventana ABIERTA mientras uses las guias.
echo    Para cerrar el servidor: cierra esta ventana.
echo.

start "" /min cmd /c "timeout /t 1 /nobreak >nul & start "" http://localhost:8080"

python -m http.server 8080 2>nul
if errorlevel 1 (
  py -m http.server 8080 2>nul
)
if errorlevel 1 (
  echo.
  echo   [ERROR] No se encontro Python. Instala Python desde python.org
  echo   o desde la Microsoft Store y vuelve a intentarlo.
  echo.
  pause
)
