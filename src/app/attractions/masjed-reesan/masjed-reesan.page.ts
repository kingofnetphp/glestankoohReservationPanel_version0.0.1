import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-masjed-reesan',
  templateUrl: './masjed-reesan.page.html',
  styleUrls: ['./masjed-reesan.page.scss'],
})
export class MasjedReesanPage implements OnInit {

  slideOpts = {
    slidesPerView: 1.25,
    spaceBetween: 5,
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2000
    },
}


  constructor(private navCtrl: NavController, private title: Title) { 
    title.setTitle("مسجد رئیسان  ")
  
  }
  
  ngOnInit() {
  }

  exitToFacilities():void{
    this.navCtrl.navigateForward('/attractions')

  }
  goToGallery():void{
    this.navCtrl.navigateForward('/gallery')

  }

}
