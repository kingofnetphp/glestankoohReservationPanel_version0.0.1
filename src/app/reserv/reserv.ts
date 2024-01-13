import { Component,ViewEncapsulation , OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reserv',
  templateUrl: './reserv.html',
  encapsulation: ViewEncapsulation.ShadowDom,
  styleUrls: ['./reserv.scss'],
})
export class Reserv {
  personId: number = 0;
  RentItemID: number=1;
  Capacity: number=5;
  typeReserve2 :number=0;
  incomeReasonID :number=12;
  ReserveID:number=0;
  DocNo:number=0;
  ToalPrice:number=0;

  GetOutputValDate(item:{pid:number,resId:number,docNo:number,totalPrice:number}) {
    this.personId = item.pid;
    this.ReserveID=item.resId;
    this.DocNo=item.docNo;
    this.ToalPrice=item.totalPrice;
  }
  


}
