import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InserimentoTecnologiaComponent } from './inserire-tecnologia/inserimento-tecnologia/inserimento-tecnologia.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { RisultatoInserimentoTecnologiaComponent } from './risultato-inserimento-tecnologia/risultato-inserimento-tecnologia/risultato-inserimento-tecnologia.component';

@NgModule({
  declarations: [AppComponent, InserimentoTecnologiaComponent, NavbarComponent, RisultatoInserimentoTecnologiaComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
