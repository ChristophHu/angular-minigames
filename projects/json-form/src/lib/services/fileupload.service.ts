import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ExtendedFileModel } from '../models/extendedfile.model';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {

  constructor(private httpClient: HttpClient) { }

  uploadFiles(toUploadFile: ExtendedFileModel): Observable<any> {
    const headers = {
      // This is only required for the Mock File Upload service we use here
      // https://www.convertapi.com/doc/upload
      'Content-Disposition': `inline; filename: ${toUploadFile.file.name}`
    }
    return this.httpClient.post(toUploadFile.uploadUrl, toUploadFile.file, {
      headers: headers,
      observe: 'events',
      reportProgress: true
    })
    .pipe(
      catchError((error: HttpErrorResponse) => throwError(error))
    )
  }

  
}
