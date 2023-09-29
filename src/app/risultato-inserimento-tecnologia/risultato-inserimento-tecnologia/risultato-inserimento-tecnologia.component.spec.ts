import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RisultatoInserimentoTecnologiaComponent } from './risultato-inserimento-tecnologia.component';

describe('RisultatoInserimentoTecnologiaComponent', () => {
  let component: RisultatoInserimentoTecnologiaComponent;
  let fixture: ComponentFixture<RisultatoInserimentoTecnologiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RisultatoInserimentoTecnologiaComponent]
    });
    fixture = TestBed.createComponent(RisultatoInserimentoTecnologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
