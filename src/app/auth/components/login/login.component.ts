import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

export const RegxPassword: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,20}$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent {

  constructor(private _AuthService: AuthService, private _ToastrService: ToastrService, private _Router: Router) { }



  //  = ;
  see: boolean = true;
  isLoading: boolean = false;
  password_type: string = 'text';
  message: string = '"Welcome Again"';

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(RegxPassword), Validators.maxLength(20), Validators.minLength(8)])
  })


  handleForm(data: FormGroup): void {
    this.isLoading = true;
    // let userData = this.loginForm.value;
    console.log(data.value);
    let userData = data.value;
    // if (this.loginForm.valid) {
    this._AuthService.onLogin(userData).subscribe({
      next: (response) => {
        console.log(response);
        this.isLoading = false;
        // localStorage.

        localStorage.setItem('token_1', JSON.stringify(response.token))
        console.log(localStorage.getItem('token_1'))
        // console.log(localStorage.getItem('token'));
      }, error: (err: any) => {
        this.isLoading = false;

        console.log(err);
        this._ToastrService.error(err.error.message, 'Error enter your data by correctly try by another email ! ');
      },
      complete: () => {
        this.isLoading = false;
        // this._Router.navigate(['/dashboard'])
        this._ToastrService.success(this.message, 'Hello');
      },
    });
    // }
  }



  toggleSee() {
    this.see = !this.see;
    this.password_type = this.see ? 'text' : 'password';
  }


  // get passwordFormField() {
  //   return this.loginForm.get('password')?.errors?.['pattern'];
  // }

  get passwordFormField() {
    return this.loginForm.get('password')?.errors?.['pattern'];
  }

  routToRegister() {
    this._Router.navigate(['/auth/register'])
  }
}
