import { Injectable } from '@angular/core';
import { IData } from '../interfaces/idata';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { MockHttpService } from '../services/mock-http.service';
import { NgAlertService, MessageType  } from '@theo4u/ng-alert';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

interface IReturn {
  records: IData[];
  dynamicTitle: string;
}

@Injectable()
export class RecordCompResolver implements Resolve<IReturn> {

  constructor(private _mockService: MockHttpService, private _ngAlert: NgAlertService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IReturn> {
     const withError = route.params['with-error'] === 'true';
    console.log('with error', typeof withError);
 return  Observable.forkJoin ([
      this._mockService.dynamicTitle('resolver'),
      this._mockService.request(withError)
    ])
    .map(results => ({
        dynamicTitle: results[0],
        records : results[1]
    }))
   .catch(error => {
      this._ngAlert.push({
        message: error.message,
        type: MessageType.error
      });
      return Observable.throw(error);
    });
  }

}
