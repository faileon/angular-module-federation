import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteLibEntryComponent } from './remote-lib-entry.component';

describe('RemoteLibEntryComponent', () => {
  let component: RemoteLibEntryComponent;
  let fixture: ComponentFixture<RemoteLibEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemoteLibEntryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RemoteLibEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
