import { DropboxFilesResponseModel } from './dropbox-files-response.model';

export interface DropboxResponseModel {
    entries: DropboxFilesResponseModel[];
}
