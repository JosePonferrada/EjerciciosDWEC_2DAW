import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaNgIfComponent } from './directiva-ng-if.component';

describe('DirectivaNgIfComponent', () => {
  let component: DirectivaNgIfComponent;
  let fixture: ComponentFixture<DirectivaNgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivaNgIfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivaNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
