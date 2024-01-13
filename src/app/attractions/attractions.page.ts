import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.page.html',
  styleUrls: ['./attractions.page.scss'],
})
export class AttractionsPage implements OnInit {

  constructor( private router: Router,
    public navCtrl: NavController, private activatedRoute: ActivatedRoute, private title: Title) {
        title.setTitle("جاذبه های خوانسار")
      }

  ngOnInit() {
  }
  goToHome(){
    this.navCtrl.navigateForward('/home')

  }
  masjedJame(): void{
    this.navCtrl.navigateForward('/Masjed-Jame')
  }
  masjedReesan(): void{
    this.navCtrl.navigateForward('/Masjed-Reeisan')
  }
  madreseBeygom(): void{
    this.navCtrl.navigateForward('/Madrese-Beygom')
  }
  boqeBabaPir(): void{
    this.navCtrl.navigateForward('/Baba-Pir')
  }
  khaneHabibi(): void{
    this.navCtrl.navigateForward('/Khane-Habibi')
  }
  khaneAbhari(): void{
    this.navCtrl.navigateForward('/Khane-Abhari')
  }
  kabutarKhane(): void{
    this.navCtrl.navigateForward('/Kabutar-Khane')

  }
  boqeBabaTork(): void{
    this.navCtrl.navigateForward('/Baba-Tork')

  }
  qarDastkond(): void{
    this.navCtrl.navigateForward('/Qar-Dast-Kond')

  }
  sangNegare(): void{
    this.navCtrl.navigateForward('/Sang-Negare')

  }
  qaberstan(): void{
    this.navCtrl.navigateForward('/Qabrestan')

  }
  imamZadeAliNaghi(): void{
    this.navCtrl.navigateForward('/ImamZade-AliNaghi')

  }
  imamZadeSezedSaleh(): void{
    this.navCtrl.navigateForward('/ImamZade-SeyedSaleh')

  }
  ParkMeli(): void{
    this.navCtrl.navigateForward('/Park-Meli')

  }
  ParkAsal(): void{
    this.navCtrl.navigateForward('/Park-Asal')

  }
  eriaGolestankooh(): void{
    this.navCtrl.navigateForward('/GolestanKooh')

  }
  sad(): void{
    this.navCtrl.navigateForward('/Sadd')

  }
  koohSeil(): void{
    this.navCtrl.navigateForward('/Kooh-Seil')

  }
  asiabAbi(): void{
    this.navCtrl.navigateForward('/Asiab-Abi')

  }
  koocheBagh(): void{
    this.navCtrl.navigateForward('/Kuche-Bagh')

  }
}
