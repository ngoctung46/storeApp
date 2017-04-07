import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cart } from './cart';
import { CheckoutPage } from '../checkout-page/checkout-page';

/**
 * Generated class for the CartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cart-page',
  templateUrl: 'cart-page.html',
})
export class CartPage {
  orderLines:any[];  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.orderLines = Cart.getOrderLines();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }
  getTotal(){
    let total: number = 0;
    this.orderLines.forEach(ol => total += ol.price * ol.quantity);
    return total;
  }

  gotoCheckout(){
    this.navCtrl.push(CheckoutPage,{ orderLines: this.orderLines });
  }

}
