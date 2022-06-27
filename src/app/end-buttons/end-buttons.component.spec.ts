import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndButtonsComponent } from './end-buttons.component';

describe('EndButtonsComponent', () => {
  let component: EndButtonsComponent;
  let fixture: ComponentFixture<EndButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
