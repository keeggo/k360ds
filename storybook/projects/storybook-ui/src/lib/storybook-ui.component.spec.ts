import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorybookUiComponent } from './storybook-ui.component';

describe('StorybookUiComponent', () => {
  let component: StorybookUiComponent;
  let fixture: ComponentFixture<StorybookUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorybookUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorybookUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
