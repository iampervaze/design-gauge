Import-Module Az.Storage

function Upload-ToBlob {
    Param($folder)
    $container = "container-$folder"
    $storageAccount = Get-AzStorageAccount -ResourceGroupName "rg" `
    -Name "stgpervaze"`

    $ctx = $storageAccount.Context

    # Write-Host "Creating Container $folder"
    # New-AzStoragecontainer -Name $container -Context $ctx -Permission blob
    Write-Host "Uploading Files"
    # Get-ChildItem $path *.* -rec | where { ! $_.PSIsContainer } | ForEach-Object {
    #     #ploading 
    #     $file = $folder + $_.Name
    #     $blob = $_.Name
    #     Write-Host "Uploading " + $_.FullName

    #     Set-AzureStorageBlobContent -Container $container -File $file -Blob $blob
    # }

        $file = "target\abc.txt"
        $blob = "abc.txt"
        

        Set-AzureStorageBlobContent -Container $container -File $file -Blob $blob
}



# Do-Something
Upload-ToBlob -folder target


