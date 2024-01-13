import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class LibRegisterPanelService {
    private handler;
    private http;
    constructor(handler: HttpBackend, http: HttpClient);
    SaveNameFamilService(name: string, famil: string, mobile: string): Observable<{
        result: string;
        success: boolean;
        personId: number;
    }>;
    checkCodeWithBackend(code: string, hashdata: string, mobile: string): Observable<{
        result: string;
        success: boolean;
        personId: number;
        name: string;
        famil: string;
    }>;
    sendSmsWithbackend(mobile: string): Observable<{
        result: string;
        success: boolean;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LibRegisterPanelService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LibRegisterPanelService>;
}
