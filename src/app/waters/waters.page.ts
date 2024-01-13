import { Component, OnInit, ViewChild } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { Title } from '@angular/platform-browser';
import { IonModal, LoadingController, NavController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';


@Component({
  selector: 'app-waters',
  templateUrl: './waters.page.html',
  styleUrls: ['./waters.page.scss'],
})
export class WatersPage implements OnInit {
  images = [
    {
      src: 'https://golestankooh.com/apppictures/abi/DJI_0103.JPG',
      caption: 'Image 1',
      thumb: 'https://golestankooh.com/apppictures/abi/DJI_0103.JPG' // یک تصویر کوچک برای نمایش در گالری
    },
  ];

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

  open(index: number): void {
    this.lightbox.open(this.images, index);
  }

@ViewChild(IonModal) modal: IonModal;

message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
name: string;

cancel() {
  this.modal.dismiss(null, 'cancel');
}

confirm() {
  this.modal.dismiss(this.name, 'confirm');
}

onWillDismiss(event: Event) {
  const ev = event as CustomEvent<OverlayEventDetail<string>>;
  if (ev.detail.role === 'confirm') {
    this.message = `Hello, ${ev.detail.data}!`;
  }
}

constructor(private navCtrl: NavController, private title: Title, private loadingCtrl: LoadingController, private lightbox: Lightbox) {

  title.setTitle("مجموعه آبی ")

 }
  ngOnInit() {
  }
  exitToFacilities():void{
    this.navCtrl.navigateForward('/facilities')

  }
  gallery():void{
    this.navCtrl.navigateForward('/water-gallery')

  }
  
  


  // async showLoading() {
  //   const loading = await this.loadingCtrl.create({
  //     message: 'این بخش در حال بروزرسانی می باشد             از شکیبایی شما سپاسگزاریم       ',
  //     duration: 3000,
  //     spinner: 'circles',
  //   });

  //   loading.present();
  // }


}
