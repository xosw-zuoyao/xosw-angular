import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XoswComponent } from './xosw.component';

describe('XoswComponent', () => {
  let component: XoswComponent;
  let fixture: ComponentFixture<XoswComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XoswComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XoswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
