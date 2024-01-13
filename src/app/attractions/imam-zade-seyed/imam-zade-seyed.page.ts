import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-imam-zade-seyed',
  templateUrl: './imam-zade-seyed.page.html',
  styleUrls: ['./imam-zade-seyed.page.scss'],
})
export class ImamZadeSeyedPage implements OnInit {

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
    title.setTitle("امام زاده سید صالح   ")
  
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
