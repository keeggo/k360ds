import { TestBed } from '@angular/core/testing';

import { StorybookUiService } from './storybook-ui.service';

describe('StorybookUiService', () => {
  let service: StorybookUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorybookUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
