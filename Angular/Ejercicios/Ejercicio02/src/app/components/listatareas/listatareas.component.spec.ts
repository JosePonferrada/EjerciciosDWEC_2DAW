import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListatareasComponent } from './listatareas.component';

describe('ListatareasComponent', () => {
  let component: ListatareasComponent;
  let fixture: ComponentFixture<ListatareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListatareasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListatareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
