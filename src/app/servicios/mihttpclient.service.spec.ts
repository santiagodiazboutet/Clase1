import { TestBed } from '@angular/core/testing';

import { MihttpclientService } from './mihttpclient.service';

describe('MihttpclientService', () => {
  let service: MihttpclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MihttpclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
