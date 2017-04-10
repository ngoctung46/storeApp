import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompletePage } from '../complete-page/complete-page';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
/**
 * Generated class for the CheckoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-checkout-page',
  templateUrl: 'checkout-page.html',
})
export class CheckoutPage {
  delivery: any;
  submitAttempt: boolean = false;
  shippingForm: FormGroup;
  orderLines: any;
  orders: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public af:AngularFire) {
    this.shippingForm = formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.email],
      deliveryDate:['',Validators.required]
    });
    this.delivery = new Date();
    this.orderLines = this.navParams.data.orderLines;
    this.orders = af.database.list('/orders');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }



  gotoComplete() {
    this.submitAttempt = true;
    if (!this.shippingForm.valid) {
      return;
    }
    else {
      this.orders.push({
        orderLines: this.orderLines,
        name: this.shippingForm.value.name,
        address: this.shippingForm.value.address,
        email: this.shippingForm.value.email,
        phone: this.shippingForm.value.phone,
        deliveryDate: this.shippingForm.value.deliveryDate
      });
    }
    this.navCtrl.push(CompletePage);
  }

}
