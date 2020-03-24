import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsdbComponent } from './bsdb.component';

describe('BsdbComponent', () => {
  let component: BsdbComponent;
  let fixture: ComponentFixture<BsdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
