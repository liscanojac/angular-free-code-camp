import { Component } from '@angular/core';
import { DestroyBtnComponent } from '../destroy-btn/destroy-btn.component';
import { DemolitionComponent } from '../demolition/demolition.component';
import { NgIf } from '@angular/common';
import { PlayerService } from '../../services/players/player.service';

@Component({
  selector: 'hinvapp-destroy',
  standalone: true,
  imports: [DestroyBtnComponent, DemolitionComponent, NgIf],
  templateUrl: './destroy.component.html',
  styleUrl: './destroy.component.css',
  // as you can see I dont nee to even use the constructor inside the class to call the service, just by instanciate it in the providers the console log in the constructor, gets called twice!
  providers: [PlayerService]
})
export class DestroyComponent {

  destroyed: boolean = false;
  destructionCount: number = 0;

  destroy(destroyedEmitted: boolean) {
    this.destroyed = destroyedEmitted;
  }

  destructionCounter() {
    this.destructionCount++;
  }
}
