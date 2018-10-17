import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatacreationComponent } from './datacreation.component';

describe('DatacreationComponent', () => {
  let component: DatacreationComponent;
  let fixture: ComponentFixture<DatacreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatacreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatacreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
