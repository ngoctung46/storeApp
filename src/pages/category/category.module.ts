import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryPage } from './category';
import { PopoverPage } from './category';
@NgModule({
  declarations: [
    CategoryPage,
    PopoverPage
  ],
  imports: [
    IonicPageModule.forChild(CategoryPage),
    IonicPageModule.forChild(PopoverPage)
  ],
  exports: [
    CategoryPage,
    PopoverPage
  ]
})
export class CategoryModule {}
