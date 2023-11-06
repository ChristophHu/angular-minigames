import { TestBed } from '@angular/core/testing';

import { JsonFormService } from './json-form.service';

describe('JsonFormService', () => {
  let service: JsonFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
