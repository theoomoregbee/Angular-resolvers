import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
<h6 class="border-bottom border-gray pb-2 mb-0">Home</h6>
<p style="padding-top: 1rem">Welcome to Angular Resolver</p>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
