import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMyinfoComponent } from './display-myinfo.component';

describe('DisplayMyinfoComponent', () => {
  let component: DisplayMyinfoComponent;
  let fixture: ComponentFixture<DisplayMyinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMyinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMyinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
