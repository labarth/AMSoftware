import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesTotalComponent } from './notes-total.component';

describe('NotesTotalComponent', () => {
  let component: NotesTotalComponent;
  let fixture: ComponentFixture<NotesTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
