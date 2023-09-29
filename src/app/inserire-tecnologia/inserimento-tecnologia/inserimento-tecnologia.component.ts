import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tecnologia } from 'src/app/model/tecnologia';
import { TecnologiaService } from 'src/app/service/tecnologia.service';

@Component({
  selector: 'app-inserimento-tecnologia',
  templateUrl: './inserimento-tecnologia.component.html',
  styleUrls: ['./inserimento-tecnologia.component.css'],
})
export class InserimentoTecnologiaComponent implements OnInit {
  tecnologia: Tecnologia = {
    nome: '',
    categoria: '',
  };
  categorie: any[] = [];

  constructor(
    private tecnologiaService: TecnologiaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.leggiCategorie();
  }

  leggiCategorie() {
    this.tecnologiaService.leggiCategorie().subscribe({
      next: (data: any[]) => {
        this.categorie = data;
      },
      error: (error: any) => {
        console.error('Errore nel recupero delle categorie', error);
      },
    });
  }

  inserisciTecnologia() {
    this.tecnologiaService.inserisciTecnologia(this.tecnologia).subscribe({
      next: (data: any) => {
        console.log(data);
        console.log(this.tecnologia);

        this.vediRisultatoInserimento();
      },
      error: (error: any) => {
        console.log(this.tecnologia);
        console.error("Errore durante l'inserimento della tecnologia", error);

        this.vediRisultatoInserimento(error.error.message);
      },
    });
  }

  vediRisultatoInserimento(messaggioErrore?: string) {
    this.router.navigate(['risultato-inserimento-tecnologia'], {
      queryParams: {
        nomeTecnologia: this.tecnologia.nome,
        messaggioErrore: messaggioErrore,
      },
    });
  }
}
