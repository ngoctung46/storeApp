import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { CategoryModule } from '../pages/category/category.module';
import { CartPageModule } from '../pages/cart-page/cart-page.module';
import { CheckoutPageModule } from '../pages/checkout-page/checkout-page.module';
import { CompletePageModule } from '../pages/complete-page/complete-page.module';
import { ContactPageModule } from '../pages/contact-page/contact-page.module';
import { AngularFireModule } from 'angularfire2';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export const config = {
  apiKey: "AIzaSyBhyx9qtOO7VYKaUbGUW32L9pwamQqL6Aw",
  authDomain: "fire-base-demo-13f1d.firebaseapp.com",
  databaseURL: "https://fire-base-demo-13f1d.firebaseio.com",
  projectId: "fire-base-demo-13f1d",
  storageBucket: "fire-base-demo-13f1d.appspot.com",
  messagingSenderId: "292281296546"
}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage
      
   
  ],
  imports: [
    BrowserModule,
    CartPageModule,
    CheckoutPageModule,
    CompletePageModule,
    ContactPageModule,
    CategoryModule,
    AngularFireModule.initializeApp(config),
    IonicModule.forRoot(MyApp)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
