import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
// import{NgxD}

export const RegxPassword: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,20}$/;


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {


  constructor(private _AuthService: AuthService, private _ToastrService: ToastrService, private _Router: Router) { }



  see: boolean = true;
  see_2: boolean = true;
  password_type: string = 'text';
  password_type_2: string = 'text';
  isLoading: boolean = false;
  message: string = '"Welcome Again"';

  files: File[] = []

  RegisterForm: FormGroup = new FormGroup({
    userName: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    country: new FormControl(null, [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    password: new FormControl(null, [Validators.required, Validators.pattern(RegxPassword), Validators.maxLength(20), Validators.minLength(8)]),
    rePassword: new FormControl(''),
  }, { validators: [this.confirmPassword] } as FormControlOptions)

  confirmPassword(group: FormGroup): void {
    const password = group.get('password');
    const rePassword = group.get('rePassword');

    if (password?.value == '') {
      rePassword?.setErrors({ required: true })
    } else if (password?.value != rePassword?.value) {
      rePassword?.setErrors({ mismach: true })
    } else {
      rePassword?.setErrors(null);
    }
  }




  handleForm(): void {
    this.isLoading = true;
    let userData = this.RegisterForm.value;

    if (this.RegisterForm.valid) {
      this._AuthService.registerForm(userData).subscribe({
        next: (response) => {
          this.isLoading = false;
          console.log(response);
          localStorage.setItem('token', response.data.token)
          // console.log(localStorage.getItem('token'));
        },
        error: (err: any) => {
          this.isLoading = false;

          console.log(err);
          this._ToastrService.error(err.error.message, 'Error!');
        },
        complete: () => {
          this.isLoading = false;
          this._Router.navigate(['/login'])
          this._ToastrService.success(this.message, 'Hello');
        },
      });
    }
  }



  toggleSee() {
    this.see = !this.see;
    this.password_type = this.see ? 'text' : 'password';
  }

  toggleSee_2() {
    this.see_2 = !this.see_2;
    this.password_type_2 = this.see_2 ? 'text' : 'password';
  }


  // get passwordFormField() {
  //   return this.RegisterForm.get('password')?.errors?.['pattern'];
  // }

  // get passwordFormField() {
  //   return this.RegisterForm.get('password')?.errors?.['pattern'];
  // }

  routToLogin() {
    this._Router.navigate(['/auth/login'])
  }





  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles)
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1)
  }

}
