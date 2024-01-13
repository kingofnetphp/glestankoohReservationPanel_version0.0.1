import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { ViewChild, ElementRef, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnDestroy {
  @ViewChild('myVideo') myVideo: ElementRef;

  ngOnDestroy() {
    this.myVideo.nativeElement.autoplay = false;
  }

  constructor(private menu: MenuController, private router: Router,
    public navCtrl: NavController, private activatedRoute: ActivatedRoute, private title: Title) {
      title.setTitle("خانه")
    }

openFirst(): void {
  this.menu.enable(true, 'first');
  this.menu.open('first');
}

openEnd() {
  this.menu.open('end');
}

openCustom() {
  this.menu.enable(true, 'custom');
  this.menu.open('custom');
}
facilitiesCollection():void{
// this.router.navigate(['/facilities']);
this.navCtrl.navigateForward('/facilities');
// this.router.navigateByUrl('/facilities');
// alert('2222222222222')
  
}

customerClub():void{
  this.navCtrl.navigateForward('/customer-club');

}
attractions(){
  this.navCtrl.navigateForward('/attractions');
 
}
introdution(){
  this.navCtrl.navigateForward('/introduction');

}
projectsfuture(): void{
  this.navCtrl.navigateForward('/projectsfuture')

}
contact(){
  this.navCtrl.navigateForward('/contact-us')

}






login(){
alert('login')
}


}
