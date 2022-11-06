import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //html
    MaterialModule,//e usar os elementos do angulamaterial
    //ts
    ReactiveFormsModule,// para submeter um formulario
    //service
    HttpClientModule, // para fazer requisição http
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
