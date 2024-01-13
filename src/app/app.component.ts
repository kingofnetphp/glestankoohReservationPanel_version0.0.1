import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/folder/Inbox', 
      icon: 'play-circle-outline'
    },
    {
      title: 'Parallax',
      url: '/parallax',
      icon: 'play-circle-outline'
    },
    {
      title: 'Expandable',
      url: '/expandable',
      icon: 'play-circle-outline'
    }
  ];
  stepper: any;

  constructor(private navCtrl: NavController, private location: LocationStrategy) {
    // history.pushState(null, null, window.location.href);
    // // check if back or forward button is pressed.
    // this.location.onPopState(() => {
    //     history.pushState(null, null, window.location.href);
    //     this.stepper.previous();
    // });
  }

  facilitiesCollection():void{
    // this.router.navigate(['/facilities']);
    this.navCtrl.navigateForward('/facilities');
    // this.router.navigateByUrl('/facilities');
    // alert('2222222222222')
      
    }
    
    login(){
      alert('login')
      }
      
      
}
