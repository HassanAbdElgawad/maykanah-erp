@echo off
chcp 65001 >nul
echo Removing duplicate folders...
echo.

set BASE_PATH=D:\Programming\TripleGates\Code\Maykana_ERP_New\apps\maykana-erp\src\screens

if exist "%BASE_PATH%\PurchaseInvoices" (
    rmdir /s /q "%BASE_PATH%\PurchaseInvoices"
    echo [OK] Deleted: PurchaseInvoices
) else (
    echo [SKIP] Not found: PurchaseInvoices
)

if exist "%BASE_PATH%\ReportsPage" (
    rmdir /s /q "%BASE_PATH%\ReportsPage"
    echo [OK] Deleted: ReportsPage
) else (
    echo [SKIP] Not found: ReportsPage
)

if exist "%BASE_PATH%\SettingsPage" (
    rmdir /s /q "%BASE_PATH%\SettingsPage"
    echo [OK] Deleted: SettingsPage
) else (
    echo [SKIP] Not found: SettingsPage
)

if exist "%BASE_PATH%\WorkflowEngine" (
    rmdir /s /q "%BASE_PATH%\WorkflowEngine"
    echo [OK] Deleted: WorkflowEngine
) else (
    echo [SKIP] Not found: WorkflowEngine
)

echo.
echo Cleanup complete!
pause
