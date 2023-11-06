import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filetype'
})
export class FiletypePipe implements PipeTransform {
    transform(type: string): string {
        return type.split("/").pop()?.split("+")[0].toLowerCase() || ''
    }
}