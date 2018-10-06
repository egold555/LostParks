import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataServiceProvider } from '../../providers/data-service/data-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

    highscores: any[] = [];
    
  constructor(public navCtrl: NavController, public dataService: DataServiceProvider) {
      
      this.dataService.getObjects("highscore")
  .subscribe((response)=> {
      this.highscores = response
      console.log(JSON.stringify(this.highscores));
  });
      
  }

}
