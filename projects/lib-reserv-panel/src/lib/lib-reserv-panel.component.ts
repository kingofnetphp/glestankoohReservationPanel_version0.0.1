import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ChoicedCalender } from './component-range-date-picker/cell-calender-reservation.model';


@Component({
  selector: 'lib-LibReservPanel',
  templateUrl: './lib-reserv-panel.component.html',
  styleUrls: ['./lib-reserv-panel.component.scss']
})
export class LibReservPanelComponent {
  math = Math;

  @Input() RentItemID: number = 0;
  @Input() Capacity: number = 0;
  @Output() From_LibReservation_To_LibWizard = new EventEmitter<any>();
  maxcount: number = 0;
  mincount: number = 0;
  countperson: number = 0;
  strcount: string = "";
  strKidCount: string = "";
  toggleadd: boolean = true;
  togglesubtract: boolean = false;
  toggleaddkid: boolean = true;
  togglesubtractkid: boolean = false;
  title = 'appreserve';
  showDateToggle: boolean = false;
  startDateReservation: string = "";
  endDateReservation: string = "";
  miladiStartDateReservation: string = "";
  miladiEndDateReservation: string = "";
  allPrice: number = 0;
  countNight: number = 0;
  choicedCalender: ChoicedCalender = { startDate: '', endDate: '', miladiStartDate: '', miladiEndDate: '', days: [] };
  personPrice: number = 0;
  exteraPerson: number = 0;
  kidCount: number = 0;
  exteraPersonPrice: number = 0;
  kidPrices: number = 0;
  sumeriPersonPrice:any=[];

  public setShowDateToggle() {
    this.showDateToggle = !this.showDateToggle;
  }
  clearSelectedDate() {
    this.startDateReservation = "";
    this.endDateReservation = "";
    this.miladiStartDateReservation = "";
    this.miladiEndDateReservation = "";
    this.personPrice = 0;
    this.kidPrices = 0;
    this.exteraPerson = 0;
    this.kidCount = 0;
    this.exteraPersonPrice = 0;
    this.allPrice = 0;
    this.countNight = 0;
    this.choicedCalender = { startDate: '', endDate: '', miladiStartDate: '', miladiEndDate: '', days: [] };
  }
  parseInt(num:any){
    return parseInt(num);
  }
  mult(num1:any,num2:any){
    return parseInt(num1)* parseInt(num2);
  }
  calc() {
    this.personPrice = 0;
    this.exteraPerson = 0;
    this.kidPrices = 0;
    this.exteraPersonPrice = 0;
    this.allPrice = 0;
    this.sumeriPersonPrice={};
    this.choicedCalender.days.forEach((day, index) => {
      if (index < this.countNight) {
        if (this.countperson > 0) {
          this.personPrice += (day.Price);
          if(!(this.sumeriPersonPrice[day.Price]>0))
          {
            this.sumeriPersonPrice[day.Price]=0;
          }
          this.sumeriPersonPrice[day.Price]=this.sumeriPersonPrice[day.Price]+1;
          if (day.PersonCapacity >= this.countperson) {
            this.exteraPerson = 0;
          }
          else {
            this.exteraPerson = this.countperson - day.PersonCapacity;
            this.exteraPersonPrice = this.exteraPersonPrice + (this.exteraPerson * day.ExtraItemPrice);
          }
        }
        if (this.kidCount > 0) {
          this.kidPrices = this.kidPrices + (this.kidCount * day.KidPrice)
        }
      }
    });
    this.allPrice = this.personPrice + this.exteraPersonPrice + this.kidPrices;
    this.From_LibReservation_To_LibWizard.emit({
      countperson: this.countperson,
      countNight: this.countNight,
      allPrice: this.allPrice,
      personPrice: this.personPrice,
      exteraPerson: this.exteraPerson,
      kidPrices: this.kidPrices,
      kidCount: this.kidCount,
      exteraPersonPrice: this.exteraPersonPrice,
      choicedCalender: this.choicedCalender,
      sumeriPersonPrice:this.sumeriPersonPrice
    });

  }
  GetOutputValDate(choicedCalender: ChoicedCalender) {
    this.choicedCalender = choicedCalender;
    this.startDateReservation = choicedCalender.startDate;
    this.endDateReservation = choicedCalender.endDate;
    this.miladiStartDateReservation = choicedCalender.miladiStartDate;
    this.miladiEndDateReservation = choicedCalender.miladiEndDate;
    this.countNight = choicedCalender.days.length-1;
    this.showDateToggle = false;
    this.calc();
  }
  public AddKid(event: any) {
    this.maxcount = this.Capacity;
    this.kidCount++;
    if (this.kidCount >= 10) {

      this.toggleaddkid = false;
    }
    else {
      this.togglesubtractkid = false;
    }

    this.getStrKidCount();
    this.calc();
  }
  public SubtractKid(event: any) {
    if (this.kidCount > 0) {
      this.kidCount--;
    }
    if (this.kidCount <= 0) {

      this.togglesubtractkid = true;
    }
    else {
      this.toggleaddkid = true;
    }


    this.getStrKidCount();
    this.calc();
  }
  public addperson(event: any) {
    this.maxcount = this.Capacity;
    if (this.countperson < this.maxcount) {
      this.countperson++;
    }
    if (this.countperson >= this.maxcount) {

      this.toggleadd = false;
    }
    else {
      this.togglesubtract = false;
    }

    this.strcount = this.countperson + " نفر ";
    this.calc();
  }
  public subtractperson(event: any) {
    if (this.countperson > 0) {
      this.countperson--;
    }
    if (this.countperson <= this.mincount) {

      this.togglesubtract = true;
    }
    else {
      this.toggleadd = true;
    }

    this.getStrCount();
    this.calc();
  }
  getStrKidCount() {
    this.strKidCount = this.kidCount + " نفر خردسال";
  }
  getStrCount() {
    this.strcount = this.countperson + " نفر ";
  }

}
