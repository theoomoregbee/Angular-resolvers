import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IData } from '../interfaces/idata';

@Injectable()
export class MockHttpService {
 private  _mock: IData [] = [];

  constructor() {
    for (let i = 0; i < 20; i++) {
      this._mock.push({
        name: 'Data ' + i,
        id: i,
        createdAt: new Date().toISOString()
      });
    }
  }

  dynamicTitle(type: string, delay: number= 3000): Observable<string> {
    return Observable.create(observer => {
      setTimeout(() => {
        if (type === 'resolver') {
        observer.next('Fetched Data from Resolver');
        } else {
          observer.next('Fetched Title From non resolver');
        }
        observer.complete();
      }, delay);
    });
  }

  request(failure: boolean, delay: number= 2000): Observable<IData[]> {
    return Observable.create(observer => {
      setTimeout(() => {
        if (failure) {
          observer.error(new Error('Error making request'));
        } else {
          observer.next(this._mock);
        }

        observer.complete();
      }, delay);
    });
  }


}
