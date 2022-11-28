import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucculentComponent } from './succulent.component';

describe('SucculentComponent', () => {
  let component: SucculentComponent;
  let fixture: ComponentFixture<SucculentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucculentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucculentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
