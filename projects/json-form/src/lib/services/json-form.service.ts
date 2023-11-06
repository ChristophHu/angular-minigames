import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonFormService {
  private readonly _formData = new BehaviorSubject<any>('')
  formData$: Observable<any> = this._formData.asObservable()

  private readonly _patchData = new Subject
  patchData$: Observable<any> = this._patchData.asObservable()

  private readonly _files = new BehaviorSubject<string[]>([])
  files$: Observable<any> = this._files.asObservable()

  constructor() {
    this.files$.subscribe((files: any) => {
      this._formData.next(files)
    })
  }

  setFormData(formData: any) {
    this._formData.next(formData)
  }
  getFormData() {
    return this.formData$
  }

  patchData(patchData: any) {
    this._patchData.next(patchData)
  }

  setFiles(files: any) {
    // console.log('update ', files)
    this._files.next(files)
  }
}
