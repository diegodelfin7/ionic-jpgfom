import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { UserService } from '../../services/user/UserService';

@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html'
})
export class SplashPage {

  constructor(public navCtrl: NavController) {
    //console.log('service', this.userService);
  }

}
