import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IonModal, NavController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';


@Component({
  selector: 'app-hall',
  templateUrl: './hall.page.html',
  styleUrls: ['./hall.page.scss'],
})
export class HallPage implements OnInit {

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
  title.setTitle("تالار")

 }

  ngOnInit() {
  }

  exitToFacilities():void{
    this.navCtrl.navigateForward('/facilities')

  }
  goToGallery():void{
    this.navCtrl.navigateForward('/gallery')

  }


}
