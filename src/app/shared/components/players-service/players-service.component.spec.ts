import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersServiceComponent } from './players-service.component';

describe('PlayersServiceComponent', () => {
  let component: PlayersServiceComponent;
  let fixture: ComponentFixture<PlayersServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
