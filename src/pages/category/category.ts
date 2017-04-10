import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController, PopoverController, ToastController } from 'ionic-angular';
import { Cart } from '../cart-page/cart';
import { CartPage } from '../cart-page/cart-page';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/toPromise';
/**
 * Generated class for the Category page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  filterCategories: any = [];
  filterProducts: any = [];
  selectedCategory: string = 'Ốc';
  selectedProducts: any[];
  products: FirebaseListObservable<any>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtr: PopoverController,
    public af: AngularFire) {
    this.products = this.af.database.list('/products');    
    this.products.subscribe((x: any[]) => {
      x.forEach(e => {
        this.filterCategories.push(e.category);
      });
      this.filterCategories = this.filterCategories.filter(function (item, pos, self) {
        return pos == self.indexOf(item);
      });
    });
    this.setSelectedProducts('Ốc');
  }

  ionViewEnter(){
    
  }
  ionViewDidLoad() {    
    console.log('ionViewDidLoad Category');
  }

  presentProduct(event, product) {
    let productPopover = this.popoverCtr.create(PopoverPage, { product: product });
    productPopover.present();
  }

  goToCartPage() {
    this.navCtrl.push(CartPage);
  }


  setSelectedProducts(category){
    console.log("Selected Category: " + this.selectedCategory);
    this.products.subscribe((x: any[]) => {
      this.filterProducts = x.filter(e => e.category === category);
    });
  }  
}
@Component({
  template: `
  <ion-content>
  <ion-card>
    <img src="assets/images/{{ product.url}}" />
    <ion-card-content>
        <ion-card-title text-center>
            {{ product.name }}
        </ion-card-title>
     
        <p align="center">
            {{ product.description }}
        </p>
        <ion-item *ngIf="product.category != 'Nước Ngọt'">
            <ion-label>Cách Chế Biến</ion-label>
            <ion-select [(ngModel)]= "selectedModifier">
              <ion-option *ngFor="let modifier of modifiers | async" [value]="modifier">{{ modifier.name }}</ion-option>
            </ion-select>
        </ion-item>
        <ion-item style="font-size: 14px;">        
           Giá:
          <ion-badge item-right color="assertive">{{ product.price | number }}đ</ion-badge>
        </ion-item>
        <ion-item item-right>
        <button ion-button full color='secondary' (click)=addToCart()>Đặt Món Này</button>
        </ion-item>
    </ion-card-content>
  </ion-card>
<ion-content>
`

})
export class PopoverPage {
  product: any;
  modifiers: FirebaseListObservable<any>;

  selectedModifier: any;
  constructor(
    public viewCtrl: ViewController,
    public navParms: NavParams,
    public toastCtrl: ToastController,
    public af: AngularFire) {
    this.product = this.navParms.data.product;
    this.modifiers = af.database.list('/modifiers');
  }
  ionViewDidLoad() {

  }
  addToCart() {
    let isAdd = true;
    if (typeof this.selectedModifier == 'undefined') {
      if (this.product.category != "Nước Ngọt") {
        let toast = this.toastCtrl.create({
          message: "Làm ơn chọn cách chế biến",
          duration: 3000,
          position: 'bottom'
        });
         toast.present();
         return;
      }     
      else{
        this.selectedModifier = {name:'Ướp Lạnh/ Đá'};
      }
    }
    Cart.getOrderLines().forEach(ol => {
      if (ol.name === this.product.name && ol.modifier === this.selectedModifier.name) {
        ol.quantity += 1;
        isAdd = false;
      }

    });
    if (isAdd) {
      Cart.addOrderLine({
        name: this.product.name,
        quantity: 1,
        modifier: this.selectedModifier.name,
        price: this.product.price
      });
      console.log(Cart.getOrderLines()[0].name);
    }

    let toast = this.toastCtrl.create({
      message: this.product.name + " " + this.selectedModifier.name + " đã được thêm vào giỏ hàng",
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
    this.viewCtrl.dismiss();
  }


}

