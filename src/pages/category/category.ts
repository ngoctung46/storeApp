import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController, PopoverController, ToastController } from 'ionic-angular';
import { Cart } from '../cart-page/cart';
import { CartPage } from '../cart-page/cart-page';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { LocalNotifications } from '@ionic-native/local-notifications';

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
  categories: any[] = [];
  selectedCategory: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtr: PopoverController,
    public af: AngularFire) {
    this.categories.push(
      {
        $id: "1",
        title: "Snails",
        products: [
          {
            $id: "1",
            title: "Fatty Snails",
            description: " Very good",
            price: 20000,
            imgUrl: 'oc-main.png',

          },
          {
            $id: "2",
            title: "Big Snails",
            description: " Very bad",
            price: 20000,
            imgUrl: 'oc-main.png'

          }
        ]
      },
      {
        $id: "2",
        title: "Shells",
        products: [
          {
            $id: "3",
            title: "Fatty Shells",
            description: " Very good",
            price: 20000,
            imgUrl: 'oc-main.png'


          },
          {
            $id: "4",
            title: "Big Shells",
            description: " Very bad",
            price: 20000,
            imgUrl: 'oc-main.png'
          }
        ]
      },
      {
        $id: "3",
        title: "Beverages",
        products: [
          {
            $id: "5",
            title: "Fatty Beverages",
            description: " Very good",
            price: 20000,
            imgUrl: 'oc-main.png'

          },
          {
            $id: "6",
            title: "Big Beverages",
            description: " Very bad",
            price: 20000,
            imgUrl: 'oc-main.png'

          }
        ]
      },
      {
        $id: "3",
        title: "Others",
        products: [
          {
            $id: "7",
            title: "Fatty Others",
            description: " Very good",
            price: 20000,
            imgUrl: 'oc-main.png'

          },
          {
            $id: "8",
            title: "Big Others",
            description: " Very bad",
            price: 20000,
            imgUrl: 'oc-main.png'

          }
        ]
      }

    );
    this.selectedCategory = this.categories[0].title;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Category');
  }

  presentProduct(event, product) {
    let productPopover = this.popoverCtr.create(PopoverPage, { product: product });
    productPopover.present();
  }

  goToCartPage(){
    this.navCtrl.push(CartPage);
  }


}
@Component({
  template: `
  <ion-card>
    <img src="assets/images/{{ product.imgUrl}}" />
    <ion-card-content>
        <ion-card-title text-center>
            {{ product.title }}
        </ion-card-title>
     
        <p align="center">
            {{ product.description }}
        </p>
        <ion-item>
            <ion-label>Modifier</ion-label>
            <ion-select [(ngModel)]= "selectedModifier">
              <ion-option *ngFor="let modifier of modifiers | async" [value]="modifier">{{ modifier.name }}</ion-option>
            </ion-select>
        </ion-item>
        <ion-item style="font-size: 14px;">        
           Price:
          <ion-badge item-right color="assertive">$ {{ product.price }}</ion-badge>
        </ion-item>
        <ion-item item-right>
        <button ion-button full color='secondary' (click)=addToCart()>Add To Cart</button>
        </ion-item>
    </ion-card-content>
  </ion-card>

`,
providers: [LocalNotifications]
})
export class PopoverPage {
  product: any;
  modifiers: FirebaseListObservable<any>;
   
  selectedModifier: any;
  constructor(
    public viewCtrl: ViewController, 
    public navParms: NavParams, 
    public toastCtrl: ToastController,
    public af: AngularFire,
    public localNotifications: LocalNotifications) {
    this.product = this.navParms.data.product;
    this.modifiers = af.database.list('/modifiers');
    this.modifiers.subscribe((x) => {
      this.localNotifications.schedule({
        id: 1,
        title: "New modifier has been placed",
        text: "New Order Has been placed"         
      });
      console.log('Notification has been scheduled');
    });
    this.selectedModifier = this.modifiers[0];
  }
  addToCart() {
     let isAdd = true;
     Cart.getOrderLines().forEach(ol => {
        if (ol.$id === this.product.$id && ol.modifier === this.selectedModifier.name) {
          ol.quantity += 1;      
          isAdd = false;
        }  
      });
    if(isAdd){
       Cart.addOrderLine({
        $id: this.product.$id,
        name: this.product.title,
        quantity: 1,
        modifier: this.selectedModifier.name,
        price: this.product.price
      });   
      console.log(Cart.getOrderLines()[0].name);  
    }   
  
    let toast = this.toastCtrl.create({
      message: this.product.title + " " + this.selectedModifier.name + " was added successfully",
      duration: 3000,
      position: 'bottom' 
    });
    toast.present();
    this.viewCtrl.dismiss();
  }
}

