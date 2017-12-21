import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoryServiceProvider } from '../../providers/category-service/category-service';
import {CategoryPage} from '../category/category'

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  private categories:Array<any>;
  
    constructor(public navCtrl: NavController, public navParams: NavParams,
                    public categoryService: CategoryServiceProvider) {
    }
  
    ionViewDidLoad() {
      this.categoryService.getAllCategory().subscribe(categories => {
      this.categories = categories;
    });
  
      console.log('ionViewDidLoad CategoryPage '+this.categories);
    }

    openItem(categoryName: string){
      this.navCtrl.push(CategoryPage, {
        category: categoryName
      });
    }

}
