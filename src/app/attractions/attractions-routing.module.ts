import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttractionsPage } from './attractions.page';

const routes: Routes = [
  {
    path: '',
    component: AttractionsPage
  },

  {
    path: 'masjed-jame',
    loadChildren: () => import('./masjed-jame/masjed-jame.module').then( m => m.MasjedJamePageModule)
  },
  {
    path: 'masjed-reesan',
    loadChildren: () => import('./masjed-reesan/masjed-reesan.module').then( m => m.MasjedReesanPageModule)
  },
  {
    path: 'madrese-beygom',
    loadChildren: () => import('./madrese-beygom/madrese-beygom.module').then( m => m.MadreseBeygomPageModule)
  },
  {
    path: 'bpqe-baba-pir',
    loadChildren: () => import('./bpqe-baba-pir/bpqe-baba-pir.module').then( m => m.BpqeBabaPirPageModule)
  },
  {
    path: 'khane-habibi',
    loadChildren: () => import('./khane-habibi/khane-habibi.module').then( m => m.KhaneHabibiPageModule)
  },
  {
    path: 'khane-abhari',
    loadChildren: () => import('./khane-abhari/khane-abhari.module').then( m => m.KhaneAbhariPageModule)
  },
  {
    path: 'kabutar-khane',
    loadChildren: () => import('./kabutar-khane/kabutar-khane.module').then( m => m.KabutarKhanePageModule)
  },
  {
    path: 'boqe-baba-tork',
    loadChildren: () => import('./boqe-baba-tork/boqe-baba-tork.module').then( m => m.BoqeBabaTorkPageModule)
  },
  {
    path: 'qar-dast-kond',
    loadChildren: () => import('./qar-dast-kond/qar-dast-kond.module').then( m => m.QarDastKondPageModule)
  },
  {
    path: 'sang-negare',
    loadChildren: () => import('./sang-negare/sang-negare.module').then( m => m.SangNegarePageModule)
  },
  {
    path: 'qabrestan',
    loadChildren: () => import('./qabrestan/qabrestan.module').then( m => m.QabrestanPageModule)
  },
  {
    path: 'imam-zade-ali-naghi',
    loadChildren: () => import('./imam-zade-ali-naghi/imam-zade-ali-naghi.module').then( m => m.ImamZadeAliNaghiPageModule)
  },
  {
    path: 'imam-zade-seyed',
    loadChildren: () => import('./imam-zade-seyed/imam-zade-seyed.module').then( m => m.ImamZadeSeyedPageModule)
  },
  {
    path: 'park-meli',
    loadChildren: () => import('./park-meli/park-meli.module').then( m => m.ParkMeliPageModule)
  },
  {
    path: 'park-asl',
    loadChildren: () => import('./park-asl/park-asl.module').then( m => m.ParkAslPageModule)
  },
  {
    path: 'area-golestan-kooh',
    loadChildren: () => import('./area-golestan-kooh/area-golestan-kooh.module').then( m => m.AreaGolestanKoohPageModule)
  },
  {
    path: 'sadd',
    loadChildren: () => import('./sadd/sadd.module').then( m => m.SaddPageModule)
  },
  {
    path: 'kooh-seil',
    loadChildren: () => import('./kooh-seil/kooh-seil.module').then( m => m.KoohSeilPageModule)
  },
  {
    path: 'asiab-abi',
    loadChildren: () => import('./asiab-abi/asiab-abi.module').then( m => m.AsiabAbiPageModule)
  },
  {
    path: 'kooche-bagh',
    loadChildren: () => import('./kooche-bagh/kooche-bagh.module').then( m => m.KoocheBaghPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttractionsPageRoutingModule {}
