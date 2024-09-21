import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./shared/components/rooms/rooms.component";
import { PipesComponent } from './shared/components/pipes/pipes.component';
import { TestStylesComponent } from './shared/components/test-styles/test-styles.component';
import { LifecycleHooksComponent } from './shared/components/lifecycle-hooks/lifecycle-hooks.component';
import { ContentComponent } from './shared/components/content/content.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NgIf } from '@angular/common';
import { DestroyComponent } from './shared/components/destroy/destroy.component';
import { PlayersServiceComponent } from './shared/components/players-service/players-service.component';

@Component({
  //here the selector property has to be named this way:
  // ${prefix: from angular.json}-${componentName}
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NgIf, 
    RoomsComponent, 
    PipesComponent, 
    TestStylesComponent, 
    LifecycleHooksComponent, 
    ContentComponent, 
    HeaderComponent, 
    DestroyComponent, 
    PlayersServiceComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hotel-inventory-app';
}
