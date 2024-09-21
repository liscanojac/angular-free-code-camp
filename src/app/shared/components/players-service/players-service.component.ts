import { Component, OnInit } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { PlayerService } from '../../services/players/player.service';
import { Player } from '../rooms/models/players.model';
import { NullInjectorService } from '../../services/null-injector-example/null-injector.service';

@Component({
  selector: 'hinvapp-players-service',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './players-service.component.html',
  styleUrl: './players-service.component.css',
})
export class PlayersServiceComponent implements OnInit {

  // we should never instanciate the service like this
  // playersService = new PlayerService();
  players: Array<Player> = [];

  // we should use private on the constructor declaration
  // otherwise the service and its fucntion could be used in the component template which is against good practices
  constructor(
    private playerService: PlayerService,
    // this is how you use multiple services in one single component
    private nullInjectionService: NullInjectorService
  ) {};
  

  ngOnInit(): void {
    this.players = this.playerService.getPlayers();
  }
}
