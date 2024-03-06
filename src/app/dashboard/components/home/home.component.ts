import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private _Router: Router) { }

  goToRecipe() {
    this._Router.navigate(['/dashboard/admin/recipes'])
  }
  userName = localStorage.getItem('userName');
}
