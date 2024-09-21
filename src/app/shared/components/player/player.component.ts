import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Player } from '../rooms/models/players.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'hinvapp-player',
  standalone: true,
  imports: [NgClass],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {

  @Input({required: true}) player!: Player;
  @Output() lastSelectedPlayer = new EventEmitter<Player>();

  selectPlayer(player: Player) {
    player.selected = !player.selected;
    this.emitLastSelectedPlayer(player);
  }

  emitLastSelectedPlayer(player: Player) {
    this.lastSelectedPlayer.emit(player);
  }
}
