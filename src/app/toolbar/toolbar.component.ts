import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}
  facilitiesCollection():void{
    this.navCtrl.navigateForward('/facilities');
      
    }

    // close(){
    //   window.top.close();
    //   window.self.close(); 
    // }


    attractions():void{
      this.navCtrl.navigateForward('/attractions');

    }
    

    home():void{
      this.navCtrl.navigateForward('/home')
    }
    login(){
      this.navCtrl.navigateForward('/login')
      }

      introduction(){
        this.navCtrl.navigateForward('/introduction')

      }
      contact(){
        this.navCtrl.navigateForward('/contact-us')

      }
      customerClub():void{
        this.navCtrl.navigateForward('/customer-club');
      
      }
  

}
