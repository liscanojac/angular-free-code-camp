import { transition } from '@angular/animations';
import { JsonPipe } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'hinvapp-player-title',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './player-title.component.html',
  styleUrl: './player-title.component.css'
})
export class PlayerTitleComponent implements OnChanges {
  @Input({ transform: (value: string) => value || 'Default Title'}) title!: string;
  showChanges: SimpleChanges = {};
  ngOnChanges(changes: SimpleChanges): void {
    this.showChanges = changes;
  }
}
