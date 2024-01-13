import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common/http';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { map, finalize } from 'rxjs/operators';
import * as i3 from '@angular/material/snack-bar';
import * as i4 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i5 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i6 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i7 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i8 from '@angular/common';
import { CommonModule } from '@angular/common';

class LibRegisterPanelService {
    constructor(handler, http) {
        this.handler = handler;
        this.http = http;
    }
    SaveNameFamilService(name, famil, mobile) {
        let params = new HttpParams();
        params = params.append('name', name);
        params = params.append('famil', famil);
        params = params.append('mobile', mobile);
        params = params.append('func', 'SaveNameFamil');
        let httpOptions = {
            headers: new HttpHeaders(),
            params: params
        };
        httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        httpOptions.headers.append('Access-Control-Allow-Origin', '*');
        httpOptions.headers.append('Content-Type', 'application/json');
        return this.http.get('/golestanService', httpOptions)
            .pipe(map((data) => {
            return data;
        }));
    }
    checkCodeWithBackend(code, hashdata, mobile) {
        let params = new HttpParams();
        params = params.append('code', code);
        params = params.append('hashdata', hashdata);
        params = params.append('registeredMobile', mobile);
        params = params.append('func', 'checkcode');
        let httpOptions = {
            headers: new HttpHeaders(),
            params: params
        };
        httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        httpOptions.headers.append('Access-Control-Allow-Origin', '*');
        httpOptions.headers.append('Content-Type', 'application/json');
        return this.http.get('/golestanService', httpOptions)
            .pipe(map((data) => {
            return data;
        }));
    }
    sendSmsWithbackend(mobile) {
        let params = new HttpParams();
        params = params.append('mobile', mobile);
        params = params.append('func', 'sendSms');
        let httpOptions = {
            headers: new HttpHeaders(),
            params: params
        };
        httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        httpOptions.headers.append('Access-Control-Allow-Origin', '*');
        httpOptions.headers.append('Content-Type', 'application/json');
        return this.http.get('/golestanService', httpOptions)
            .pipe(map((data) => {
            return data;
        }));
    }
}
LibRegisterPanelService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LibRegisterPanelService, deps: [{ token: i1.HttpBackend }, { token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
LibRegisterPanelService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LibRegisterPanelService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LibRegisterPanelService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpBackend }, { type: i1.HttpClient }]; } });

const TEXTCONSTANTS = {
    REGISTERFORMMOBILE: 'شماره موبایل را اینجا وارد کنید',
    REGISTERFORMLABELNAME: 'نام را اینجا وارد کنید',
    REGISTERFORMLABELFAMIL: 'نام خانوادگی را اینجا وارد کنید',
    REGISTERMOBILESENDCODE: 'ارسال کد',
    REGISTERFORMCODE: 'شش رقم ارسال شده',
    REGISTERMOBILERESEND: 'ارسال مجدد',
    REGISTEREMPTYMOBILE: 'شماره موبایل را وارد کنید',
    REGISTEREMPTYVALIDCODE: 'کد ارسالی به موبایلتان را وارد کنید',
    REGISTERMOBILEUNVALID: 'کد وارد شده صحیح نمی باشد',
    REGISTERMOBILEVALID: 'ثبت نام شما با موفقیت انجام شد',
    REGISTERFORMNAME: 'نام',
    REGISTERFORMFAMIL: 'نام خانوادگی',
    REGISTER_NameFAMIL_SUBMIT: 'ثبت وادامه',
    REGISTERMOBILEREQUIRED: ' شماره موبایل الزامی می باشد',
    REGISTERFORMNAMEREQUIRED: ' نام الزامی می باشد',
    REGISTERFORMFAMILREQUIRED: ' نام خانوادگی الزامی می باشد',
    REGISTER_NAMEFAMIL_ERROR: ' خطا در ذخیره سازی نام و نام خانوادگی',
};

class LoadingBackdropService {
    constructor() { }
    show() {
        const backdropWrapperElement = this.createLoadingBackdropTemplate();
        const bodyElement = document.querySelector('body');
        bodyElement?.appendChild(backdropWrapperElement);
    }
    hide() {
        const backdropWrapperElement = document.querySelector('#loadingBackdrop');
        backdropWrapperElement?.remove();
    }
    createLoadingBackdropTemplate() {
        const element = document.createElement('div');
        element.setAttribute('id', 'loadingBackdrop');
        element.setAttribute('style', `
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      z-index: 999;
      background:radial-gradient(rgb(126 128 136), transparent);
    `);
        element.innerHTML = `
      <div class="backdrop"></div>
      <div class="spinner"> در حال دریافت اطلاعات
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    `;
        return element;
    }
}
LoadingBackdropService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LoadingBackdropService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LoadingBackdropService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LoadingBackdropService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LoadingBackdropService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class LibRegisterPanelComponent {
    constructor(libRegisterPanelService, loadingBackdropService, snackBar) {
        this.libRegisterPanelService = libRegisterPanelService;
        this.loadingBackdropService = loadingBackdropService;
        this.snackBar = snackBar;
        this.From_LibRegister_To_LibWizard = new EventEmitter();
        this.textconstants = TEXTCONSTANTS;
        this.smsCanSend = false;
        this.registerIsComplate = false;
        this.codeCancheck = false;
        this.mobile = "";
        this.name = "";
        this.famil = "";
        this.validcode = "";
        this.validtext = "";
        this.hashdata = "";
        this.resend = false;
        this.personId = 0;
        this.getNameFamil = false;
    }
    check() {
        this.From_LibRegister_To_LibWizard.emit({
            mobile: this.mobile, name: this.name,
            famil: this.famil, personId: this.personId
        });
    }
    is6Digit(e) {
        const typedValue = e.keyCode;
        if (typedValue < 48 && typedValue > 57) {
            e.preventDefault();
            e.stopPropagation();
        }
        const typedNumber = parseInt(e.key);
        const currentVal = (e.target.value).toString() || '';
        const newVal = (currentVal + typedNumber.toString());
        if (newVal.length > 6) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (newVal.length == 6) {
            this.codeCancheck = true;
            this.sendvalidcode(newVal);
        }
    }
    checkvalchange() {
        this.validcode = "";
        let Patern = new RegExp('(09)[0-9 ]{9}');
        if (this.mobile.length > 11) {
            this.mobile = "";
        }
        if (this.mobile.length == 11 && Patern.test(this.mobile.toString())) {
            this.smsCanSend = true;
        }
        else {
            this.smsCanSend = false;
        }
    }
    checklen(e) {
        const typedValue = e.keyCode;
        if (typedValue < 48 && typedValue > 57) {
            e.preventDefault();
            e.stopPropagation();
        }
        const typedNumber = parseInt(e.key);
        const currentVal = (e.target.value).toString() || '';
        const newVal = (currentVal + typedNumber.toString());
        let Patern = new RegExp('(09)[0-9 ]{9}');
        if (newVal.length > 11) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (newVal.length == 11 && Patern.test(newVal.toString())) {
            this.smsCanSend = true;
        }
        else {
            this.smsCanSend = false;
        }
    }
    CheckRequiredName() {
        if (this.mobile == "") {
            this.snackBar.open(this.textconstants.REGISTERMOBILEREQUIRED, 'باشه', { duration: 10000 });
            return false;
        }
        if (this.name == "") {
            this.snackBar.open(this.textconstants.REGISTERFORMNAMEREQUIRED, 'باشه', { duration: 10000 });
            return false;
        }
        if (this.famil == "") {
            this.snackBar.open(this.textconstants.REGISTERFORMFAMILREQUIRED, 'باشه', { duration: 10000 });
            return false;
        }
        return true;
    }
    CheckRequiredMobile() {
        if (this.mobile == "") {
            this.snackBar.open(this.textconstants.REGISTERMOBILEREQUIRED, 'باشه', { duration: 10000 });
            return false;
        }
        return true;
    }
    SubmitNameFamil() {
        if (this.CheckRequiredName()) {
            this.loadingBackdropService.show();
            this.libRegisterPanelService
                .SaveNameFamilService(this.name, this.famil, this.mobile)
                .pipe(finalize(() => this.loadingBackdropService.hide()))
                .subscribe((data) => {
                if (data.success) {
                    if (data.personId > 0) {
                        this.personId = data.personId;
                        this.registerIsComplate = true;
                        this.getNameFamil = false;
                        this.check();
                    }
                    else {
                        this.getNameFamil = true;
                        this.registerIsComplate = false;
                        this.snackBar.open(this.textconstants.REGISTER_NAMEFAMIL_ERROR, 'باشه', { duration: 10000 });
                    }
                }
                else {
                    this.snackBar.open(this.textconstants.REGISTERMOBILEUNVALID, 'باشه', { duration: 10000 });
                }
            }, error => { });
        }
    }
    sendvalidcode(val) {
        if (this.CheckRequiredMobile()) {
            this.loadingBackdropService.show();
            this.libRegisterPanelService
                .checkCodeWithBackend(val, this.hashdata, this.mobile)
                .pipe(finalize(() => this.loadingBackdropService.hide()))
                .subscribe((data) => {
                this.resend = !data.success;
                if (data.success) {
                    if (data.personId > 0) {
                        this.personId = data.personId;
                        this.name = data.name;
                        this.famil = data.famil;
                        this.registerIsComplate = true;
                        this.getNameFamil = false;
                        this.check();
                    }
                    else {
                        this.getNameFamil = true;
                        this.registerIsComplate = false;
                    }
                }
                else {
                    const valicodeField = document.getElementById('validcodeField');
                    this.snackBar.open(this.textconstants.REGISTERMOBILEUNVALID, 'باشه', { duration: 10000 });
                    valicodeField?.classList.add('mat-form-field-danger');
                }
            }, error => { });
        }
    }
    sendSms() {
        if (this.smsCanSend && this.CheckRequiredMobile()) {
            this.loadingBackdropService.show();
            this.libRegisterPanelService
                .sendSmsWithbackend(this.mobile)
                .pipe(finalize(() => this.loadingBackdropService.hide()))
                .subscribe((data) => {
                if (data.success) {
                    this.hashdata = data.result;
                    this.codeCancheck = true;
                    this.resend = false;
                }
                else {
                    this.codeCancheck = false;
                    ;
                }
            }, error => { });
        }
    }
}
LibRegisterPanelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LibRegisterPanelComponent, deps: [{ token: LibRegisterPanelService }, { token: LoadingBackdropService }, { token: i3.MatSnackBar }], target: i0.ɵɵFactoryTarget.Component });
LibRegisterPanelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: LibRegisterPanelComponent, selector: "lib-LibRegisterPanel", outputs: { From_LibRegister_To_LibWizard: "From_LibRegister_To_LibWizard" }, ngImport: i0, template: "<form>\n  <div *ngIf=\"!getNameFamil\">\n    <div style=\"text-align:center\">\n      <mat-form-field appearance=\"outline\">\n\n        <mat-label>{{textconstants.REGISTERFORMMOBILE}}</mat-label>\n        <input [disabled]=\"this.registerIsComplate\" [(ngModel)]=\"mobile\" name=\"mobile\" (change)=\"checkvalchange()\"\n          (keypress)=\"checklen($event)\" matInput>\n      \n      </mat-form-field>\n    </div>\n    <div *ngIf=\"codeCancheck\" style=\"text-align:center\">\n      <div>\n        <span>\n          {{textconstants.REGISTEREMPTYVALIDCODE}}\n        </span>\n      </div>\n      <mat-form-field  appearance=\"outline\"  style=\"width: 35%;text-align: center;\">\n        <mat-label id=\"validcodeField\" >{{textconstants.REGISTERFORMCODE}}</mat-label>\n        <input [disabled]=\"this.registerIsComplate\" style=\"text-align: center;\" placeholder=\"- - - - - -\" [(ngModel)]=\"validcode\" (keypress)=\"is6Digit($event)\" name=\"code\"\n          matInput>\n      </mat-form-field>\n    </div>\n    <div>{{validtext}}</div>\n    <button *ngIf=\"smsCanSend\" (click)=\"sendSms()\" mat-button class=\" MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium \n          MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-fullWidth MuiButtonBase-root \"\n          tabindex=\"0\" style=\"    background: #3f51b5;\n          padding: 5px;\n          cursor: pointer;\n          border-radius: 5px;\n          color: #fff;\n          font-family: WYekan;\" type=\"button\">\n          {{textconstants.REGISTERMOBILESENDCODE}}\n          <span class=\"MuiTouchRipple-root rtl-mui-w0pj6f\"></span>\n        </button>\n  </div>\n  <div *ngIf=\"getNameFamil\">\n    <div style=\"text-align:center\">\n      <mat-form-field appearance=\"outline\">\n\n        <mat-label>{{textconstants.REGISTERFORMLABELNAME}}</mat-label>\n        <input [disabled]=\"this.registerIsComplate\" [(ngModel)]=\"name\" name=\"name\" matInput>\n        <mat-icon matSuffix>portrait</mat-icon>\n      </mat-form-field>\n    </div>\n    <div style=\"text-align:center\">\n      <mat-form-field appearance=\"outline\">\n\n        <mat-label>{{textconstants.REGISTERFORMLABELFAMIL}}</mat-label>\n        <input [disabled]=\"this.registerIsComplate\" [(ngModel)]=\"famil\" name=\"famil\" matInput>\n        <mat-icon matSuffix>portrait</mat-icon>\n      </mat-form-field>\n    </div>\n    <button (click)=\"SubmitNameFamil()\" mat-button class=\"mat-stepper-next MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium \n  MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-fullWidth MuiButtonBase-root \" tabindex=\"0\"\n      type=\"button\">\n      {{textconstants.REGISTER_NameFAMIL_SUBMIT}}\n      <span class=\"MuiTouchRipple-root rtl-mui-w0pj6f\"></span>\n    </button>\n  </div>\n\n</form>\n", styles: [".mat-mdc-form-field-infix{font-family:WYekan}mat-form-field{width:75%}mat-label{font-family:WYekan}.mat-form-field-danger{color:red!important}.mat-form-field-NOReport{border:solid rgb(70,19,236) 1px}mat-label{font-size:x-small}.mat-input-element{height:80px!important}.mat-simple-snack-bar-content{font-family:WYekan;font-size:15px}\n"], dependencies: [{ kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatLabel, selector: "mat-label" }, { kind: "directive", type: i4.MatSuffix, selector: "[matSuffix]" }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i6.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i7.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i7.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i7.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i7.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i7.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i7.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i8.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LibRegisterPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-LibRegisterPanel', template: "<form>\n  <div *ngIf=\"!getNameFamil\">\n    <div style=\"text-align:center\">\n      <mat-form-field appearance=\"outline\">\n\n        <mat-label>{{textconstants.REGISTERFORMMOBILE}}</mat-label>\n        <input [disabled]=\"this.registerIsComplate\" [(ngModel)]=\"mobile\" name=\"mobile\" (change)=\"checkvalchange()\"\n          (keypress)=\"checklen($event)\" matInput>\n      \n      </mat-form-field>\n    </div>\n    <div *ngIf=\"codeCancheck\" style=\"text-align:center\">\n      <div>\n        <span>\n          {{textconstants.REGISTEREMPTYVALIDCODE}}\n        </span>\n      </div>\n      <mat-form-field  appearance=\"outline\"  style=\"width: 35%;text-align: center;\">\n        <mat-label id=\"validcodeField\" >{{textconstants.REGISTERFORMCODE}}</mat-label>\n        <input [disabled]=\"this.registerIsComplate\" style=\"text-align: center;\" placeholder=\"- - - - - -\" [(ngModel)]=\"validcode\" (keypress)=\"is6Digit($event)\" name=\"code\"\n          matInput>\n      </mat-form-field>\n    </div>\n    <div>{{validtext}}</div>\n    <button *ngIf=\"smsCanSend\" (click)=\"sendSms()\" mat-button class=\" MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium \n          MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-fullWidth MuiButtonBase-root \"\n          tabindex=\"0\" style=\"    background: #3f51b5;\n          padding: 5px;\n          cursor: pointer;\n          border-radius: 5px;\n          color: #fff;\n          font-family: WYekan;\" type=\"button\">\n          {{textconstants.REGISTERMOBILESENDCODE}}\n          <span class=\"MuiTouchRipple-root rtl-mui-w0pj6f\"></span>\n        </button>\n  </div>\n  <div *ngIf=\"getNameFamil\">\n    <div style=\"text-align:center\">\n      <mat-form-field appearance=\"outline\">\n\n        <mat-label>{{textconstants.REGISTERFORMLABELNAME}}</mat-label>\n        <input [disabled]=\"this.registerIsComplate\" [(ngModel)]=\"name\" name=\"name\" matInput>\n        <mat-icon matSuffix>portrait</mat-icon>\n      </mat-form-field>\n    </div>\n    <div style=\"text-align:center\">\n      <mat-form-field appearance=\"outline\">\n\n        <mat-label>{{textconstants.REGISTERFORMLABELFAMIL}}</mat-label>\n        <input [disabled]=\"this.registerIsComplate\" [(ngModel)]=\"famil\" name=\"famil\" matInput>\n        <mat-icon matSuffix>portrait</mat-icon>\n      </mat-form-field>\n    </div>\n    <button (click)=\"SubmitNameFamil()\" mat-button class=\"mat-stepper-next MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium \n  MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-fullWidth MuiButtonBase-root \" tabindex=\"0\"\n      type=\"button\">\n      {{textconstants.REGISTER_NameFAMIL_SUBMIT}}\n      <span class=\"MuiTouchRipple-root rtl-mui-w0pj6f\"></span>\n    </button>\n  </div>\n\n</form>\n", styles: [".mat-mdc-form-field-infix{font-family:WYekan}mat-form-field{width:75%}mat-label{font-family:WYekan}.mat-form-field-danger{color:red!important}.mat-form-field-NOReport{border:solid rgb(70,19,236) 1px}mat-label{font-size:x-small}.mat-input-element{height:80px!important}.mat-simple-snack-bar-content{font-family:WYekan;font-size:15px}\n"] }]
        }], ctorParameters: function () { return [{ type: LibRegisterPanelService }, { type: LoadingBackdropService }, { type: i3.MatSnackBar }]; }, propDecorators: { From_LibRegister_To_LibWizard: [{
                type: Output
            }] } });

//import { HttpClientModule } from '@angular/common/http';
class LibRegisterPanelModule {
}
LibRegisterPanelModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LibRegisterPanelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LibRegisterPanelModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: LibRegisterPanelModule, declarations: [LibRegisterPanelComponent], imports: [MatInputModule, MatIconModule, MatFormFieldModule, FormsModule, CommonModule //,HttpClientModule
    ], exports: [LibRegisterPanelComponent] });
LibRegisterPanelModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LibRegisterPanelModule, imports: [MatInputModule, MatIconModule, MatFormFieldModule, FormsModule, CommonModule //,HttpClientModule
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LibRegisterPanelModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LibRegisterPanelComponent
                    ],
                    imports: [
                        MatInputModule, MatIconModule, MatFormFieldModule, FormsModule, CommonModule //,HttpClientModule
                    ],
                    exports: [
                        LibRegisterPanelComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of lib-register-panel
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LibRegisterPanelComponent, LibRegisterPanelModule, LibRegisterPanelService };
//# sourceMappingURL=lib-register-panel.mjs.map
