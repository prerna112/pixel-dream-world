import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamWorldComponent } from './dream-world.component';

describe('DreamWorldComponent', () => {
  let component: DreamWorldComponent;
  let fixture: ComponentFixture<DreamWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DreamWorldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DreamWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
