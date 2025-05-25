import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTransazioneComponent } from './lista-transazione.component';

describe('ListaTransazioneComponent', () => {
  let component: ListaTransazioneComponent;
  let fixture: ComponentFixture<ListaTransazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTransazioneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTransazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
