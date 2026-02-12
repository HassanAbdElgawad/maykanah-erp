# Script to remove duplicate folders in screens directory

$basePath = "D:\Programming\TripleGates\Code\Maykana_ERP_New\apps\maykana-erp\src\screens"
$foldersToRemove = @('PurchaseInvoices', 'ReportsPage', 'SettingsPage', 'WorkflowEngine')

foreach ($folder in $foldersToRemove) {
    $fullPath = Join-Path $basePath $folder
    if (Test-Path $fullPath) {
        try {
            Remove-Item -Path $fullPath -Recurse -Force
            Write-Host "✓ Deleted: $folder"
        } catch {
            Write-Host "✗ Failed to delete: $folder - $_"
        }
    } else {
        Write-Host "- Not found: $folder"
    }
}

Write-Host "`nCleanup complete!"
