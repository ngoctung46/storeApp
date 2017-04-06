import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.categories.push(
      {
        $id: "1",
        title: "Snails",
        products: [
          {
            title: "Fatty Snails",
            description: " Very good",
            price: 20000,
            imgUrl: 'oc-main.png',
            modifier: [
              'Garlic',
              'Grill',
              'Fry',
              'Boil'
            ]
          },
          {
            title: "Big Snails",
            description: " Very bad",
            price: 20000,
            imgUrl: 'oc-main.png',
            modifier: [
              'Garlic',
              'Grill',
              'Fry',
              'Boil'
            ]
          }
        ]
      },
      {
        $id: "2",
        title: "Shells",
         products: [
          {
            title: "Fatty Shells",
            description: " Very good",
            price: 20000,
            imgUrl: 'oc-main.png',
            modifier: [
              'Garlic',
              'Grill',
              'Fry',
              'Boil'
            ]
          },
          {
            title: "Big Shells",
            description: " Very bad",
            price: 20000,
            imgUrl: 'oc-main.png',
            modifier: [
              'Garlic',
              'Grill',
              'Fry',
              'Boil'
            ]
          }


        ]
      },
      {
        $id: "3",
        title: "Others",
         products: [
          {
            title: "Fatty Others",
            description: " Very good",
            price: 20000,
            imgUrl: 'oc-main.png',
            modifier: [
              'Garlic',
              'Grill',
              'Fry',
              'Boil'
            ]
          },
          {
            title: "Big Others",
            description: " Very bad",
            price: 20000,
            imgUrl: 'oc-main.png',
            modifier: [
              'Garlic',
              'Grill',
              'Fry',
              'Boil'
            ]
          }
        ]
      }

    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Category');
  }

}
