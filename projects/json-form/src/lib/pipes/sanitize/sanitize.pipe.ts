import { Pipe, PipeTransform } from '@angular/core'
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser'
import { SafeType } from './savetype.enum';

@Pipe({ name: 'sanitize' })
export class SanitizePipe implements PipeTransform {

  constructor(protected _sanitizer:DomSanitizer) { }

  public transform(value: any, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    switch (type) {
			case SafeType.HTML: return this._sanitizer.bypassSecurityTrustHtml(value);
			case SafeType.STYLE: return this._sanitizer.bypassSecurityTrustStyle(value);
			case SafeType.SCRIPT: return this._sanitizer.bypassSecurityTrustScript(value);
			case SafeType.URL: return this._sanitizer.bypassSecurityTrustUrl(value);
			case SafeType.RESOURCEURL: return this._sanitizer.bypassSecurityTrustResourceUrl(value);
			default: throw new Error(`Invalid safe type specified: ${type}`);
		}
  }
}
