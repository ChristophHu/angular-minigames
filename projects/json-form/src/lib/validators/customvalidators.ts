import { FormControl } from "@angular/forms";

export interface ValidationResult {
    [key: string]: boolean;
}

export class CustomValidator {

    public static validStrongPassword(password: any): any {
      if (password.pristine) {
            return null;
      }

      let NUMBER_REGEXP: RegExp = new RegExp(/\d/)
      let UPPER_REGEXP: RegExp = new RegExp(/[A-Z]/)
      let LOWER_REGEXP: RegExp = new RegExp(/[a-z]/)
      let SPEC_REGEXP: RegExp = new RegExp(/[\!\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/) // ^(?=.*[-\#\$\.\%\&\*]).{8,16}$

      let obj: any = null
      if (!NUMBER_REGEXP.test(password.value)) obj = {...obj, ...{ hasNumber: true }}
      if (!UPPER_REGEXP.test(password.value)) obj = {...obj, ...{ hasUpper: true }}
      if (!LOWER_REGEXP.test(password.value)) obj = {...obj, ...{ hasLower: true }}
      if (!SPEC_REGEXP.test(password.value)) obj = {...obj, ...{ hasSpecial: true }}

      return obj
    }

    static validPhoneNumber(number: any): any {
        if (number.pristine) {
            return null;
        }
        const NUMBER_REGEXP: RegExp = new RegExp(/(\(?([\d \-\)\–\+\/\(]+){6,}\)?([ .\-–\/]?)([\d]+))/)

        return NUMBER_REGEXP.test(number.value) ? null : {
            validPhoneNumber: {
                valid: false
            }
        };
    }

    static validNumber(number: any): any {
        if (number.pristine) {
            return null;
         }
        const NUMBER_REGEXP: RegExp = new RegExp(/^-?[\d.]+(?:e-?\d+)?$/)

        number.markAsTouched();
        return NUMBER_REGEXP.test(number.value) ? null : {
            validNumber: {
                valid: false
            }
        };
    }

    // Validates URL
    static urlValidator(url: { pristine: any; markAsTouched: () => void; value: string; }): any {
       if (url.pristine) {
          return null;
       }
       const URL_REGEXP = /^(http?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
       url.markAsTouched();
       if (URL_REGEXP.test(url.value)) {
          return null;
       }
       return {
          invalidUrl: true
       };
    }
    // Validates passwords
    static matchPassword(group: { controls: { password: any; confirm: any; }; markAsTouched: () => void; }): any {
       const password = group.controls.password;
       const confirm = group.controls.confirm;
       if (password.pristine || confirm.pristine) {
          return null;
       }
       group.markAsTouched();
       if (password.value === confirm.value) {
          return null;
       }
       return {
          invalidPassword: true
       };
    }
    // Validates numbers
    static numberValidator(number: { pristine: any; markAsTouched: () => void; value: string; }): any {
       if (number.pristine) {
          return null;
       }
       const NUMBER_REGEXP = /^-?[\d.]+(?:e-?\d+)?$/;
       number.markAsTouched();
       if (NUMBER_REGEXP.test(number.value)) {
          return null;
       }
       return {
          invalidNumber: true
       };
    }
    // Validates US SSN
    static ssnValidator(ssn: { pristine: any; markAsTouched: () => void; value: string; }): any {
       if (ssn.pristine) {
          return null;
       }
       const SSN_REGEXP = /^(?!219-09-9999|078-05-1120)(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/;
       ssn.markAsTouched();
       if (SSN_REGEXP.test(ssn.value)) {
          return null;
       }
       return {
          invalidSsn: true
       };
    }
    // Validates german phone numbers
    static phoneValidator(number: { pristine: any; markAsTouched: () => void; value: string; }): any {
        console.log(number)
       if (number.pristine) {
          return null;
       }
       const PHONE_REGEXP = /[0-9]*\/*(\+49)*[ ]*(\([0-9]+\))*([ ]*(-|–)*[ ]*[0-9]+)*/
       number.markAsTouched();
       if (PHONE_REGEXP.test(number.value)) {
          return null;
       }
       return {
          invalidNumber: true
       };
    }
    // Validates zip codes
    static zipCodeValidator(control:  any): any {
      if (control.pristine) {
         return null;
      }
      const ZIP_REGEXP: RegExp = new RegExp(/(?<!\d)\d{4,5}(?!\d)/)

      let obj: any = null
      if (!ZIP_REGEXP.test(control.value)) obj = {...obj, ...{ invalidZip: true }}

      return obj
    }
}