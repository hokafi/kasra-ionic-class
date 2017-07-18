import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-contact-details',
  templateUrl: 'contact-details.html',
})
export class ContactDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var item = this.navParams.get("item");
    console.log("Contact Detail item : ",item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactDetailsPage');
  }

}
