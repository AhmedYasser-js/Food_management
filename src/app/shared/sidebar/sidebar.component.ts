import { Component } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';

interface Menu {
  text: string;
  link: string;
  icone: string;
  isActive: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private _AuthService: AuthService) { }


  isAdmin(): boolean {
    return this._AuthService.role == 'SuperAdmin' ? true : false;
  }

  isUser(): boolean {
    return this._AuthService.role == 'SystemUser' ? true : false;
  }

  Menu: Menu[] = [
    {
      text: 'Home',
      link: '/dashboard/home',
      icone: 'fa-solid fa-house',
      isActive: this.isAdmin() || this.isUser(),
    },
    {
      text: 'Users',
      link: 'Home',
      icone: 'fa-solid fa-users',
      isActive: this.isAdmin(),
    },
    {
      text: 'Recipes',
      link: 'Home',
      icone: 'fa-solid fa-bowl-food',
      isActive: this.isAdmin(),
    },
    {
      text: 'Categories',
      link: '/dashboard/admin/category',
      icone: 'fa-solid fa-layer-group',
      isActive: this.isAdmin(),
    },
    {
      text: 'Favorites',
      link: 'Home',
      icone: 'fa-solid fa-heart',
      isActive: this.isUser(),
    },
    {
      text: 'User Recipes',
      link: 'Home',
      icone: 'fa-solid fa-circle-user',
      isActive: this.isUser(),
    }
  ]


}
