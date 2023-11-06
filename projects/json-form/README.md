# JsonForm

## Use
In the `app.module.ts` import the `JsonFormModule` and `BrowserAnimationsModule`:
```typescript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

...
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    JsonFormModule
  ]
  ...
})
```

Then you can use the `json-form` component in your templates:
```html
<json-form [formContent]="formContent" (formValue)="valueChanges($event)" (formStatus)="statusChanges($event)"></json-form>
```
The `formContent` is an array of `GenericControl` objects, that are drfined as:
```typescript
export interface GenericControl {
  type: string;
  name: string;
  label: string;
  value?: any;
  options?: string[];
  validators?: ValidatorFn[];
  children?: GenericControl[];
}
```

The `type` property can be one of the following:
- `text`: a text input
- `number`: a number input
- `select`: a select input
- `checkbox`: a checkbox input
- `radio`: a radio input

The `name` property is the name of the control, and the `label` property is the label of the control.
The `value` property is the initial value of the control, and the `options` property is an array of options for the `select` and `radio` controls.
The `validators` property is an array of `ValidatorFn` functions, and the `children` property is an array of `GenericControl` objects. They can be used in several types.

The `formValue` event is emitted when the form value changes, and the `formStatus` event is emitted when the form status changes.

## Style
The `json-form` component uses [Tailwind CSS](https://tailwindcss.com/) for styling. You can use the default Tailwind CSS styles, or you can customize them. To customize the styles, you can use the `tailwind.config` object. For example:
```html
<head>
  ...
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            clifford: '#da373d',
          }
        }
      }
    }
  </script>
</head>
```
Alternative you can use the `tailwind.config.js` file:
```javascript
module.exports = {
  content: [
    // '../../node_modules/@chistophhu/json-form/**/*.{html,ts,css,scss,sass,less,styl}',
      './src/**/*.{html,ts,css,scss,sass,less,styl}',
      './projects/**/*.{html,ts,css,scss,sass,less,styl}'
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      }
    }
  }
}
```

## Example
```typescript
constructor(private _jsonFormService: JsonFormService) {}
...
this.formContent = [{
  type: 'input',
  class: '',
  defaultValue: 0,
  // disabled: true,
  hidden: false,
  key: 'id',
  label: 'id',
  placeholder: '000'
},
{
  type: 'input',
  defaultValue: '',
  key: 'name',
  label: 'Name',
  placeholder: 'Thomas',
  validators: [
    { required: true }
  ]
},
{
  type: 'checkbox',
  defaultValue: false,
  disabled: false,
  key: 'active',
  label: 'Aktiv',
  value: false
},
{
  type: 'select',
  key: 'funktion',
  label: 'Funktion',
  options: convertArray(data.options, 'value'),
  validators: [
    { required: true }
  ]
},
{
  type: 'datetime-local',
  defaultValue: '',
  hidden: false,
  key: 'dayOfBirth',
  label: 'Geburtstag',
  placeholder: ''
},
{
  type: 'textarea',
  defaultValue: '',
  key: 'description',
  label: 'Beschreibung',
  placeholder: 'Beschreibung zur Person'
}]

this._jsonFormService.setFormData(this.formValue)
```