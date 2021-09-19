import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { BulkDataComponent } from './bulk-data/bulk-data.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ComponentsRoutingModule
  ],
  declarations: [
    BulkDataComponent
  ]
})
export class ComponentsModule { }
