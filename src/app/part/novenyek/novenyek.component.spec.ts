import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovenyekComponent } from './novenyek.component';

describe('NovenyekComponent', () => {
  let component: NovenyekComponent;
  let fixture: ComponentFixture<NovenyekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovenyekComponent]
    });
    fixture = TestBed.createComponent(NovenyekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
