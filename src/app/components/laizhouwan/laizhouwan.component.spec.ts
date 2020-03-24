import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaizhouwanComponent } from './laizhouwan.component';

describe('LaizhouwanComponent', () => {
  let component: LaizhouwanComponent;
  let fixture: ComponentFixture<LaizhouwanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaizhouwanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaizhouwanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
