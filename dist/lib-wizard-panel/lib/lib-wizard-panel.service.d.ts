import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bill } from './lib-wizard-panel-bill.model';
import * as i0 from "@angular/core";
export declare class LibWizardPanelService {
    private handler;
    private http;
    constructor(handler: HttpBackend, http: HttpClient);
    get(item: {
        bill: Bill;
        mobile: string;
    }): Observable<{
        result: string;
        success: boolean;
    }>;
    getNameFamil(item: {
        personId: number;
    }): Observable<{
        result: string;
        success: boolean;
        data: {
            name: string;
            famil: string;
            mobile: string;
        };
    }>;
    SubmitPost(item: {
        RentItemID: number;
        TypeReserve2: number;
        IncomeReasonID: number;
        personId: number;
        bill: Bill;
    }): Observable<{
        result: string;
        success: boolean;
        data: {
            DocNo: number;
            ReserveID: number;
            ToalPrice: number;
        };
    }>;
    submit(item: {
        RentItemID: number;
        TypeReserve2: number;
        IncomeReasonID: number;
        personId: number;
        bill: Bill;
    }): Observable<{
        result: string;
        success: boolean;
        data: {
            DocNo: number;
            ReserveID: number;
            ToalPrice: number;
        };
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LibWizardPanelService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LibWizardPanelService>;
}
