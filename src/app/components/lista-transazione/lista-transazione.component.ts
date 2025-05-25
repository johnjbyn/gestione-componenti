import { Component, Input } from '@angular/core';
import { Transazione } from '../../models/Transazione';
import { DatiTransazioneComponent } from '../dati-transazione/dati-transazione.component';

@Component({
  selector: 'app-lista-transazione',
  imports: [DatiTransazioneComponent],
  templateUrl: './lista-transazione.component.html',
  styleUrl: './lista-transazione.component.css',
})
export class ListaTransazioneComponent {
  @Input()
  transactions: Transazione[] = [];
}