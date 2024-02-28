import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatDialogModule } from '@angular/material/dialog';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    DeleteComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxDropzoneModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule,
    MatPaginatorModule,
    FormsModule
  ],
  exports: [
    NgxDropzoneModule,
    MatDialogModule,
    NavbarComponent,
    SidebarComponent,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatPaginatorModule,
    FormsModule,
    DeleteComponent
  ]
})
export class SharedModule { }
