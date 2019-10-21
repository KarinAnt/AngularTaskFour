import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { MeinComponent } from './mein/mein.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeinArrayComponent } from './mein-array/mein-array.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    MeinComponent,
    MeinArrayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
