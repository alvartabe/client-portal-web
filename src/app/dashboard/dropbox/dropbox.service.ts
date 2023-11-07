import { Injectable } from '@angular/core';
import { DropboxClient } from '@app/clients/dropbox/dropbox.client';
import { DropboxFilesResponseModel } from '@app/models/dropbox-files-response.model';
import { DropboxFilesModel } from '@app/models/dropbox-files.model';
import { DropboxResponseModel } from '@app/models/dropbox-response.model';
import { DropboxModel } from '@app/models/dropbox.model';
import { Observable, map } from 'rxjs';

@Injectable()
export class DropboxService {

    constructor(private dropboxClient: DropboxClient) {}

    public getFolderContents(folderPath: string): Observable<DropboxModel> {
        return this.dropboxClient.getFolderContents(folderPath).pipe(map((resp: DropboxResponseModel) => {
            const tempFiles = new Array<DropboxFilesModel>();
            resp.entries.forEach((file: DropboxFilesResponseModel) => {
                tempFiles.push({
                    id: file.id,
                    clientModified: new Date(file.client_modified),
                    serverModified: new Date(file.server_modified),
                    name: file.name,
                    pathDisplay: file.path_display,
                    pathLower: file.path_lower
                });
            });
            return {entries: tempFiles};
        }));
    }
}
