import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { Events } from 'ionic-angular';
@Injectable()
export class requestServic {
  private baseUrl = 'http://localhost:2000'
  constructor(private http: Http, private events: Events) {

  }
  getProducts() {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/products`).subscribe(data => {
        console.log(data);
        resolve(data.json().Information)

      })
    })

  }
  addProduct(title, company) {
    return new Promise(resolve => {
      this.http.post(`${this.baseUrl}/product`, { title: title, company: company }).subscribe(data => {
        console.log(data);
        this.events.publish("RefreshProducts");
        resolve(data.json())
      })
    })

  }

}
