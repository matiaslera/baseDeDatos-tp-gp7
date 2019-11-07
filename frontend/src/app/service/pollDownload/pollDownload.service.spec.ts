/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PollDownloadService } from './pollDownload.service';

describe('Service: PollDownload', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PollDownloadService]
    });
  });

  it('should ...', inject([PollDownloadService], (service: PollDownloadService) => {
    expect(service).toBeTruthy();
  }));
});
