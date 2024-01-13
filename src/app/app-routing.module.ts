import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'facilities',
    loadChildren: () => import('./facilities/facilities.module').then( m => m.FacilitiesPageModule)
  },{
    path: 'reserv',
    loadChildren: () => import('./reserv/reserv.module').then( m => m.ReservModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'waters',
    loadChildren: () => import('./waters/waters.module').then( m => m.WatersPageModule)
  },
  {
    path: 'hotels',
    loadChildren: () => import('./hotels/hotels.module').then( m => m.HotelsPageModule)
  },
  {
    path: 'suites',
    loadChildren: () => import('./suites/suites.module').then( m => m.SuitesPageModule)
  },
  {
    path: 'burrito-restaurant',
    loadChildren: () => import('./burrito-restaurant/burrito-restaurant.module').then( m => m.BurritoRestaurantPageModule)
  },
  {
    path: 'sport-grounds',
    loadChildren: () => import('./sport-grounds/sport-grounds.module').then( m => m.SportGroundsPageModule)
  },
  {
    path: 'traditional-restaurant',
    loadChildren: () => import('./traditional-restaurant/traditional-restaurant.module').then( m => m.TraditionalRestaurantPageModule)
  },
  {
    path: 'deli',
    loadChildren: () => import('./deli/deli.module').then( m => m.DeliPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'hall',
    loadChildren: () => import('./hall/hall.module').then( m => m.HallPageModule)
  },
  {
    path: 'bazaar',
    loadChildren: () => import('./bazaar/bazaar.module').then( m => m.BazaarPageModule)
  },
  {
    path: 'pantry',
    loadChildren: () => import('./pantry/pantry.module').then( m => m.PantryPageModule)
  },
  {
    path: 'coffe',
    loadChildren: () => import('./coffe/coffe.module').then( m => m.CoffePageModule)
  },
  {
    path: 'greenhouses',
    loadChildren: () => import('./greenhouses/greenhouses.module').then( m => m.GreenhousesPageModule)
  },
  
 
  {
    path: 'customer-club',
    loadChildren: () => import('./customer-club/customer-club.module').then( m => m.CustomerClubPageModule)
  },
  {
    path: 'attractions',
    loadChildren: () => import('./attractions/attractions.module').then( m => m.AttractionsPageModule)
  },
  {
    path: 'comment',
    loadChildren: () => import('./comment/comment.module').then( m => m.CommentPageModule)
  },
  



  {
    path: 'GolestanKooh',
    loadChildren: () => import('./attractions/area-golestan-kooh/area-golestan-kooh.module').then( m => m.AreaGolestanKoohPageModule)
  },
  {
    path: 'Asiab-Abi',
    loadChildren: () => import('./attractions/asiab-abi/asiab-abi.module').then( m => m.AsiabAbiPageModule)
  },
  {
    path: 'Baba-Tork',
    loadChildren: () => import('./attractions/boqe-baba-tork/boqe-baba-tork.module').then( m => m.BoqeBabaTorkPageModule)
  },
  {
    path: 'Baba-Pir',
    loadChildren: () => import('./attractions/bpqe-baba-pir/bpqe-baba-pir.module').then( m => m.BpqeBabaPirPageModule)
  },
  {
    path: 'ImamZade-AliNaghi',
    loadChildren: () => import('./attractions/imam-zade-ali-naghi/imam-zade-ali-naghi.module').then( m => m.ImamZadeAliNaghiPageModule)
  },
  {
    path: 'ImamZade-SeyedSaleh',
    loadChildren: () => import('./attractions/imam-zade-seyed/imam-zade-seyed.module').then( m => m.ImamZadeSeyedPageModule)
  },
  {
    path: 'Kabutar-Khane',
    loadChildren: () => import('./attractions/kabutar-khane/kabutar-khane.module').then( m => m.KabutarKhanePageModule)
  },
  {
    path: 'Khane-Abhari',
    loadChildren: () => import('./attractions/khane-abhari/khane-abhari.module').then( m => m.KhaneAbhariPageModule)
  },
  {
    path: 'Khane-Habibi',
    loadChildren: () => import('./attractions/khane-habibi/khane-habibi.module').then( m => m.KhaneHabibiPageModule)
  },
  {
    path: 'Kuche-Bagh',
    loadChildren: () => import('./attractions/kooche-bagh/kooche-bagh.module').then( m => m.KoocheBaghPageModule)
  },
  {
    path: 'Kooh-Seil',
    loadChildren: () => import('./attractions/kooh-seil/kooh-seil.module').then( m => m.KoohSeilPageModule)
  },
  {
    path: 'Madrese-Beygom',
    loadChildren: () => import('./attractions/madrese-beygom/madrese-beygom.module').then( m => m.MadreseBeygomPageModule)
  },
  {
    path: 'Masjed-Jame',
    loadChildren: () => import('./attractions/masjed-jame/masjed-jame.module').then( m => m.MasjedJamePageModule)
  },
  {
    path: 'Masjed-Reeisan',
    loadChildren: () => import('./attractions/masjed-reesan/masjed-reesan.module').then( m => m.MasjedReesanPageModule)
  },
  {
    path: 'Park-Asal',
    loadChildren: () => import('./attractions/park-asl/park-asl.module').then( m => m.ParkAslPageModule)
  },
  {
    path: 'Park-Meli',
    loadChildren: () => import('./attractions/park-meli/park-meli.module').then( m => m.ParkMeliPageModule)
  },
  {
    path: 'Qabrestan',
    loadChildren: () => import('./attractions/qabrestan/qabrestan.module').then( m => m.QabrestanPageModule)
  },
  {
    path: 'Qar-Dast-Kond',
    loadChildren: () => import('./attractions/qar-dast-kond/qar-dast-kond.module').then( m => m.QarDastKondPageModule)
  },
  {
    path: 'Sadd',
    loadChildren: () => import('./attractions/sadd/sadd.module').then( m => m.SaddPageModule)
  },
  {
    path: 'Sang-Negare',
    loadChildren: () => import('./attractions/sang-negare/sang-negare.module').then( m => m.SangNegarePageModule)
  },
  {
    path: 'introduction',
    loadChildren: () => import('./introduction/introduction.module').then( m => m.IntroductionPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'histories',
    loadChildren: () => import('./histories/histories.module').then( m => m.HistoriesPageModule)
  },
  {
    path: 'fereydonn',
    loadChildren: () => import('./histories/fereydonn/fereydonn.module').then( m => m.FereydonnPageModule)
  },
  {
    path: 'fereydonshahrr',
    loadChildren: () => import('./histories/fereydonshahrr/fereydonshahrr.module').then( m => m.FereydonshahrrPageModule)
  },
  {
    path: 'golpayegann',
    loadChildren: () => import('./histories/golpayegann/golpayegann.module').then( m => m.GolpayegannPageModule)
  },
  {
    path: 'mainfooter',
    loadChildren: () => import('./mainfooter/mainfooter.module').then( m => m.MainfooterCModule)
  },
  {
    path: 'projectsfuture',
    loadChildren: () => import('./projectsfuture/projectsfuture.module').then( m => m.ProjectsfutureComponentModule)
  },
  {
    path: 'gamecenter',
    loadChildren: () => import('./gamecenter/gamecenter.module').then( m => m.GamecenterPageModule)
  },
  {
    path: 'burrito-gallery',
    loadChildren: () => import('./burrito-restaurant/burrito-gallery/burrito-gallery.module').then( m => m.BurritoGalleryPageModule)
  },
  {
    path: 'deli-gallery',
    loadChildren: () => import('./deli/deli-gallery/deli-gallery.module').then( m => m.DeliGalleryPageModule)
  },
  {
    path: 'gamecenter-gallery',
    loadChildren: () => import('./gamecenter/gamecenter-gallery/gamecenter-gallery.module').then( m => m.GamecenterGalleryPageModule)
  },
  {
    path: 'greenhouse-gallery',
    loadChildren: () => import('./greenhouses/greenhouse-gallery/greenhouse-gallery.module').then( m => m.GreenhouseGalleryPageModule)
  },
  {
    path: 'hall-gallery',
    loadChildren: () => import('./hall/hall-gallery/hall-gallery.module').then( m => m.HallGalleryPageModule)
  },
  {
    path: 'hotels-gallery',
    loadChildren: () => import('./hotels/hotels-gallery/hotels-gallery.module').then( m => m.HotelsGalleryPageModule)
  },
  {
    path: 'pantry-gallery',
    loadChildren: () => import('./pantry/pantry-gallery/pantry-gallery.module').then( m => m.PantryGalleryPageModule)
  },
  {
    path: 'suits-gallery',
    loadChildren: () => import('./suites/suits-gallery/suits-gallery.module').then( m => m.SuitsGalleryPageModule)
  },
  {
    path: 'traditional-gallery',
    loadChildren: () => import('./traditional-restaurant/traditional-gallery/traditional-gallery.module').then( m => m.TraditionalGalleryPageModule)
  },
  {
    path: 'water-gallery',
    loadChildren: () => import('./waters/water-gallery/water-gallery.module').then( m => m.WaterGalleryPageModule)
  },
  {
    path: 'sport-gallery',
    loadChildren: () => import('./sport-grounds/sport-gallery/sport-gallery.module').then( m => m.SportGalleryPageModule)
  },









];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
