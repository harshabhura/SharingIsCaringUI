import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {CategoriesPage} from '../categories/categories'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CategoriesPage;
  tab3Root = AboutPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
