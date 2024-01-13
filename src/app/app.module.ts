import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule  } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicRatingModule } from 'ionic4-rating';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LightboxModule } from 'ngx-lightbox';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: 
  [
    IonicRatingModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    LightboxModule,NoopAnimationsModule

  ],
  providers: [
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    { provide: LocationStrategy, useClass: HashLocationStrategy },
   ],
  bootstrap: [AppComponent],
})
export class AppModule {}
