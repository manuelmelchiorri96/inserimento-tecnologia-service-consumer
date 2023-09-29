import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InserimentoTecnologiaComponent } from './inserire-tecnologia/inserimento-tecnologia/inserimento-tecnologia.component';
import { RisultatoInserimentoTecnologiaComponent } from './risultato-inserimento-tecnologia/risultato-inserimento-tecnologia/risultato-inserimento-tecnologia.component';

const routes: Routes = [
  { path: 'inserisciTecnologia', component: InserimentoTecnologiaComponent },
  {
    path: 'risultato-inserimento-tecnologia',
    component: RisultatoInserimentoTecnologiaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
