import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxDropzoneModule
  ],
  exports: [
    NgxDropzoneModule
  ]
})
export class SharedModule { }
