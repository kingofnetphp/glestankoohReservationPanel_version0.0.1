
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation, MatStepperModule } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import {  finalize } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { LoadingBackdropService } from './loading-backdrop.service';

import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatStepper, MatStep } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { TEXTCONSTANTS } from './lib-wizard-panel.constants';
import { LibWizardPanelService } from './lib-wizard-panel.service';
import { Bill, ChoicedCalender, Register } from './lib-wizard-panel-bill.model';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'lib-LibWizardPanel',
  templateUrl: './lib-wizard-panel.component.html',
  styleUrls: ['./lib-wizard-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LibWizardPanelComponent {
  @ViewChild('stepper') private myStepper?: MatStepper;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;
  textconst = TEXTCONSTANTS;
  title = 'GolestankoohSiteReservationWizardPanel';
  @Input() RentItemID: number = 0;
  @Input() Capacity: number = 0;
  @Input() personId: number = 0;
  @Input() TypeReserve2: number = 0;
  @Input() IncomeReasonID: number = 0;
  @Output() setDateToParent = new EventEmitter<any>();
  isRegistered: number = 0;
  goToRegisterLibrary: boolean = false;
  mobile: string = "";
  name: string = "";
  famil: string = "";
  allPrice: number = 0;
  personPrice: number = 0;
  exteraPerson: number = 0;
  kidPrices: number = 0;
  kidCount: number = 0;
  exteraPersonPrice: number = 0;
  countNight: number = 0;
  countPerson: number = 0;
  choicedCalender?: ChoicedCalender;
  bill: Bill = {
    countperson: 0,
    countNight: 0,
    allPrice: 0,
    personPrice: 0,
    exteraPerson: 0,
    kidPrices: 0,
    kidCount: 0,
    exteraPersonPrice: 0,
    choicedCalender: { startDate: '', endDate: '', miladiStartDate: '', miladiEndDate: '', days: [], },
    sumeriPersonPrice:{}
  };
  ReserveID: number = 0;
  DocNo: number = 0;
  ToalPrice: number = 0;
  sumeriPersonPrice: any = {};

  constructor(
    private loadingBackdropService: LoadingBackdropService,
    private libWizardPanelService: LibWizardPanelService,
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver,
    private snackBar: MatSnackBar
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }
  CheckRequired() {
    if (this.mobile == "") {
      this.snackBar.open(this.textconst.REGISTERMOBILEREQUIRED, 'باشه', { duration: 10000 });
      return false;
    }
    if (this.name == "") {
      this.snackBar.open(this.textconst.REGISTERFORMNAMEREQUIRED, 'باشه', { duration: 10000 });

      return false;
    }
    if (this.famil == "") {
      this.snackBar.open(this.textconst.REGISTERFORMFAMILREQUIRED, 'باشه', { duration: 10000 });

      return false;
    }
    return true;
  }

  goNextStep() {
    if (this.personId > 0) {
      this.loadingBackdropService.show();
      this.libWizardPanelService
        .getNameFamil({
          personId: this.personId,
        })
        .pipe(finalize(() => this.loadingBackdropService.hide()))
        .subscribe(
          (data) => {
            if (data.success) {
              this.name = data.data.name;
              this.famil = data.data.famil;
              this.mobile = data.data.mobile;
              this.myStepper?.next();
            }
            else {
              this.snackBar.open(this.textconst.NOTFINDNAMEFAMIL, 'باشه', { duration: 10000 });
              this.personId = 0;
            }

          },
          error => { },
        );

    } else {
      this.myStepper?.next();
    }

  }
  getDataFromRegisterToWizard(register: Register) {
    this.mobile = register.mobile;
    this.name = register.name;
    this.famil = register.famil;
    this.personId = register.personId;
    this.goToRegisterLibrary = true;
    this.myStepper?.next();
  }
  getDataFromReservToWizard(bill: Bill) {
    this.bill = bill;
    this.countNight = bill.countNight;
    this.countPerson = bill.countperson;
    this.allPrice = bill.allPrice;
    this.personPrice = bill.personPrice;
    this.exteraPerson = bill.exteraPerson;
    this.kidPrices = bill.kidPrices;
    this.kidCount = bill.kidCount;
    this.exteraPersonPrice = bill.exteraPersonPrice;
    this.choicedCalender = bill.choicedCalender;
    this.sumeriPersonPrice = bill.sumeriPersonPrice;
  }
  parseInt(num: any) {
    return parseInt(num);
  }
  mult(num1: any, num2: any) {
    return parseInt(num1) * parseInt(num2);
  }
  register() {
    this.loadingBackdropService.show();
    this.libWizardPanelService
      .submit({
        RentItemID: this.RentItemID,
        TypeReserve2: this.TypeReserve2,
        IncomeReasonID: this.IncomeReasonID,
        personId: this.personId,
        bill: this.bill
      })
      .pipe(finalize(() => this.loadingBackdropService.hide()))
      .subscribe(
        (data) => {
          if (data.success) {
            this.isRegistered = 1;
            this.DocNo = data.data.DocNo;
            this.ReserveID = data.data.ReserveID;
            this.ToalPrice = data.data.ToalPrice;
          }
          else {
            this.isRegistered = -1;
          }

        },
        error => { },
      );

  }
  complate() {
    this.setDateToParent.emit({ personId: this.personId, DocNo: this.DocNo, ReserveID: this.ReserveID, ToalPrice: this.ToalPrice });

  }

}
