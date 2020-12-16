import { TestBed } from '@angular/core/testing';

import { RecipesHookService } from './recipes-hook.service';

describe('RecipesHookService', () => {
  let service: RecipesHookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipesHookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
