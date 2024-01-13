import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Calender } from './component-range-date-picker/cell-calender-reservation.model';
import * as i0 from "@angular/core";
export declare class LibReservPanelService {
    private handler;
    private http;
    constructor(handler: HttpBackend, http: HttpClient);
    get(RentItemID: number, StartDate: string, Act: string): Observable<Calender>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LibReservPanelService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LibReservPanelService>;
}
