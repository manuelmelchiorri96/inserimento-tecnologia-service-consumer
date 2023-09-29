import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-risultato-inserimento-tecnologia',
  templateUrl: './risultato-inserimento-tecnologia.component.html',
  styleUrls: ['./risultato-inserimento-tecnologia.component.css'],
})
export class RisultatoInserimentoTecnologiaComponent implements OnInit {
  nomeTecnologia!: string;
  messaggioErrore!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.nomeTecnologia = params['nomeTecnologia'];
      this.messaggioErrore = params['messaggioErrore'];
    });
  }
}
