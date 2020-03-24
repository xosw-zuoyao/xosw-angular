import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsProvinceComponent } from './echarts-province.component';

describe('EchartsProvinceComponent', () => {
  let component: EchartsProvinceComponent;
  let fixture: ComponentFixture<EchartsProvinceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsProvinceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
