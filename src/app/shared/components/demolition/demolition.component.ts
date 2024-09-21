import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { PlayerService } from '../../services/players/player.service';

@Component({
  selector: 'hinvapp-demolition',
  standalone: true,
  imports: [],
  templateUrl: './demolition.component.html',
  styleUrl: './demolition.component.css'
})
export class DemolitionComponent implements OnDestroy, OnInit {

  @Output() destructionEvent = new EventEmitter();

  ngOnInit(): void {
    console.log('initalHook')
  }

  constructor(private playerService: PlayerService) {
    
  }
  ngOnDestroy(): void {
    console.log('testingDestruction');
    this.destructionEvent.emit();
  }
}
