import { Component, OnInit } from '@angular/core';
import { MockHttpService } from '../services/mock-http.service';
import { IData } from '../interfaces/idata';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';

import { NgAlertService, MessageType  } from '@theo4u/ng-alert';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-no-resolver',
  templateUrl: './no-resolver.component.html',
  styles: []
})
export class NoResolverComponent implements OnInit {
  data: IData[] = [];
  dynamicTitle: string;
  loader = false;

  constructor(private _activatedRoute: ActivatedRoute, private _mockService: MockHttpService, private _ngAlert: NgAlertService) {  }

  ngOnInit() {
    this.loader = true;
    // subscripe to the param here, this is just for quick demo test
     const withError = this._activatedRoute.snapshot.params['with-error'] === 'true';
Observable.forkJoin ([
      this._mockService.dynamicTitle('resolver'),
      this._mockService.request(withError)
    ])
    .subscribe(results => {
        this.dynamicTitle = results[0];
        this.data = results[1];
      this.loader = false;
    }, error => {
      this._ngAlert.push({
        message: error.message,
        type: MessageType.error
      });
      this.loader = false;
    });

  }

}
