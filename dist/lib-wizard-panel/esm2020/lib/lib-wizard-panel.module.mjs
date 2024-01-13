import { NgModule } from '@angular/core';
import { LibWizardPanelComponent } from './lib-wizard-panel.component';
import { LibReservPanelModule } from 'lib-reserv-panel';
import { LibRegisterPanelModule } from 'lib-register-panel';
import { CommonModule } from '@angular/common';
//import { NoopAnimationsModule  } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import * as i0 from "@angular/core";
//import { HttpClientModule } from '@angular/common/http';
export class LibWizardPanelModule {
}
LibWizardPanelModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LibWizardPanelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LibWizardPanelModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: LibWizardPanelModule, declarations: [LibWizardPanelComponent], imports: [LibRegisterPanelModule, CommonModule, FormsModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule,
        MatStepperModule, /* NoopAnimationsModule ,*/ MatIconModule, LibReservPanelModule,
        MatSnackBarModule], exports: [LibWizardPanelComponent] });
LibWizardPanelModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LibWizardPanelModule, imports: [LibRegisterPanelModule, CommonModule, FormsModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule,
        MatStepperModule, /* NoopAnimationsModule ,*/ MatIconModule, LibReservPanelModule,
        MatSnackBarModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LibWizardPanelModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LibWizardPanelComponent
                    ],
                    imports: [
                        LibRegisterPanelModule, CommonModule, FormsModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule,
                        MatStepperModule, /* NoopAnimationsModule ,*/ MatIconModule, LibReservPanelModule,
                        MatSnackBarModule
                    ],
                    exports: [
                        LibWizardPanelComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLXdpemFyZC1wYW5lbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9saWItd2l6YXJkLXBhbmVsL3NyYy9saWIvbGliLXdpemFyZC1wYW5lbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBc0IsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDdEQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLCtFQUErRTtBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFDLG1CQUFtQixFQUFHLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRyxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQzs7QUFDOUQsMERBQTBEO0FBbUIxRCxNQUFNLE9BQU8sb0JBQW9COztpSEFBcEIsb0JBQW9CO2tIQUFwQixvQkFBb0IsaUJBWjdCLHVCQUF1QixhQUd4QixzQkFBc0IsRUFBQyxZQUFZLEVBQUUsV0FBVyxFQUFDLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxrQkFBa0I7UUFDdkcsZ0JBQWdCLEVBQUMsMkJBQTJCLENBQUMsYUFBYSxFQUFDLG9CQUFvQjtRQUMvRSxpQkFBaUIsYUFJakIsdUJBQXVCO2tIQUdkLG9CQUFvQixZQVQ5QixzQkFBc0IsRUFBQyxZQUFZLEVBQUUsV0FBVyxFQUFDLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxrQkFBa0I7UUFDdkcsZ0JBQWdCLEVBQUMsMkJBQTJCLENBQUMsYUFBYSxFQUFDLG9CQUFvQjtRQUMvRSxpQkFBaUI7MkZBT1Isb0JBQW9CO2tCQWRoQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWix1QkFBdUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDUixzQkFBc0IsRUFBQyxZQUFZLEVBQUUsV0FBVyxFQUFDLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxrQkFBa0I7d0JBQ3ZHLGdCQUFnQixFQUFDLDJCQUEyQixDQUFDLGFBQWEsRUFBQyxvQkFBb0I7d0JBQy9FLGlCQUFpQjtxQkFFbEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHVCQUF1QjtxQkFDeEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSAsTW9kdWxlV2l0aFByb3ZpZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMaWJXaXphcmRQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vbGliLXdpemFyZC1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHtMaWJSZXNlcnZQYW5lbE1vZHVsZX0gZnJvbSAnbGliLXJlc2Vydi1wYW5lbCc7XG5pbXBvcnQge0xpYlJlZ2lzdGVyUGFuZWxNb2R1bGV9IGZyb20gJ2xpYi1yZWdpc3Rlci1wYW5lbCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuLy9pbXBvcnQgeyBOb29wQW5pbWF0aW9uc01vZHVsZSAgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsUmVhY3RpdmVGb3Jtc01vZHVsZSAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7ICBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdFN0ZXBwZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3N0ZXBwZXInO1xuaW1wb3J0IHtNYXRTbmFja0Jhck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbi8vaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTGliV2l6YXJkUGFuZWxDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICBcdExpYlJlZ2lzdGVyUGFuZWxNb2R1bGUsQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlICxNYXRJbnB1dE1vZHVsZSwgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdFN0ZXBwZXJNb2R1bGUsLyogTm9vcEFuaW1hdGlvbnNNb2R1bGUgLCovIE1hdEljb25Nb2R1bGUsTGliUmVzZXJ2UGFuZWxNb2R1bGUsLypIdHRwQ2xpZW50TW9kdWxlKi9cbiAgICBNYXRTbmFja0Jhck1vZHVsZVxuXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBMaWJXaXphcmRQYW5lbENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIExpYldpemFyZFBhbmVsTW9kdWxlIHtcblxuIH1cbiJdfQ==