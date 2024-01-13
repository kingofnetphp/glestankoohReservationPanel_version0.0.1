import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UsersApiService } from '../users-api.service';

@Component({
  selector: 'app-customer-club',
  templateUrl: './customer-club.page.html',
  styleUrls: ['./customer-club.page.scss'],
})
export class CustomerClubPage implements OnInit {

  constructor(private router: Router,
              public navCtrl: NavController,
              private activatedRoute: ActivatedRoute, 
              private title: Title,
              private service: UsersApiService) {
        title.setTitle("باشگاه مشتریان")
      }

    name: string = "";
    family: string = "";
    marriagedate: string = "";
    phonenumber: string = "";
    email: string = "";
    birthdate: string = "";
    birthcity: string = "";
    instagramid: string = "";

  ngOnInit() {
    this.name;
    this.family;
    this.marriagedate;
    this.phonenumber;
    this.email;
    this.birthdate;
    this.birthcity;
    this.instagramid;
  }

  exitToHome():void{
    this.navCtrl.navigateForward('/home');

  }

  addUsers() {
    var users = {
      name: this.name,
      family: this.family,
      marriagedate: this.marriagedate,
      phonenumber: this.phonenumber,
      email: this.email,
      birthdate: this.birthdate,
      birthcity: this.birthcity,
      instagramid: this.instagramid
    }

    if(users.name == "" || users.family == "" || users.phonenumber == "") {
      alert("لطفا مشخصات خود را تکمیل کنید");

    } else {
      this.service.addUsers(users).subscribe({
        next:(res)=>{
          if(res != null) {
            alert("ثبت نام انجام شد");
            this.name = "";
            this.family = "";
            this.marriagedate = "";
            this.phonenumber = "";
            this.email = "";
            this.birthdate = "";
            this.birthcity = "";
            this.instagramid = "";

          } else {
            alert("خطا در عملیات ثبت نام");

          }
        }
      });
    }
  }
}