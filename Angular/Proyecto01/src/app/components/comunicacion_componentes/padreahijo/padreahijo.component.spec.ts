import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreahijoComponent } from './padreahijo.component';

describe('PadreahijoComponent', () => {
  let component: PadreahijoComponent;
  let fixture: ComponentFixture<PadreahijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadreahijoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreahijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
