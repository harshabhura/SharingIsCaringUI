import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoryServiceProvider } from '../../providers/category-service/category-service';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  private category:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
                  public categoryService: CategoryServiceProvider) {
  }

  ionViewDidLoad() {
    this.category = this.navParams.get('category')  
  console.log('ionViewDidLoad CategoryPage '+ this.category);
  }

}
