import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { CategoryPage, PopoverPage } from '../pages/category/category';
import { CartPage } from '../pages/cart-page/cart-page';
import { CheckoutPage } from '../pages/checkout-page/checkout-page';
import { CompletePage } from '../pages/complete-page/complete-page';
import { ContactPage } from '../pages/contact-page/contact-page';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    CategoryPage,
    PopoverPage,
    CartPage,
    CheckoutPage,
    CompletePage,
    ContactPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    CategoryPage,
    PopoverPage,
    CartPage,
    CheckoutPage,
    CompletePage,
    ContactPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
