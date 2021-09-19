import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule, AuthRoutingModule, ReactiveFormsModule
  ],
  declarations: [
    LoginComponent
  ],
  
})
export class AuthModule { }
