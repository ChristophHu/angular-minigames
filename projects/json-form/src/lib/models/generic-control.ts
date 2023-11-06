import { Observable } from "rxjs"

export interface Options {
  label: string
  value: string
}

type InputControl = {
  type:           'input',
  class?:         string,
  defaultValue?:  string | number,
  disabled?:      boolean,
  hidden?:        boolean,
  key:            string,
  label:          string,
  mask?:          string,
  placeholder:    string,
  dependOnKey?:   string,
  options?:       any[] | Observable<any[]>,
  validators?:    IValidator[]
}
type PasswordControl = {
  type:           'password',
  class?:         string,
  disabled?:      boolean,
  hidden?:        boolean,
  key:            string,
  label:          string,
  placeholder:    string,
  show:           boolean,
  validators?:    IValidator[]
}
type TextareaControl = {
  type:           'textarea',
  defaultValue?:  string | number,
  disabled?:      boolean,
  hidden?:        boolean,
  key:            string,
  label:          string,
  placeholder:    string,
  validators?:    IValidator[]
}
type SelectControl = {
  type:           'select',
  defaultValue?:  string,
  disabled?:      boolean,
  hidden?:        boolean,
  key:            string,
  label:          string,
  options:        any[],
  validators?:    any[]
}

type DependedSelectControl = {
  type:           'dependedselect',
  defaultValue?:  string,
  disabled?:      boolean,
  hidden?:        boolean,
  key:            string,
  label:          string,
  dependOnKey:    string,
  options$:       Observable<any[]>,
  dependedOptions$?: Observable<any[]>
  validators?:    any[]
}
type CheckboxControl = {
  type:           'checkbox',
  defaultValue:   boolean,
  disabled?:      boolean,
  hidden?:        boolean,
  key:            string,
  label:          string,
  value:          boolean,
  validators?:    IValidator[]
}
type ToggleControl = {
  type:           'toggle',
  defaultValue:   boolean,
  disabled?:      boolean,
  hidden?:        boolean,
  key:            string,
  label:          string,
  value:          boolean,
  validators?:    IValidator[]
}
type RadioControl = {
  type: 'radio',
  defaultValue?: string,
  disabled?: boolean,
  key: string,
  label: string,
  options: Options[],
  validators?: IValidator[]
}
type DateTimeControl = {
  type: 'datetime-local',
  defaultValue?: Date | string,
  disabled?: boolean,
  hidden?: boolean,
  key: string,
  label: string,
  placeholder: string,
  validators?: IValidator[]
}
type FileUploadControl = {
  type: 'fileupload',
  disabled?: boolean,
  hidden?: boolean,
  key: string,
  label: string,
  placeholder?: string,
  multiple?: boolean,
  upload: {
    url: string,
    type: 'blob' | 'base64' | 'binary' | 'file' | 'json' | 'text' 
  }
}
type ImageSliderControl = {
  type: 'imageslider',
  disabled?: boolean,
  hidden?: boolean,
  key: string,
  label: string
}
interface SignatureControl extends IComponent {
  type:           'signature',
  rules?:         IRule[],
  validators?:    IValidator[]
}

interface SearchSelectControl extends IComponent {
  type:           'searchselect',
  rules?:         IRule[],
  validators?:    IValidator[]
}

interface IComponent {
  key: string,
  label: string | Observable<string>,
  disabled: boolean,
  hidden: boolean,
  description?: string,
  depended?: any
}

// interface IDependency {
//   OnKey: string,
//   options: any[] | Observable<any[]>
// }

interface IRule {
  property: string,
  dependOn?: {
    key: string,
    operation: 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'in' | 'nin' | 'regex' | 'exists' | 'notexists' | 'contains' | 'notcontains' | 'includes' | 'startswith' | 'endswith',
    except: any
  },
  value: any // | any[] | Observable<any> | Observable<any[]>
}

export interface IComp extends IComponent {
  rules?: IRule[],
  validators?: IValidator[],
}

interface IValidator {
  email?    : boolean
  min?      : number
  max?      : number
  minlength?: number
  maxlength?: number
  required? : boolean
  validStrongPassword?: boolean
  zipCodeValidator?: boolean
}

export type GenericControl = InputControl | PasswordControl | TextareaControl | SelectControl | SearchSelectControl | DependedSelectControl | CheckboxControl | ToggleControl | RadioControl | DateTimeControl | FileUploadControl | ImageSliderControl | SignatureControl