import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterpieceDetailComponent } from './masterpiece-detail.component';

describe('MasterpieceDetailComponent', () => {
  let component: MasterpieceDetailComponent;
  let fixture: ComponentFixture<MasterpieceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterpieceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterpieceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
