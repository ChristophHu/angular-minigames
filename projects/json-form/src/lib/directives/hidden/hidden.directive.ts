import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core'
import { Observable, of } from 'rxjs'

@Directive({
  selector: '[hidden]'
})
export class HiddenDirective {
  private hasView = false

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set hidden(condition: boolean | Observable<boolean>) {
    if (typeof condition === 'boolean') condition = of(condition)
    
    condition.subscribe({
      next: (result: boolean) => {
        if (!result && !this.hasView) {
          this.viewContainer.createEmbeddedView(this.templateRef)
          this.hasView = true
        } else if (result && this.hasView) {
          this.viewContainer.clear()
          this.hasView = false
        }
      }
    })
  }

}
