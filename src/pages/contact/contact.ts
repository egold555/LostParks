import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidLoad() {
    var list = document.querySelectorAll(".item a");

    for (var i = 0; i < list.length; i++) {
      var url = list[i].children[0].getAttribute("src");
      (<any>list[i]).style.backgroundImage="url('" + url + "')";
    }
  }

}
