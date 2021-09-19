import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'src/app/models/auth.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.userForm = this.formBuilder.group({
      username: [localStorage.getItem('username') || '', Validators.required],
      password: ['', Validators.required],
      remember: [false]
    });
  }

  login(): void {
    if (this.userForm.valid) {
      const auth = this.userForm.value as Auth;
    
      this.authService.login(auth).subscribe(response=> {

        this.authService.handleSession(response);
        this.authService.remember(auth);

        this.router.navigate(['/admin']);

      }, this.handleError);

    } else {
      this.userForm.markAllAsTouched();
    }
  }

  handleError(error): void {
    Swal.fire('¡Oops!', '¡Ocurrio un error, intente más tarde por favor!', 'error');
  }

  isValidField(field: string): boolean {
    return this.userForm.get(field).touched && this.userForm.get(field).valid;
  }
}
