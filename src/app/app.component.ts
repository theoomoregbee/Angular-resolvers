import { Component,  OnInit, OnDestroy } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {NavigationCancel, Event, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import { IMessage, MessageType, CloseType, NgAlertService } from '@theo4u/ng-alert';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy  {
   message: IMessage;
  closeTypes = CloseType;
  private _alertSub: Subscription;

   constructor(private _loadingBar: SlimLoadingBarService, private _ngAlert: NgAlertService, private _router: Router) {
    // subscribe to our router's event here
    this._router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

  ngOnInit () {
     this._alertSub = this._ngAlert.getSource().subscribe(message => {
      this.message = message;
    });
  }

  ngOnDestroy () {
    this._alertSub.unsubscribe();
  }

  /**
   * This is used to intercept and show Loading bar based on the current state of our
   * Router navigation
   * @param {Event} event
   */
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this._loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this._loadingBar.complete();
    }

    // Set loading state to false in both of the below events to hide the loader in case a request fails
    if (event instanceof NavigationCancel) {
      this._loadingBar.stop();
      this._loadingBar.complete();
    }
    if (event instanceof NavigationError) {
      this._loadingBar.stop();
      this._loadingBar.complete();
    }
  }
}
