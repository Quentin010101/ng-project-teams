import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragableContainerComponent } from './dragable-container.component';

describe('DragableContainerComponent', () => {
  let component: DragableContainerComponent;
  let fixture: ComponentFixture<DragableContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragableContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
