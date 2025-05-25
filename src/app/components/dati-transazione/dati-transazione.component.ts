import { Component, Input } from '@angular/core';
import { Transazione } from '../../models/Transazione';
import { CurrencyPipe, DatePipe, NgClass, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-dati-transazione',
  imports: [NgClass, CurrencyPipe, UpperCasePipe, DatePipe],
  templateUrl: './dati-transazione.component.html',
  styleUrl: './dati-transazione.component.css',
})
export class DatiTransazioneComponent {
  @Input()
  transazione?: Transazione;

  convertTimestamp(timestamp: number): Date {
    return new Date(timestamp * 1000);
  }
}