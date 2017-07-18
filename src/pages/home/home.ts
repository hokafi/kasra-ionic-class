import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContactDetailsPage } from '../contact-details/contact-details'
import {Http} from '@angular/http'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  show = 1;
  contacts = [
    {
      name: "Hossein",
      phoneNumber: "09999999"
    },
    {
      name: "Mahdi",
      phoneNumber: "0888888"
    },
    {
      name: "Mostafa",
      phoneNumber: "0777777"
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams,public http : Http ) {
    this.http.get("http://192.168.0.220:8020/mobilemiddleware/api/servicecaller").subscribe(data =>{
      
      console.log("Data : ",data)
    },error =>{
      console.log("Error : ",error)
    })  
  }
  goToDetails(item) {
    console.log("Item : ", item)
    localStorage.setItem("name", item.name)
    this.navCtrl.push(ContactDetailsPage, { item: item })

  }
}
