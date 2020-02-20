import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { OrdinateursComponent } from './components/ordinateurs/ordinateurs.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AjoutOrdinateursComponent } from './components/ajout-ordinateurs/ajout-ordinateurs.component';
import { EditOrdinateursComponent } from './components/edit-ordinateurs/edit-ordinateurs.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OrdinateursComponent,
    AjoutOrdinateursComponent,
    EditOrdinateursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
