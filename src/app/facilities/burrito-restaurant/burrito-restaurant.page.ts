import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-burrito-restaurant',
  templateUrl: './burrito-restaurant.page.html',
  styleUrls: ['./burrito-restaurant.page.scss'],
})
export class BurritoRestaurantPage implements OnInit {

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

  constructor(private navCtrl: NavController, private title: Title) {
    title.setTitle("رستوران بوریتو ")

   }

  ngOnInit() {
  }
  exitToFacilities():void{
    this.navCtrl.navigateForward('/facilities')

  }
  goToGallery():void{
    this.navCtrl.navigateForward('/gallery')

  }
  goToCommentPage(){
    this.navCtrl.navigateForward('/comment')

  }

}
