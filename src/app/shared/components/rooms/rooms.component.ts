import { JsonPipe, NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { Item } from './models/rooms.model';
import { Player, players } from './models/players.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'hinvapp-rooms',
  standalone: true,
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault, FormsModule, NgClass, NgStyle, JsonPipe],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
})
export class RoomsComponent {
  hotelName = 'Hilton'
  onTetsClass = true;
  onTestClass2 = false;
  testNum = 0;
  testIfElseBoolean = false;
  items: Array<Item> = [
    {
      name: 'name1',
      rank: 1
    },
    {
      name: 'name2',
      rank: 2
    },
    {
      name: 'name3',
      rank: 3
    }
  ];
  // We have to set an initial value to the variable tied to the ngModel
  // that matches its type of variable. Otherwise, in this select input 
  // the placeholder would not show up due to the inital value having
  // typing issues.
  // I set the initial value to pass it to the currentPlayer Model and the first option value in the select input
  currentPlayerInitialValue: Player = {
    number: 0,
    name: ''
  };
  currentPlayer: Player = this.currentPlayerInitialValue;
  players = players;
  changeClass() {
    this.onTestClass2 = !this.onTestClass2;
  }
  canSave = true;
  isSpecial = true;
  isUnchanged = true;
  currentStyles: Record<string, string> = {};
  secondStyles = {
    shape: true,
    weight: true,
    size: true
  }
  testStyles = {}
  sumNum() {
    this.testNum++;
  }
  resetBtn() {
    this.testNum = 0
  }
  toggleContent() {
    this.testIfElseBoolean = !this.testIfElseBoolean;
  }
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px',
    };
  }
  setSecondStyles() {
    this.testStyles = {
      'font-style': this.secondStyles.shape ? 'italic' : 'normal',
      'font-weight': !this.secondStyles.weight ? 'bold' : 'normal',
      'font-size': this.secondStyles.size ? '24px' : '12px',
    };
  }
}
