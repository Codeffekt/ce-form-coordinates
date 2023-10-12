import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCoordinatesBlockComponent } from './form-coordinates-block.component';

describe('FormCoordinatesBlockComponent', () => {
  let component: FormCoordinatesBlockComponent;
  let fixture: ComponentFixture<FormCoordinatesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCoordinatesBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCoordinatesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
