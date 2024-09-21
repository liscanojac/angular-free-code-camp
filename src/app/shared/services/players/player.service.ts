import { Injectable } from '@angular/core';
import { Player } from '../../components/rooms/models/players.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players: Array<Player> = [
    {
      number: 1,
      name: 'Courtois'
    },
    {
      number: 2,
      name: 'Carvajal',
    },
    {
      number: 3,
      name: 'Militao'
    },
    {
      number: 4,
      name: 'Alaba'
    },
    {
      number: 5,
      name: 'Bellingham'
    },
    {
      number: 6,
      name: 'Camavinga'
    },
    {
      number: 7,
      name: 'Vinicius'
    },
    {
      number: 8,
      name: 'Valverde'
    },
    {
      number: 9,
      name: 'Mbappe'
    },
    {
      number: 10,
      name: 'Modric'
    },
    {
      number: 11,
      name: 'Rodrygo'
    }
  ];

  constructor() { 
    // This shows that despite being instansiated on two components:
    // players-service and demolition, this console log only shows once
    // because the classs instance is only called once in here
    console.log('Times called');

    // but if we pass the service inside the providers array in the component, we get a new instance for that component in particular,
    // as you can see in destroy component
  }

  getPlayers() {
    return this.players;
  }
}
