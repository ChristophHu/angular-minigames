export interface ExtendedFileModel {
    file: File
    uploadUrl: string
    uploadStatus: {
        isSucess: boolean
        isError: boolean
        errorMessage: string
        progressCount: number
    }
}