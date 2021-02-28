import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../services/user/user.service';



@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html'
})
export class SplashPage {

  constructor(public navCtrl: NavController,private userService: UserService) {
  }

}
