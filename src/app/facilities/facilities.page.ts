import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';
import { ViewChild, ElementRef, OnDestroy } from '@angular/core';



@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.page.html',
  styleUrls: ['./facilities.page.scss'],
})
export class FacilitiesPage implements  OnDestroy,OnInit {

  @ViewChild('myVideo') myVideo: ElementRef;

  ngOnDestroy() {
    // Stop autoplay when navigating to a new page
    this.myVideo.nativeElement.autoplay = false;
  }

  constructor(private title: Title, private navCtrl: NavController,) {
    title.setTitle("امکانات مجموعه")
   }

  ngOnInit() {
  }

  goToHome(){
        this.navCtrl.navigateForward('/home')
  }
  waters(): void{
    this.navCtrl.navigateForward('/waters')
  }
  hotels(): void{
    this.navCtrl.navigateForward('/hotels')
  }
  suites(): void{
    this.navCtrl.navigateForward('/suites')
  }
  burritoRestaurant(): void{
    this.navCtrl.navigateForward('/burrito-restaurant')
  }
  sportGrounds(): void{
    this.navCtrl.navigateForward('/sport-grounds')
  }
  traditionalRestaurant(): void{
    this.navCtrl.navigateForward('/traditional-restaurant')
  }
  deli(): void{
    this.navCtrl.navigateForward('/deli')

  }
  hall(): void{
    this.navCtrl.navigateForward('/hall')

  }
  pantry(): void{
    this.navCtrl.navigateForward('/pantry')

  }
  coffe(): void{
    this.navCtrl.navigateForward('/coffe')

  }
  bazaar(): void{
    this.navCtrl.navigateForward('/bazaar')

  }
  greenhouses(): void{
    this.navCtrl.navigateForward('/greenhouses')

  }
  gameCenter(): void{
    this.navCtrl.navigateForward('/gamecenter')

  }


}
