import { TestBed } from '@angular/core/testing';

import { LibWizardPanelService } from './lib-wizard-panel.service';

describe('LibWizardPanelService', () => {
  let service: LibWizardPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibWizardPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
