import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { requestServic } from '../shared/requestService';
/**
 * Generated class for the AddProductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-product',
  templateUrl: 'add-product.html',
  providers: [
    requestServic
  ]
})
export class AddProductPage {
  product = { title: "", company: "" };
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private reqservice: requestServic,
    private events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProductPage');
  }
  addProduct() {

    console.log(this.product)
    this.reqservice.addProduct(this.product.title, this.product.company).then(data => {
      console.log("??")
      this.navCtrl.pop()
    })

  }
}
