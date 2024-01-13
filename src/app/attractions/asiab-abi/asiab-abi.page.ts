import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-asiab-abi',
  templateUrl: './asiab-abi.page.html',
  styleUrls: ['./asiab-abi.page.scss'],
})
export class AsiabAbiPage implements OnInit {

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
  title.setTitle("آسیاب آبی سرچشمه    ")

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
