import { TestBed } from '@angular/core/testing';

import { LibRegisterPanelService } from './lib-register-panel.service';

describe('LibRegisterPanelService', () => {
  let service: LibRegisterPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibRegisterPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
