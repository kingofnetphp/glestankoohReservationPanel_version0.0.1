import { NgModule } from '@angular/core';
import { LibReservPanelComponent } from './lib-reserv-panel.component';
import { ComponentRangeDatePickerComponent } from './component-range-date-picker/component-range-date-picker.component';
import { CommonModule } from '@angular/common';
import { LibReservPanelService } from './lib-reserv-panel.service';
import * as i0 from "@angular/core";
//import { HttpClientModule } from '@angular/common/http';
export class LibReservPanelModule {
}
LibReservPanelModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LibReservPanelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LibReservPanelModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: LibReservPanelModule, declarations: [LibReservPanelComponent, ComponentRangeDatePickerComponent], imports: [CommonModule], exports: [LibReservPanelComponent] });
LibReservPanelModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LibReservPanelModule, providers: [
        LibReservPanelService
    ], imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LibReservPanelModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LibReservPanelComponent, ComponentRangeDatePickerComponent
                    ],
                    imports: [
                        CommonModule, /*HttpClientModule,*/
                    ],
                    providers: [
                        LibReservPanelService
                    ],
                    exports: [
                        LibReservPanelComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLXJlc2Vydi1wYW5lbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9saWItcmVzZXJ2LXBhbmVsL3NyYy9saWIvbGliLXJlc2Vydi1wYW5lbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBc0IsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDeEgsT0FBTyxFQUFDLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDOztBQUNqRSwwREFBMEQ7QUFrQjFELE1BQU0sT0FBTyxvQkFBb0I7O2lIQUFwQixvQkFBb0I7a0hBQXBCLG9CQUFvQixpQkFaN0IsdUJBQXVCLEVBQUUsaUNBQWlDLGFBRzVELFlBQVksYUFNVix1QkFBdUI7a0hBR2Qsb0JBQW9CLGFBUG5CO1FBQ04scUJBQXFCO0tBQ3hCLFlBSkgsWUFBWTsyRkFTRCxvQkFBb0I7a0JBZGhDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLHVCQUF1QixFQUFFLGlDQUFpQztxQkFDM0Q7b0JBQ0QsT0FBTyxFQUFFO3dCQUNULFlBQVksRUFBQyxxQkFBcUI7cUJBQ2pDO29CQUNBLFNBQVMsRUFBRTt3QkFDTixxQkFBcUI7cUJBQ3hCO29CQUNILE9BQU8sRUFBRTt3QkFDUCx1QkFBdUI7cUJBQ3hCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGliUmVzZXJ2UGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2xpYi1yZXNlcnYtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBvbmVudFJhbmdlRGF0ZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50LXJhbmdlLWRhdGUtcGlja2VyL2NvbXBvbmVudC1yYW5nZS1kYXRlLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtMaWJSZXNlcnZQYW5lbFNlcnZpY2V9IGZyb20gJy4vbGliLXJlc2Vydi1wYW5lbC5zZXJ2aWNlJztcbi8vaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIExpYlJlc2VydlBhbmVsQ29tcG9uZW50LCBDb21wb25lbnRSYW5nZURhdGVQaWNrZXJDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICBDb21tb25Nb2R1bGUsLypIdHRwQ2xpZW50TW9kdWxlLCovXG4gIF0sXG4gICBwcm92aWRlcnM6IFtcbiAgICAgICAgTGliUmVzZXJ2UGFuZWxTZXJ2aWNlXG4gICAgXSxcbiAgZXhwb3J0czogW1xuICAgIExpYlJlc2VydlBhbmVsQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTGliUmVzZXJ2UGFuZWxNb2R1bGUgeyBcblxufVxuIl19