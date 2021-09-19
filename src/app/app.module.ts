import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';

import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';

@NgModule({
  imports: [
    CommonModule, 
    BrowserModule, 
    AppRoutingModule, 
    PagesModule, 
    AuthModule, 
    HttpClientModule, 
    RouterModule,
    ComponentsModule
  ],
  declarations: [AppComponent, NoPageFoundComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
