import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { CharactersService } from './characters.service';

describe('CharactersService', () => {
  let httpTestingController: HttpTestingController;
  let service: CharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(CharactersService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return array of heroes when fetchHeroes method was called', () => {
    const mockHeroes = [
      {
        id: 1,
        name: 'Deadpool',
        real_name: 'Wade Wilson',
        thumb:
          'https://i.annihil.us/u/prod/marvel/i/mg/9/90/5261a86cacb99/standard_xlarge.jpg',
        image: 'https://i.annihil.us/u/prod/marvel/i/mg/9/90/5261a86cacb99.jpg',
        description: ''
      },
      {
        id: 2,
        name: 'Hulk',
        real_name: 'Robert Bruce Banner',
        thumb:
          'https://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg',
        image: 'https://i.annihil.us/u/prod/marvel/i/mg/e/e0/537bafa34baa9.jpg',
        description:
          'Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.'
      }
    ];

    service.fetchHeroes().subscribe(heroes => {
      expect(heroes.length).toEqual(2);
      expect(heroes[0].name).toEqual('Deadpool');
    });

    const req = httpTestingController.expectOne('http://localhost:8080/hero');

    expect(req.request.method).toEqual('GET');

    req.flush(mockHeroes);
  });

  it('should return array of heroes when fetchHeroes method was called', () => {
    const mockWicked = [
      {
        id: 1,
        name: 'Loki',
        real_name: 'Loki',
        thumb:
          'http://i.annihil.us/u/prod/marvel/i/mg/d/90/526547f509313/standard_xlarge.jpg',
        image: 'http://i.annihil.us/u/prod/marvel/i/mg/d/90/526547f509313.jpg',
        description: ''
      },
      {
        id: 2,
        name: 'Thanos',
        real_name: 'Thanos',
        thumb:
          'http://i.annihil.us/u/prod/marvel/i/mg/6/40/5274137e3e2cd/standard_xlarge.jpg',
        image: 'http://i.annihil.us/u/prod/marvel/i/mg/6/40/5274137e3e2cd.jpg',
        description:
          'The Mad Titan Thanos, a melancholy, brooding individual, consumed with the concept of death, sought out personal power and increased strength, endowing himself with cybernetic implants until he became more powerful than any of his brethren.'
      }
    ];

    service.fetchWicked().subscribe(wicked => {
      expect(wicked.length).toEqual(2);
      expect(wicked[0].name).toEqual('Loki');
    });

    const req = httpTestingController.expectOne('http://localhost:8080/wicked');

    expect(req.request.method).toEqual('GET');

    req.flush(mockWicked);
  });
});
