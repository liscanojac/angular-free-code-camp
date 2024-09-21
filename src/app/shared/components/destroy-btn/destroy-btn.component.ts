import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'hinvapp-destroy-btn',
  standalone: true,
  imports: [],
  templateUrl: './destroy-btn.component.html',
  styleUrl: './destroy-btn.component.css'
})
export class DestroyBtnComponent {

  @Output() destructionEvent = new EventEmitter<boolean>();

  destroyed: boolean = false;
  destroyBtn: string = 'Destroy';

  destroy() {
    this.destroyed = !this.destroyed;
    this.destroyBtn = this.destroyed ? 'Rebuild' : 'Destroy';
    this.destructionEvent.emit(this.destroyed);
  }
}
