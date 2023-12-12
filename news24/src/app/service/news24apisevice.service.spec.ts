import { TestBed } from '@angular/core/testing';

import { News24apiseviceService } from './news24apisevice.service';

describe('News24apiseviceService', () => {
  let service: News24apiseviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(News24apiseviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
