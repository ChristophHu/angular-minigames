import { Component, OnInit } from '@angular/core'
import { JsonFormService } from '../../services/json-form.service';
import { Observable, of } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'image-thumbnail',
  templateUrl: './image-thumbnail.component.html',
  styleUrls: ['./image-thumbnail.component.sass'],
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
  ]
})
export class ImageThumbnailComponent {
  selectedImage: any
  showModal = false
  test: any

  images$: Observable<any> = of()

  constructor(private _jsonFormService: JsonFormService) {
    this.images$ = this._jsonFormService.files$
  }

  openImage(src: string) {
    this.selectedImage = src
    this.showModal = true
  }
  close() {
    this.showModal = false
  }
}
