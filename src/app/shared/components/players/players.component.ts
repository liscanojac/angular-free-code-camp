import { JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { players, Player } from '../rooms/models/players.model';
import { PlayerComponent } from '../player/player.component';
import { PlayerTitleComponent } from '../player-title/player-title.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'hinvapp-players',
  standalone: true,
  imports: [NgFor, PlayerComponent, NgClass, NgIf, JsonPipe, PlayerTitleComponent, FormsModule, HeaderComponent],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayersComponent {

  lastPlayerSelected: Player = {
    name: '',
    number: 0
  };
  players: Array<Player> = players;
  titleInput: string = '';
  title: string = ''; 

  setLastPlayerSelected(player: Player) {
    if (player.selected) this.lastPlayerSelected = player;
  }

  submitTitle() {
    this.title = this.titleInput;
    this.titleInput = '';
  }
}
