import { CurrencyPipe, JsonPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'hinvapp-test-styles',
  standalone: true,
  imports: [FormsModule, JsonPipe, NgClass, CurrencyPipe],
  templateUrl: './test-styles.component.html',
  styleUrl: './test-styles.component.css'
})
export class TestStylesComponent {

  stylesModel = {
    italic: false,
    bold: false,
    large: false
  }
  testNum = 32;
}
