import { TestBed } from '@angular/core/testing';

import { IntroMessageClassesService } from './intro-message-classes.service';

describe('IntroMessageClassesService', () => {
  let service: IntroMessageClassesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntroMessageClassesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
