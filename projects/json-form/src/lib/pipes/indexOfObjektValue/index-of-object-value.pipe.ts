import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indexOfObjectValue'
})
export class IndexOfObjectValuePipe implements PipeTransform {

  transform(array: any, property: string): string {
    if (!Array.isArray(array)) return ''
    for (let arr of array) {
      if (arr[property]) return arr[property]
    }
    return ''
  }

}
