import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoryPage } from '../category/category';
import { SMS } from '@ionic-native/sms';
import { CallNumber } from '@ionic-native/call-number';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  slide1Msg: string;
  slide2Msg: string;
  slide3Msg: string;
  constructor(public navCtrl: NavController,public sms: SMS, public callNumber: CallNumber) {
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
  call(){
    this.callNumber.callNumber('+841657115741',false);
  }
  send_sms(){
    this.sms.send('+841657115741',"Chào Bạn, mình muốn hỏi về quán");
  }

}
