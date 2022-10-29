import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExposedComponent } from './exposed.component';

describe('ExposedComponent', () => {
  let component: ExposedComponent;
  let fixture: ComponentFixture<ExposedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExposedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExposedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
