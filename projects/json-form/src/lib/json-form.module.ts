import { NgModule } from '@angular/core';
import { JsonFormComponent } from './json-form.component';
import { ConvertOptionsPipe } from './pipes/convert-options/convert-options.pipe';
import { IndexOfObjectValuePipe } from './pipes/indexOfObjektValue/index-of-object-value.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { DropdownModule } from './components/dropdown/dropdown.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { DropdownDirective } from './directives/dropdown/dropdown.directive';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';
import { SelectComponent } from './components/select/select.component';
import { MaskDirective } from './directives/mask/mask.directive';
import { FilesizePipe } from './pipes/filesize/filesize.pipe';
import { FiletypePipe } from './pipes/filetype/filetype.pipe';
import { FileuploadService } from './services/fileupload.service';
import { JsonFormService } from '../public-api';
import { ImageThumbnailComponent } from './components/image-thumbnail/image-thumbnail.component';
import { SanitizePipe } from './pipes/sanitize/sanitize.pipe';
import { ScrollIndicatorComponent } from './components/scroll-indicator/scroll-indicator.component';
import { SignatureComponent } from './components/signature/signature.component';
import { PadComponent } from './components/signature/pad/pad.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { HiddenDirective } from './directives/hidden/hidden.directive';
import { SelectDropdownModule } from './components/select-dropdown/select-dropdown.module';

@NgModule({
  declarations: [
    ConvertOptionsPipe,
    FilesizePipe,
    FiletypePipe,
    SanitizePipe,
    HiddenDirective,
    DropdownDirective,
    IndexOfObjectValuePipe,
    JsonFormComponent,
    CustomSelectComponent,
    SelectComponent,
    MaskDirective,
    ImageThumbnailComponent,
    ScrollIndicatorComponent,
    SignatureComponent,
    PadComponent,
    ToggleComponent

    // TestComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    MaterialModule,
    OverlayModule,
    ReactiveFormsModule,
    SelectDropdownModule
  ],
  exports: [
    JsonFormComponent
  ],
  providers: [
    JsonFormService,
    FileuploadService
  ]
})
export class JsonFormModule { }
