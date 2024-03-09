import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  constructor(
    public dialogRef: MatDialogRef<ViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  onNoClick(): void {
    this.dialogRef.close();
  }

  imagePath: string = 'https://upskilling-egypt.com/';
  notFoundRecipes: string = '../../../../assets/images/recipeImg.jpg';
}
