import { Component, EventEmitter, Output } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { TEXTCONSTANTS } from './lib-register-panel.constants';
import * as i0 from "@angular/core";
import * as i1 from "./lib-register-panel.service";
import * as i2 from "./loading-backdrop.service";
import * as i3 from "@angular/material/snack-bar";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/icon";
import * as i7 from "@angular/forms";
import * as i8 from "@angular/common";
export class LibRegisterPanelComponent {
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
LibRegisterPanelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LibRegisterPanelComponent, deps: [{ token: i1.LibRegisterPanelService }, { token: i2.LoadingBackdropService }, { token: i3.MatSnackBar }], target: i0.ɵɵFactoryTarget.Component });
LibRegisterPanelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: LibRegisterPanelComponent, selector: "lib-LibRegisterPanel", outputs: { From_LibRegister_To_LibWizard: "From_LibRegister_To_LibWizard" }, ngImport: i0, template: "<form>\n  <div *ngIf=\"!getNameFamil\">\n    <div style=\"text-align:center\">\n      <mat-form-field appearance=\"outline\">\n\n        <mat-label>{{textconstants.REGISTERFORMMOBILE}}</mat-label>\n        <input [disabled]=\"this.registerIsComplate\" [(ngModel)]=\"mobile\" name=\"mobile\" (change)=\"checkvalchange()\"\n          (keypress)=\"checklen($event)\" matInput>\n      \n      </mat-form-field>\n    </div>\n    <div *ngIf=\"codeCancheck\" style=\"text-align:center\">\n      <div>\n        <span>\n          {{textconstants.REGISTEREMPTYVALIDCODE}}\n        </span>\n      </div>\n      <mat-form-field  appearance=\"outline\"  style=\"width: 35%;text-align: center;\">\n        <mat-label id=\"validcodeField\" >{{textconstants.REGISTERFORMCODE}}</mat-label>\n        <input [disabled]=\"this.registerIsComplate\" style=\"text-align: center;\" placeholder=\"- - - - - -\" [(ngModel)]=\"validcode\" (keypress)=\"is6Digit($event)\" name=\"code\"\n          matInput>\n      </mat-form-field>\n    </div>\n    <div>{{validtext}}</div>\n    <button *ngIf=\"smsCanSend\" (click)=\"sendSms()\" mat-button class=\" MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium \n          MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-fullWidth MuiButtonBase-root \"\n          tabindex=\"0\" style=\"    background: #3f51b5;\n          padding: 5px;\n          cursor: pointer;\n          border-radius: 5px;\n          color: #fff;\n          font-family: WYekan;\" type=\"button\">\n          {{textconstants.REGISTERMOBILESENDCODE}}\n          <span class=\"MuiTouchRipple-root rtl-mui-w0pj6f\"></span>\n        </button>\n  </div>\n  <div *ngIf=\"getNameFamil\">\n    <div style=\"text-align:center\">\n      <mat-form-field appearance=\"outline\">\n\n        <mat-label>{{textconstants.REGISTERFORMLABELNAME}}</mat-label>\n        <input [disabled]=\"this.registerIsComplate\" [(ngModel)]=\"name\" name=\"name\" matInput>\n        <mat-icon matSuffix>portrait</mat-icon>\n      </mat-form-field>\n    </div>\n    <div style=\"text-align:center\">\n      <mat-form-field appearance=\"outline\">\n\n        <mat-label>{{textconstants.REGISTERFORMLABELFAMIL}}</mat-label>\n        <input [disabled]=\"this.registerIsComplate\" [(ngModel)]=\"famil\" name=\"famil\" matInput>\n        <mat-icon matSuffix>portrait</mat-icon>\n      </mat-form-field>\n    </div>\n    <button (click)=\"SubmitNameFamil()\" mat-button class=\"mat-stepper-next MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium \n  MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-fullWidth MuiButtonBase-root \" tabindex=\"0\"\n      type=\"button\">\n      {{textconstants.REGISTER_NameFAMIL_SUBMIT}}\n      <span class=\"MuiTouchRipple-root rtl-mui-w0pj6f\"></span>\n    </button>\n  </div>\n\n</form>\n", styles: [".mat-mdc-form-field-infix{font-family:WYekan}mat-form-field{width:75%}mat-label{font-family:WYekan}.mat-form-field-danger{color:red!important}.mat-form-field-NOReport{border:solid rgb(70,19,236) 1px}mat-label{font-size:x-small}.mat-input-element{height:80px!important}.mat-simple-snack-bar-content{font-family:WYekan;font-size:15px}\n"], dependencies: [{ kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatLabel, selector: "mat-label" }, { kind: "directive", type: i4.MatSuffix, selector: "[matSuffix]" }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i6.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i7.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i7.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i7.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i7.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i7.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i7.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i8.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LibRegisterPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-LibRegisterPanel', template: "<form>\n  <div *ngIf=\"!getNameFamil\">\n    <div style=\"text-align:center\">\n      <mat-form-field appearance=\"outline\">\n\n        <mat-label>{{textconstants.REGISTERFORMMOBILE}}</mat-label>\n        <input [disabled]=\"this.registerIsComplate\" [(ngModel)]=\"mobile\" name=\"mobile\" (change)=\"checkvalchange()\"\n          (keypress)=\"checklen($event)\" matInput>\n      \n      </mat-form-field>\n    </div>\n    <div *ngIf=\"codeCancheck\" style=\"text-align:center\">\n      <div>\n        <span>\n          {{textconstants.REGISTEREMPTYVALIDCODE}}\n        </span>\n      </div>\n      <mat-form-field  appearance=\"outline\"  style=\"width: 35%;text-align: center;\">\n        <mat-label id=\"validcodeField\" >{{textconstants.REGISTERFORMCODE}}</mat-label>\n        <input [disabled]=\"this.registerIsComplate\" style=\"text-align: center;\" placeholder=\"- - - - - -\" [(ngModel)]=\"validcode\" (keypress)=\"is6Digit($event)\" name=\"code\"\n          matInput>\n      </mat-form-field>\n    </div>\n    <div>{{validtext}}</div>\n    <button *ngIf=\"smsCanSend\" (click)=\"sendSms()\" mat-button class=\" MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium \n          MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-fullWidth MuiButtonBase-root \"\n          tabindex=\"0\" style=\"    background: #3f51b5;\n          padding: 5px;\n          cursor: pointer;\n          border-radius: 5px;\n          color: #fff;\n          font-family: WYekan;\" type=\"button\">\n          {{textconstants.REGISTERMOBILESENDCODE}}\n          <span class=\"MuiTouchRipple-root rtl-mui-w0pj6f\"></span>\n        </button>\n  </div>\n  <div *ngIf=\"getNameFamil\">\n    <div style=\"text-align:center\">\n      <mat-form-field appearance=\"outline\">\n\n        <mat-label>{{textconstants.REGISTERFORMLABELNAME}}</mat-label>\n        <input [disabled]=\"this.registerIsComplate\" [(ngModel)]=\"name\" name=\"name\" matInput>\n        <mat-icon matSuffix>portrait</mat-icon>\n      </mat-form-field>\n    </div>\n    <div style=\"text-align:center\">\n      <mat-form-field appearance=\"outline\">\n\n        <mat-label>{{textconstants.REGISTERFORMLABELFAMIL}}</mat-label>\n        <input [disabled]=\"this.registerIsComplate\" [(ngModel)]=\"famil\" name=\"famil\" matInput>\n        <mat-icon matSuffix>portrait</mat-icon>\n      </mat-form-field>\n    </div>\n    <button (click)=\"SubmitNameFamil()\" mat-button class=\"mat-stepper-next MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium \n  MuiButton-containedSizeMedium MuiButton-disableElevation MuiButton-fullWidth MuiButtonBase-root \" tabindex=\"0\"\n      type=\"button\">\n      {{textconstants.REGISTER_NameFAMIL_SUBMIT}}\n      <span class=\"MuiTouchRipple-root rtl-mui-w0pj6f\"></span>\n    </button>\n  </div>\n\n</form>\n", styles: [".mat-mdc-form-field-infix{font-family:WYekan}mat-form-field{width:75%}mat-label{font-family:WYekan}.mat-form-field-danger{color:red!important}.mat-form-field-NOReport{border:solid rgb(70,19,236) 1px}mat-label{font-size:x-small}.mat-input-element{height:80px!important}.mat-simple-snack-bar-content{font-family:WYekan;font-size:15px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.LibRegisterPanelService }, { type: i2.LoadingBackdropService }, { type: i3.MatSnackBar }]; }, propDecorators: { From_LibRegister_To_LibWizard: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLXJlZ2lzdGVyLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYi1yZWdpc3Rlci1wYW5lbC9zcmMvbGliL2xpYi1yZWdpc3Rlci1wYW5lbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9saWItcmVnaXN0ZXItcGFuZWwvc3JjL2xpYi9saWItcmVnaXN0ZXItcGFuZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSWhFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUcxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0NBQWdDLENBQUE7Ozs7Ozs7Ozs7QUFROUQsTUFBTSxPQUFPLHlCQUF5QjtJQWVwQyxZQUNVLHVCQUFnRCxFQUNoRCxzQkFBOEMsRUFDOUMsUUFBcUI7UUFGckIsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLGFBQVEsR0FBUixRQUFRLENBQWE7UUFqQnJCLGtDQUE2QixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDbEUsa0JBQWEsR0FBRyxhQUFhLENBQUM7UUFDOUIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1Qix1QkFBa0IsR0FBWSxLQUFLLENBQUM7UUFDcEMsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGlCQUFZLEdBQVksS0FBSyxDQUFDO0lBTzlCLENBQUM7SUFDRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FDckM7WUFDRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDcEMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQzNDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxRQUFRLENBQUMsQ0FBTTtRQUNiLE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxVQUFVLEdBQUcsRUFBRSxJQUFJLFVBQVUsR0FBRyxFQUFFLEVBQUU7WUFDdEMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUNyQjtRQUVELE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNyRCxNQUFNLE1BQU0sR0FBRyxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNyRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBRXRCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUI7SUFFSCxDQUFDO0lBQ0QsY0FBYztRQUNaLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRXpDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFO1lBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUU7WUFFbkUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FFeEI7YUFDSTtZQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUNELFFBQVEsQ0FBQyxDQUFNO1FBQ2IsTUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLFVBQVUsR0FBRyxFQUFFLElBQUksVUFBVSxHQUFHLEVBQUUsRUFBRTtZQUN0QyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3JCO1FBRUQsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxNQUFNLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ3JELE1BQU0sTUFBTSxHQUFHLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELElBQUksTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRXpDLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUU7WUFDdEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUNyQjtRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRTtZQUV6RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUV4QjthQUNJO1lBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FFekI7SUFDSCxDQUFDO0lBQ0QsaUJBQWlCO1FBQ2YsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLHNCQUFzQixFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQzNGLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFO1lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFFN0YsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsRUFBRSxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUU5RixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0QsbUJBQW1CO1FBQ2pCLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsRUFBRSxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUMzRixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0QsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUU7WUFDNUIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25DLElBQUksQ0FBQyx1QkFBdUI7aUJBQ3pCLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2lCQUN2RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2lCQUN4RCxTQUFTLENBQ1IsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDUCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ2hCLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUU7d0JBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQzt3QkFDOUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7d0JBQzFCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztxQkFDZDt5QkFBTTt3QkFDTCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzt3QkFDekIsSUFBSSxDQUFDLGtCQUFrQixHQUFDLEtBQUssQ0FBQzt3QkFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsRUFBRSxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztxQkFFOUY7aUJBQ0Y7cUJBQ0k7b0JBRUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztpQkFHM0Y7WUFDSCxDQUFDLEVBQ0QsS0FBSyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQ2IsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQUNELGFBQWEsQ0FBQyxHQUFXO1FBRXZCLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUU7WUFDOUIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25DLElBQUksQ0FBQyx1QkFBdUI7aUJBQ3pCLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7aUJBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7aUJBQ3hELFNBQVMsQ0FDUixDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNQLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ2hCLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUU7d0JBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQzt3QkFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO3dCQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7d0JBQ3hCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7d0JBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO3dCQUMxQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7cUJBQ2Q7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7d0JBQ3pCLElBQUksQ0FBQyxrQkFBa0IsR0FBQyxLQUFLLENBQUM7cUJBQy9CO2lCQUNGO3FCQUNJO29CQUNILE1BQU0sYUFBYSxHQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztvQkFDL0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztvQkFDMUYsYUFBYSxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztpQkFDdkQ7WUFDSCxDQUFDLEVBQ0QsS0FBSyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQ2IsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQUNELE9BQU87UUFFTCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUU7WUFDakQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25DLElBQUksQ0FBQyx1QkFBdUI7aUJBQ3pCLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7aUJBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7aUJBQ3hELFNBQVMsQ0FDUixDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNQLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztvQkFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7aUJBQ3JCO3FCQUFNO29CQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO29CQUFBLENBQUM7aUJBQzVCO1lBQ0gsQ0FBQyxFQUNELEtBQUssQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUNiLENBQUM7U0FDTDtJQUNILENBQUM7O3NIQTNNVSx5QkFBeUI7MEdBQXpCLHlCQUF5Qix5SUNmdEMsd3pGQThEQTsyRkQvQ2EseUJBQXlCO2tCQUxyQyxTQUFTOytCQUNFLHNCQUFzQjs2S0FLdEIsNkJBQTZCO3NCQUF0QyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IGZpbmFsaXplIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTGliUmVnaXN0ZXJQYW5lbFNlcnZpY2UgfSBmcm9tICcuL2xpYi1yZWdpc3Rlci1wYW5lbC5zZXJ2aWNlJztcbmltcG9ydCB7IExvYWRpbmdCYWNrZHJvcFNlcnZpY2UgfSBmcm9tICcuL2xvYWRpbmctYmFja2Ryb3Auc2VydmljZSc7XG5pbXBvcnQgeyBURVhUQ09OU1RBTlRTIH0gZnJvbSAnLi9saWItcmVnaXN0ZXItcGFuZWwuY29uc3RhbnRzJ1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1MaWJSZWdpc3RlclBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpYi1yZWdpc3Rlci1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydsaWItcmVnaXN0ZXItcGFuZWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMaWJSZWdpc3RlclBhbmVsQ29tcG9uZW50IHtcbiAgQE91dHB1dCgpIEZyb21fTGliUmVnaXN0ZXJfVG9fTGliV2l6YXJkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIHRleHRjb25zdGFudHMgPSBURVhUQ09OU1RBTlRTO1xuICBzbXNDYW5TZW5kOiBib29sZWFuID0gZmFsc2U7XG4gIHJlZ2lzdGVySXNDb21wbGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBjb2RlQ2FuY2hlY2s6IGJvb2xlYW4gPSBmYWxzZTtcbiAgbW9iaWxlOiBzdHJpbmcgPSBcIlwiO1xuICBuYW1lOiBzdHJpbmcgPSBcIlwiO1xuICBmYW1pbDogc3RyaW5nID0gXCJcIjtcbiAgdmFsaWRjb2RlOiBzdHJpbmcgPSBcIlwiO1xuICB2YWxpZHRleHQ6IHN0cmluZyA9IFwiXCI7XG4gIGhhc2hkYXRhOiBzdHJpbmcgPSBcIlwiO1xuICByZXNlbmQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcGVyc29uSWQ6IG51bWJlciA9IDA7XG4gIGdldE5hbWVGYW1pbDogYm9vbGVhbiA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGxpYlJlZ2lzdGVyUGFuZWxTZXJ2aWNlOiBMaWJSZWdpc3RlclBhbmVsU2VydmljZSxcbiAgICBwcml2YXRlIGxvYWRpbmdCYWNrZHJvcFNlcnZpY2U6IExvYWRpbmdCYWNrZHJvcFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXJcbiAgKSB7XG5cbiAgfVxuICBjaGVjaygpIHtcbiAgICB0aGlzLkZyb21fTGliUmVnaXN0ZXJfVG9fTGliV2l6YXJkLmVtaXQoXG4gICAgICB7XG4gICAgICAgIG1vYmlsZTogdGhpcy5tb2JpbGUsIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgZmFtaWw6IHRoaXMuZmFtaWwsIHBlcnNvbklkOiB0aGlzLnBlcnNvbklkXG4gICAgICB9KTtcbiAgfVxuXG4gIGlzNkRpZ2l0KGU6IGFueSkge1xuICAgIGNvbnN0IHR5cGVkVmFsdWUgPSBlLmtleUNvZGU7XG4gICAgaWYgKHR5cGVkVmFsdWUgPCA0OCAmJiB0eXBlZFZhbHVlID4gNTcpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdHlwZWROdW1iZXIgPSBwYXJzZUludChlLmtleSk7XG4gICAgY29uc3QgY3VycmVudFZhbCA9IChlLnRhcmdldC52YWx1ZSkudG9TdHJpbmcoKSB8fCAnJztcbiAgICBjb25zdCBuZXdWYWwgPSAoY3VycmVudFZhbCArIHR5cGVkTnVtYmVyLnRvU3RyaW5nKCkpO1xuICAgIGlmIChuZXdWYWwubGVuZ3RoID4gNikge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgaWYgKG5ld1ZhbC5sZW5ndGggPT0gNikge1xuXG4gICAgICB0aGlzLmNvZGVDYW5jaGVjayA9IHRydWU7XG4gICAgICB0aGlzLnNlbmR2YWxpZGNvZGUobmV3VmFsKTtcbiAgICB9XG5cbiAgfVxuICBjaGVja3ZhbGNoYW5nZSgpIHtcbiAgICB0aGlzLnZhbGlkY29kZSA9IFwiXCI7XG4gICAgbGV0IFBhdGVybiA9IG5ldyBSZWdFeHAoJygwOSlbMC05IF17OX0nKTtcblxuICAgIGlmICh0aGlzLm1vYmlsZS5sZW5ndGggPiAxMSkge1xuICAgICAgdGhpcy5tb2JpbGUgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5tb2JpbGUubGVuZ3RoID09IDExICYmIFBhdGVybi50ZXN0KHRoaXMubW9iaWxlLnRvU3RyaW5nKCkpKSB7XG5cbiAgICAgIHRoaXMuc21zQ2FuU2VuZCA9IHRydWU7XG5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnNtc0NhblNlbmQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgY2hlY2tsZW4oZTogYW55KSB7XG4gICAgY29uc3QgdHlwZWRWYWx1ZSA9IGUua2V5Q29kZTtcbiAgICBpZiAodHlwZWRWYWx1ZSA8IDQ4ICYmIHR5cGVkVmFsdWUgPiA1Nykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBjb25zdCB0eXBlZE51bWJlciA9IHBhcnNlSW50KGUua2V5KTtcbiAgICBjb25zdCBjdXJyZW50VmFsID0gKGUudGFyZ2V0LnZhbHVlKS50b1N0cmluZygpIHx8ICcnO1xuICAgIGNvbnN0IG5ld1ZhbCA9IChjdXJyZW50VmFsICsgdHlwZWROdW1iZXIudG9TdHJpbmcoKSk7XG4gICAgbGV0IFBhdGVybiA9IG5ldyBSZWdFeHAoJygwOSlbMC05IF17OX0nKTtcblxuICAgIGlmIChuZXdWYWwubGVuZ3RoID4gMTEpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIGlmIChuZXdWYWwubGVuZ3RoID09IDExICYmIFBhdGVybi50ZXN0KG5ld1ZhbC50b1N0cmluZygpKSkge1xuXG4gICAgICB0aGlzLnNtc0NhblNlbmQgPSB0cnVlO1xuXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zbXNDYW5TZW5kID0gZmFsc2U7XG5cbiAgICB9XG4gIH1cbiAgQ2hlY2tSZXF1aXJlZE5hbWUoKSB7XG4gICAgaWYgKHRoaXMubW9iaWxlID09IFwiXCIpIHtcbiAgICAgIHRoaXMuc25hY2tCYXIub3Blbih0aGlzLnRleHRjb25zdGFudHMuUkVHSVNURVJNT0JJTEVSRVFVSVJFRCwgJ9io2KfYtNmHJywgeyBkdXJhdGlvbjogMTAwMDAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLm5hbWUgPT0gXCJcIikge1xuICAgICAgdGhpcy5zbmFja0Jhci5vcGVuKHRoaXMudGV4dGNvbnN0YW50cy5SRUdJU1RFUkZPUk1OQU1FUkVRVUlSRUQsICfYqNin2LTZhycsIHsgZHVyYXRpb246IDEwMDAwIH0pO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLmZhbWlsID09IFwiXCIpIHtcbiAgICAgIHRoaXMuc25hY2tCYXIub3Blbih0aGlzLnRleHRjb25zdGFudHMuUkVHSVNURVJGT1JNRkFNSUxSRVFVSVJFRCwgJ9io2KfYtNmHJywgeyBkdXJhdGlvbjogMTAwMDAgfSk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgQ2hlY2tSZXF1aXJlZE1vYmlsZSgpIHtcbiAgICBpZiAodGhpcy5tb2JpbGUgPT0gXCJcIikge1xuICAgICAgdGhpcy5zbmFja0Jhci5vcGVuKHRoaXMudGV4dGNvbnN0YW50cy5SRUdJU1RFUk1PQklMRVJFUVVJUkVELCAn2KjYp9i02YcnLCB7IGR1cmF0aW9uOiAxMDAwMCB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgU3VibWl0TmFtZUZhbWlsKCkge1xuICAgIGlmICh0aGlzLkNoZWNrUmVxdWlyZWROYW1lKCkpIHtcbiAgICAgIHRoaXMubG9hZGluZ0JhY2tkcm9wU2VydmljZS5zaG93KCk7XG4gICAgICB0aGlzLmxpYlJlZ2lzdGVyUGFuZWxTZXJ2aWNlXG4gICAgICAgIC5TYXZlTmFtZUZhbWlsU2VydmljZSh0aGlzLm5hbWUsIHRoaXMuZmFtaWwsdGhpcy5tb2JpbGUpXG4gICAgICAgIC5waXBlKGZpbmFsaXplKCgpID0+IHRoaXMubG9hZGluZ0JhY2tkcm9wU2VydmljZS5oaWRlKCkpKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgIGlmIChkYXRhLnBlcnNvbklkID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVyc29uSWQgPSBkYXRhLnBlcnNvbklkO1xuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJJc0NvbXBsYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldE5hbWVGYW1pbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2soKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldE5hbWVGYW1pbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlcklzQ29tcGxhdGU9ZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zbmFja0Jhci5vcGVuKHRoaXMudGV4dGNvbnN0YW50cy5SRUdJU1RFUl9OQU1FRkFNSUxfRVJST1IsICfYqNin2LTZhycsIHsgZHVyYXRpb246IDEwMDAwIH0pO1xuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuXG4gICAgICAgICAgICAgIHRoaXMuc25hY2tCYXIub3Blbih0aGlzLnRleHRjb25zdGFudHMuUkVHSVNURVJNT0JJTEVVTlZBTElELCAn2KjYp9i02YcnLCB7IGR1cmF0aW9uOiAxMDAwMCB9KTtcblxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvciA9PiB7IH0sXG4gICAgICAgICk7XG4gICAgfVxuICB9XG4gIHNlbmR2YWxpZGNvZGUodmFsOiBzdHJpbmcpIHtcblxuICAgIGlmICh0aGlzLkNoZWNrUmVxdWlyZWRNb2JpbGUoKSkge1xuICAgICAgdGhpcy5sb2FkaW5nQmFja2Ryb3BTZXJ2aWNlLnNob3coKTtcbiAgICAgIHRoaXMubGliUmVnaXN0ZXJQYW5lbFNlcnZpY2VcbiAgICAgICAgLmNoZWNrQ29kZVdpdGhCYWNrZW5kKHZhbCwgdGhpcy5oYXNoZGF0YSwgdGhpcy5tb2JpbGUpXG4gICAgICAgIC5waXBlKGZpbmFsaXplKCgpID0+IHRoaXMubG9hZGluZ0JhY2tkcm9wU2VydmljZS5oaWRlKCkpKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc2VuZCA9ICFkYXRhLnN1Y2Nlc3M7XG4gICAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgIGlmIChkYXRhLnBlcnNvbklkID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVyc29uSWQgPSBkYXRhLnBlcnNvbklkO1xuICAgICAgICAgICAgICAgIHRoaXMubmFtZSA9IGRhdGEubmFtZTtcbiAgICAgICAgICAgICAgICB0aGlzLmZhbWlsID0gZGF0YS5mYW1pbDtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVySXNDb21wbGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXROYW1lRmFtaWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXROYW1lRmFtaWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJJc0NvbXBsYXRlPWZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgdmFsaWNvZGVGaWVsZCA9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZhbGlkY29kZUZpZWxkJyk7XG4gICAgICAgICAgICAgIHRoaXMuc25hY2tCYXIub3Blbih0aGlzLnRleHRjb25zdGFudHMuUkVHSVNURVJNT0JJTEVVTlZBTElELCAn2KjYp9i02YcnLCB7IGR1cmF0aW9uOiAxMDAwMCB9KTtcbiAgICAgICAgICAgICAgdmFsaWNvZGVGaWVsZD8uY2xhc3NMaXN0LmFkZCgnbWF0LWZvcm0tZmllbGQtZGFuZ2VyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvciA9PiB7IH0sXG4gICAgICAgICk7XG4gICAgfVxuICB9XG4gIHNlbmRTbXMoKSB7XG5cbiAgICBpZiAodGhpcy5zbXNDYW5TZW5kICYmIHRoaXMuQ2hlY2tSZXF1aXJlZE1vYmlsZSgpKSB7XG4gICAgICB0aGlzLmxvYWRpbmdCYWNrZHJvcFNlcnZpY2Uuc2hvdygpO1xuICAgICAgdGhpcy5saWJSZWdpc3RlclBhbmVsU2VydmljZVxuICAgICAgICAuc2VuZFNtc1dpdGhiYWNrZW5kKHRoaXMubW9iaWxlKVxuICAgICAgICAucGlwZShmaW5hbGl6ZSgoKSA9PiB0aGlzLmxvYWRpbmdCYWNrZHJvcFNlcnZpY2UuaGlkZSgpKSlcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICB0aGlzLmhhc2hkYXRhID0gZGF0YS5yZXN1bHQ7XG4gICAgICAgICAgICAgIHRoaXMuY29kZUNhbmNoZWNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhpcy5yZXNlbmQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuY29kZUNhbmNoZWNrID0gZmFsc2U7O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3IgPT4geyB9LFxuICAgICAgICApO1xuICAgIH1cbiAgfVxuXG5cbn1cbiIsIjxmb3JtPlxuICA8ZGl2ICpuZ0lmPVwiIWdldE5hbWVGYW1pbFwiPlxuICAgIDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG5cbiAgICAgICAgPG1hdC1sYWJlbD57e3RleHRjb25zdGFudHMuUkVHSVNURVJGT1JNTU9CSUxFfX08L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0IFtkaXNhYmxlZF09XCJ0aGlzLnJlZ2lzdGVySXNDb21wbGF0ZVwiIFsobmdNb2RlbCldPVwibW9iaWxlXCIgbmFtZT1cIm1vYmlsZVwiIChjaGFuZ2UpPVwiY2hlY2t2YWxjaGFuZ2UoKVwiXG4gICAgICAgICAgKGtleXByZXNzKT1cImNoZWNrbGVuKCRldmVudClcIiBtYXRJbnB1dD5cbiAgICAgIFxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2ICpuZ0lmPVwiY29kZUNhbmNoZWNrXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAge3t0ZXh0Y29uc3RhbnRzLlJFR0lTVEVSRU1QVFlWQUxJRENPREV9fVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCAgYXBwZWFyYW5jZT1cIm91dGxpbmVcIiAgc3R5bGU9XCJ3aWR0aDogMzUlO3RleHQtYWxpZ246IGNlbnRlcjtcIj5cbiAgICAgICAgPG1hdC1sYWJlbCBpZD1cInZhbGlkY29kZUZpZWxkXCIgPnt7dGV4dGNvbnN0YW50cy5SRUdJU1RFUkZPUk1DT0RFfX08L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0IFtkaXNhYmxlZF09XCJ0aGlzLnJlZ2lzdGVySXNDb21wbGF0ZVwiIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiIHBsYWNlaG9sZGVyPVwiLSAtIC0gLSAtIC1cIiBbKG5nTW9kZWwpXT1cInZhbGlkY29kZVwiIChrZXlwcmVzcyk9XCJpczZEaWdpdCgkZXZlbnQpXCIgbmFtZT1cImNvZGVcIlxuICAgICAgICAgIG1hdElucHV0PlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2Pnt7dmFsaWR0ZXh0fX08L2Rpdj5cbiAgICA8YnV0dG9uICpuZ0lmPVwic21zQ2FuU2VuZFwiIChjbGljayk9XCJzZW5kU21zKClcIiBtYXQtYnV0dG9uIGNsYXNzPVwiIE11aUJ1dHRvbi1yb290IE11aUJ1dHRvbi1jb250YWluZWQgTXVpQnV0dG9uLWNvbnRhaW5lZFByaW1hcnkgTXVpQnV0dG9uLXNpemVNZWRpdW0gXG4gICAgICAgICAgTXVpQnV0dG9uLWNvbnRhaW5lZFNpemVNZWRpdW0gTXVpQnV0dG9uLWRpc2FibGVFbGV2YXRpb24gTXVpQnV0dG9uLWZ1bGxXaWR0aCBNdWlCdXR0b25CYXNlLXJvb3QgXCJcbiAgICAgICAgICB0YWJpbmRleD1cIjBcIiBzdHlsZT1cIiAgICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBXWWVrYW47XCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgIHt7dGV4dGNvbnN0YW50cy5SRUdJU1RFUk1PQklMRVNFTkRDT0RFfX1cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIk11aVRvdWNoUmlwcGxlLXJvb3QgcnRsLW11aS13MHBqNmZcIj48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbiAgPGRpdiAqbmdJZj1cImdldE5hbWVGYW1pbFwiPlxuICAgIDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG5cbiAgICAgICAgPG1hdC1sYWJlbD57e3RleHRjb25zdGFudHMuUkVHSVNURVJGT1JNTEFCRUxOQU1FfX08L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0IFtkaXNhYmxlZF09XCJ0aGlzLnJlZ2lzdGVySXNDb21wbGF0ZVwiIFsobmdNb2RlbCldPVwibmFtZVwiIG5hbWU9XCJuYW1lXCIgbWF0SW5wdXQ+XG4gICAgICAgIDxtYXQtaWNvbiBtYXRTdWZmaXg+cG9ydHJhaXQ8L21hdC1pY29uPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXJcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxuXG4gICAgICAgIDxtYXQtbGFiZWw+e3t0ZXh0Y29uc3RhbnRzLlJFR0lTVEVSRk9STUxBQkVMRkFNSUx9fTwvbWF0LWxhYmVsPlxuICAgICAgICA8aW5wdXQgW2Rpc2FibGVkXT1cInRoaXMucmVnaXN0ZXJJc0NvbXBsYXRlXCIgWyhuZ01vZGVsKV09XCJmYW1pbFwiIG5hbWU9XCJmYW1pbFwiIG1hdElucHV0PlxuICAgICAgICA8bWF0LWljb24gbWF0U3VmZml4PnBvcnRyYWl0PC9tYXQtaWNvbj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiU3VibWl0TmFtZUZhbWlsKClcIiBtYXQtYnV0dG9uIGNsYXNzPVwibWF0LXN0ZXBwZXItbmV4dCBNdWlCdXR0b24tcm9vdCBNdWlCdXR0b24tY29udGFpbmVkIE11aUJ1dHRvbi1jb250YWluZWRQcmltYXJ5IE11aUJ1dHRvbi1zaXplTWVkaXVtIFxuICBNdWlCdXR0b24tY29udGFpbmVkU2l6ZU1lZGl1bSBNdWlCdXR0b24tZGlzYWJsZUVsZXZhdGlvbiBNdWlCdXR0b24tZnVsbFdpZHRoIE11aUJ1dHRvbkJhc2Utcm9vdCBcIiB0YWJpbmRleD1cIjBcIlxuICAgICAgdHlwZT1cImJ1dHRvblwiPlxuICAgICAge3t0ZXh0Y29uc3RhbnRzLlJFR0lTVEVSX05hbWVGQU1JTF9TVUJNSVR9fVxuICAgICAgPHNwYW4gY2xhc3M9XCJNdWlUb3VjaFJpcHBsZS1yb290IHJ0bC1tdWktdzBwajZmXCI+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cblxuPC9mb3JtPlxuIl19