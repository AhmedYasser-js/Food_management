import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxDropzoneModule,
    MatDialogModule
  ],
  exports: [
    NgxDropzoneModule,
    MatDialogModule
  ]
})
export class SharedModule { }
