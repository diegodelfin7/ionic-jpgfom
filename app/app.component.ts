import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';

import { SplashPage } from '../pages/splash/splash';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = TabsPage;
  rootPage:any = SplashPage;
  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

    });
  }
}
