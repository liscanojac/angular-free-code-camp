import { Component, OnInit } from '@angular/core';
import { PlayersComponent } from '../players/players.component';

@Component({
  selector: 'hinvapp-lifecycle-hooks',
  standalone: true,
  imports: [PlayersComponent],
  templateUrl: './lifecycle-hooks.component.html',
  styleUrl: './lifecycle-hooks.component.css'
})
export class LifecycleHooksComponent implements OnInit {

  initalVar = 'initialValue';
  ngOnInit(): void {
    this.initalVar = 'initValue'
  }
}
