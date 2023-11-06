import { Component } from '@angular/core';
import { GenericControl, JsonFormService } from 'projects/json-form/src/public-api';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-rechnen',
  templateUrl: './rechnen.component.html',
  styleUrls: ['./rechnen.component.sass']
})
export class RechnenComponent {
  formContent: GenericControl[]
  formStatus: any
  formValue: any

  private readonly _isRunning = new BehaviorSubject<boolean>(false)
  isRunning$: Observable<boolean> = this._isRunning.asObservable()

  private readonly _isPaused = new BehaviorSubject<boolean>(false)
  isPaused$: Observable<boolean> = this._isPaused.asObservable()

  constructor(private _jsonFormService: JsonFormService) {
    this.formContent = []

    this.formContent.push(
      {
        type: 'input',
        defaultValue: '',
        hidden: false,
        key: 'id',
        label: 'Id',
        placeholder: ''
      },
      {
        type: 'input',
        defaultValue: '',
        key: 'name',
        label: 'Name',
        placeholder: ''
      },
      {
        type: 'select',
        key: 'fuel',
        label: 'Schwierigkeitsgrad',
        options: [{ value: '1', label: 'Leicht' }, { value: '2', label: 'Mittel' }, { value: '3', label: 'Schwer' }]
      },
    )
  }

  valueChanges(formValue: any) {
    this.formValue = formValue
  }

  statusChanges(formStatus: any) {
    this.formStatus = formStatus
  }

  startGame() {
    this._isRunning.next(true)
  }

  pauseGame(state: boolean) {
    this._isPaused.next(state)
  }
}
