import { AfterContentInit, AfterViewInit, Component, DoCheck, Inject, Injector, Input, OnInit, forwardRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormControl, FormControlDirective, FormControlName, FormGroup, FormGroupDirective, NG_VALUE_ACCESSOR, NgControl, NgModel, ValidationErrors, Validator, Validators } from '@angular/forms';
import { takeUntil, tap } from 'rxjs';

@Component({
  selector: 'signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.sass'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 }) ),
      state('*', style({ opacity: 1 })),
      transition('void => false', []),
      transition('void => *', animate('200ms cubic-bezier(0.0, 0.0, 0.2, 1)'))
    ]),
    trigger('fadeOut', [
      state('*', style({ opacity: 1 })), 
      state('void', style({ opacity: 0 })),
      transition('false => void', []),
      transition('* => void', animate('200ms 200ms cubic-bezier(0.0, 0.0, 0.2, 1)'))
    ]),
    trigger('fadeInTop', [
        state('void', style({ opacity  : 0, transform: 'translate3d(0, -100%, 0)' })),
        state('*', style({ opacity  : 1, transform: 'translate3d(0, 0, 0)' })),
        transition('void => false', []),
        transition('void => *', animate('400ms cubic-bezier(0.0, 0.0, 0.2, 1)'))
    ]),
    trigger('fadeOutTop', [
        state('*', style({ opacity  : 1, transform: 'translate3d(0, 0, 0)' })),
        state('void', style({ opacity  : 0, transform: 'translate3d(0, -100%, 0)' })), 
        transition('false => void', []),
        transition('* => void', animate('400ms cubic-bezier(0.0, 0.0, 0.2, 1)'))
    ])
  ],
  providers: [     
    {       
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SignatureComponent),
      multi: true
    }
  ]
})
export class SignatureComponent implements AfterContentInit, ControlValueAccessor  {
  @Input() label: string = 'Unterschrift'
  @Input() description: string | undefined

  myGroup: FormGroup = new FormGroup({})
  errors: ValidationErrors | null | undefined
  signature: string = ''

  isShowModal: boolean = false
  isDisabled: boolean = false

  onTouched = () => {}
  onChange = (_: any | null) => { }

  constructor(@Inject(Injector) private injector: Injector) {
    this.myGroup = new FormGroup({
      value: new FormControl()
    })
  }

  ngAfterContentInit(): void {
    const injectedControl = this.injector.get(NgControl)
    
    injectedControl.control?.valueChanges.subscribe({
      next: (data: any) => {
        this.errors = injectedControl.control?.errors
      }
    })
  }

  sign(event: any) {
    this.signature = event
    this.onChange(event)
  }

  openSignPad() {
    // this.signaturePad = new SignaturePad(this.canvasEl.nativeElement);
    this.isShowModal = true
  }
  close() {
    this.isShowModal = false
  }
  clear() {
    this.signature = ''
    this.onChange('0')
  }

  // update() {
  //   this.onTouched()
  //   this.onChange(this.myGroup.value.value)
  // }

  registerOnChange(fn: any): any {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    // this.disabled = isDisabled
  }
  writeValue(value: string): void {
    this.myGroup.patchValue({ value })
    this.signature = value
  }
}
