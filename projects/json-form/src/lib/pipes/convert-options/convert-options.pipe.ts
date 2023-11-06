import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'convertOptions'
})
export class ConvertOptionsPipe implements PipeTransform {

  transform(arr: any[] | null, col: string, sort: boolean = true): any[] {
    if (arr) {
      let cleared: { label: string, value: string}[] = []
      arr.forEach(el => {
        cleared.push({ label: el[col], value: el.id })
      })
      if (sort) {
        cleared = cleared.sort((obj1, obj2) => {
          if (obj1.label > obj2.label) return 1
          if (obj1.label < obj2.label) return -1
          return 0
        })
      }
      console.log(cleared)
      return cleared
    }
    return []
  }
}
