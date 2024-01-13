import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  constructor(private navCtrl: NavController, private title: Title) { 
    title.setTitle("ثبت نام")

  }

  ngOnInit() {
  }


  exitToHome():void{
    this.navCtrl.navigateForward('/home')
  }
}
