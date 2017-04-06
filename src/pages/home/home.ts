import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  slide1Msg: string;
  slide2Msg: string;
  slide3Msg: string;
  constructor(public navCtrl: NavController) {
    this.slide1Msg = `
      Welcome to Hang snail restaurant. You have made a right choice
      We have a variety of snails with secret recepies and ingredient
      to your appetide.  
    `;
  }

}
