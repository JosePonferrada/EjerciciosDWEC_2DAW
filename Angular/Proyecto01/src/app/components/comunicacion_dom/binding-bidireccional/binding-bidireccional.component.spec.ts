import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingBidireccionalComponent } from './binding-bidireccional.component';

describe('BindingBidireccionalComponent', () => {
  let component: BindingBidireccionalComponent;
  let fixture: ComponentFixture<BindingBidireccionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindingBidireccionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingBidireccionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
