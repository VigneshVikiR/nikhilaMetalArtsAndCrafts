import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterpiecesHomeComponent } from './masterpieces-home.component';

describe('MasterpiecesHomeComponent', () => {
  let component: MasterpiecesHomeComponent;
  let fixture: ComponentFixture<MasterpiecesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterpiecesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterpiecesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
