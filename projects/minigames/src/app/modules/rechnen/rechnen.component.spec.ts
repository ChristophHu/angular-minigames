import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechnenComponent } from './rechnen.component';

describe('RechnenComponent', () => {
  let component: RechnenComponent;
  let fixture: ComponentFixture<RechnenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechnenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechnenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
