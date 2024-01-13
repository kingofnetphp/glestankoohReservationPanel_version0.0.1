import { Component, OnInit, ViewChild  } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';



@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  // @ViewChild('popover') popover;

  // isOpen = false;

  // presentPopover(e: Event) {
  //   this.popover.event = e;
  //   this.isOpen = true;
  // }
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

  constructor(private geolocation: Geolocation) {
    
   }

  //  woBinIch(){
  //   this.geolocation.getCurrentPosition().then((resp) => {
  //     // resp.coords.latitude
  //     // resp.coords.longitude
  //    }).catch((error) => {
  //      console.log('Error getting location', error);
  //    });   
    
  //    let watch = this.geolocation.watchPosition();
  //    watch.subscribe((data) => {
  //     // data can be a set of coordinates, or an error (if an error occurred).
  //     // data.coords.latitude
  //     // data.coords.longitude
  //    });}

  ngOnInit() {
  }

}
