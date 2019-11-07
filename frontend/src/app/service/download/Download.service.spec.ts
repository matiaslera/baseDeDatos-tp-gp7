/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DownloadService } from './Download.service';

describe('Service: Download', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DownloadService]
    });
  });

  it('should ...', inject([DownloadService], (service: DownloadService) => {
    expect(service).toBeTruthy();
  }));
});
