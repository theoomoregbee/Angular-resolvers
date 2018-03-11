import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IData } from '../interfaces/idata';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styles: []
})
export class RecordsComponent implements OnInit {
  data: IData[] = [];
  dynamicTitle: string;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.data = this._route.snapshot.data.pageData.records || [];
    this.dynamicTitle = this._route.snapshot.data.pageData.dynamicTitle;
  }

}
