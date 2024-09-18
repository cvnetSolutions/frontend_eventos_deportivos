import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipanteListComponent } from './participante-list.component';

describe('ParticipanteListComponent', () => {
  let component: ParticipanteListComponent;
  let fixture: ComponentFixture<ParticipanteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipanteListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipanteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
