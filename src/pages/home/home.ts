import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { ContactDetailsPage } from '../contact-details/contact-details'
import { Http } from '@angular/http'
import { requestServic } from '../shared/requestService';
import { AddProductPage } from '../add-product/add-product';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    requestServic,
    // LoadingController
  ]
})
export class HomePage {
  show = 1;
  products;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http,
    private events: Events,
    // public loadingCtrl :  LoadingController,
    private reqServic: requestServic
  ) {
    this.events.subscribe("RefreshProducts", () => this.init())
    // this.loadingCtrl.create({
    //   content : "Loading ..."
    // })
    // this.loadingCtrl.present(
    this.init();
  }
  init() {
    console.log("Refresh Or Get Data")
    this.reqServic.getProducts().then(data => {
      this.products = data;
      // for(let i = 0;i<)
    })
  }
  goToDetails(item) {
    console.log("Item : ", item)
    localStorage.setItem("name", item.name)
    this.navCtrl.push(ContactDetailsPage, { item: item })

  }
  goToAddProduct() {
    this.navCtrl.push(AddProductPage);
  }
  doRefresh(refresher) {
    this.reqServic.getProducts().then(data => {
      this.products = data;
      setTimeout(_ => {
        refresher.complete();
      }, 5000)

      // for(let i = 0;i<)
    })
  }

}
