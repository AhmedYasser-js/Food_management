import { CanActivateFn, Router } from '@angular/router';
import { Injectable } from '@angular/core';


// @Injectable({
//   providedIn: 'root'
// })
export const authGuard: CanActivateFn = (route, state) => {
  // constructor(private _Router: Router) { }

  //   canActivate(): boolean {
  //   if (localStorage.getItem('token') !== null) {
  //     return true;
  //   } else {
  //     this.router.navigate(['/auth/login']);
  //     return false;
  //   }
  // }

  return true;
};

// import { CanActivate, Router } from '@angular/router';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {

//   constructor(private router: Router) { }

//   canActivate(): boolean {
//     if (localStorage.getItem('token') !== null) {
//       return true;
//     } else {
//       this.router.navigate(['/auth/login']);
//       return false;
//     }
//   }
// }
