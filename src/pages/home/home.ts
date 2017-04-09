import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoryPage } from '../category/category';

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
     Chào mừng đến với Ốc Hằng online. Bạn sẽ hài lòng với chất lượng và 
     cung cách phục vụ của chúng tôi. Với thực đơn đa dạng, giá cả hợp lý.
     Nhận giao hàng miễn phí trong quận Bình Tân. 
     Liên Hệ: 01657115741 ( Hằng )    
    `;
  }
  gotoMenu(){
    this.navCtrl.push(CategoryPage);
  }

}
