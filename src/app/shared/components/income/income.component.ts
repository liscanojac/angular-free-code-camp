import { CurrencyPipe, registerLocaleData } from '@angular/common';
import { Component, Input, LOCALE_ID } from '@angular/core';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

@Component({
  selector: 'hinvapp-income',
  standalone: true,
  imports: [CurrencyPipe],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export class IncomeComponent {
  @Input({ required: true }) salary: number = 0;
}
