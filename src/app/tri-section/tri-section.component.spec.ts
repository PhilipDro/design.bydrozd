import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriSectionComponent } from './tri-section.component';

describe('TriSectionComponent', () => {
  let component: TriSectionComponent;
  let fixture: ComponentFixture<TriSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
