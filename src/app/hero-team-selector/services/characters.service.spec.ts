import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CharactersService } from './characters.service';

describe('CharactersService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: CharactersService = TestBed.get(CharactersService);
    expect(service).toBeTruthy();
  });
});
