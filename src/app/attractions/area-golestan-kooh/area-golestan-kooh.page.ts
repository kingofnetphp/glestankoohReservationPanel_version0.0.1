import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-area-golestan-kooh',
  templateUrl: './area-golestan-kooh.page.html',
  styleUrls: ['./area-golestan-kooh.page.scss'],
})
export class AreaGolestanKoohPage implements OnInit {
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
    title.setTitle("منطقه حفاظت شده گلستان کوه   ")

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
