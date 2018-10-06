import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { DataServiceProvider } from '../../providers/data-service/data-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    //products: any[] = [];
    parks: any[] = [];
    selectedProduct: any;
    selectedPark: any;
    productFound:boolean = false;

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner,  public dataService: DataServiceProvider) {
  
     
      this.dataService.getObjects("parks")
  .subscribe((response)=> {
      this.parks = response
      //console.log(JSON.stringify(this.parks));
  });
  
  }
  
  
  scan() {
  this.selectedProduct = {};
  this.barcodeScanner.scan().then((barcodeData) => {
    this.selectedPark = this.parks.find(park => (park.objects.find(product => product.scanid === barcodeData.text) !== undefined));
    if (this.selectedPark) {
        this.productFound = true;
        this.selectedProduct = this.selectedPark.objects.find(product => product.scanid === barcodeData.text);
    }  
    else {
        this.productFound = false;
        console.log("Product not found");
    }  
  }, (err) => {
    console.log("Error: " + JSON.stringify(err));
  });
}
 


}
