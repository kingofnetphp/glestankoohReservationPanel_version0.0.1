import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class LibRegisterPanelService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLXJlZ2lzdGVyLXBhbmVsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9saWItcmVnaXN0ZXItcGFuZWwvc3JjL2xpYi9saWItcmVnaXN0ZXItcGFuZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBMkIsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBT3JDLE1BQU0sT0FBTyx1QkFBdUI7SUFFbEMsWUFDVSxPQUFvQixFQUNwQixJQUFnQjtRQURoQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBQ3BCLFNBQUksR0FBSixJQUFJLENBQVk7SUFFMUIsQ0FBQztJQUNELG9CQUFvQixDQUFDLElBQVksRUFBRSxLQUFhLEVBQUUsTUFBYztRQUU5RCxJQUFJLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQzlCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQztRQUNoRCxJQUFJLFdBQVcsR0FBRztZQUNoQixPQUFPLEVBQUUsSUFBSSxXQUFXLEVBQUU7WUFDMUIsTUFBTSxFQUFFLE1BQU07U0FDZixDQUFDO1FBQ0YsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLG1DQUFtQyxD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bnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwQmFja2VuZCwgSHR0cFBhcmFtcywgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgTGliUmVnaXN0ZXJQYW5lbFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaGFuZGxlcjogSHR0cEJhY2tlbmQsXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50XG4gICkge1xuICB9XG4gIFNhdmVOYW1lRmFtaWxTZXJ2aWNlKG5hbWU6IHN0cmluZywgZmFtaWw6IHN0cmluZywgbW9iaWxlOiBzdHJpbmcpOlxuICAgIE9ic2VydmFibGU8eyByZXN1bHQ6IHN0cmluZywgc3VjY2VzczogYm9vbGVhbiwgcGVyc29uSWQ6IG51bWJlciB9PiB7XG4gICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnbmFtZScsIG5hbWUpO1xuICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ2ZhbWlsJywgZmFtaWwpO1xuICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ21vYmlsZScsIG1vYmlsZSk7XG4gICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnZnVuYycsICdTYXZlTmFtZUZhbWlsJyk7XG4gICAgbGV0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKCksXG4gICAgICBwYXJhbXM6IHBhcmFtc1xuICAgIH07XG4gICAgaHR0cE9wdGlvbnMuaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICBodHRwT3B0aW9ucy5oZWFkZXJzLmFwcGVuZCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcbiAgICBodHRwT3B0aW9ucy5oZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDx7IHJlc3VsdDogc3RyaW5nLCBzdWNjZXNzOiBib29sZWFuLCBwZXJzb25JZDogbnVtYmVyIH0+XG4gICAgKCcvZ29sZXN0YW5TZXJ2aWNlJywgaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShtYXAoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgY2hlY2tDb2RlV2l0aEJhY2tlbmQoY29kZTogc3RyaW5nLCBoYXNoZGF0YTogc3RyaW5nLCBtb2JpbGU6IHN0cmluZyk6IE9ic2VydmFibGU8e1xuICAgIHJlc3VsdDogc3RyaW5nLCBzdWNjZXNzOiBib29sZWFuLCBwZXJzb25JZDogbnVtYmVyLFxuICAgIG5hbWU6IHN0cmluZywgZmFtaWw6IHN0cmluZ1xuICB9PiB7XG4gICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnY29kZScsIGNvZGUpO1xuICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ2hhc2hkYXRhJywgaGFzaGRhdGEpO1xuICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ3JlZ2lzdGVyZWRNb2JpbGUnLCBtb2JpbGUpO1xuICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ2Z1bmMnLCAnY2hlY2tjb2RlJyk7XG4gICAgbGV0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKCksXG4gICAgICBwYXJhbXM6IHBhcmFtc1xuICAgIH07XG4gICAgaHR0cE9wdGlvbnMuaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICBodHRwT3B0aW9ucy5oZWFkZXJzLmFwcGVuZCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcbiAgICBodHRwT3B0aW9ucy5oZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDx7IHJlc3VsdDogc3RyaW5nLCBzdWNjZXNzOiBib29sZWFuLCByZWdpc3RlcmVkTW9iaWxlOiBib29sZWFuIH0+XG4gICAgKCAnL2dvbGVzdGFuU2VydmljZScsIGh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUobWFwKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KVxuICAgICAgKTtcbiAgfVxuICBzZW5kU21zV2l0aGJhY2tlbmQobW9iaWxlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHsgcmVzdWx0OiBzdHJpbmcsIHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xuXG4gICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnbW9iaWxlJywgbW9iaWxlKTtcbiAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdmdW5jJywgJ3NlbmRTbXMnKTtcbiAgICBsZXQgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoKSxcbiAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgfTtcbiAgICBodHRwT3B0aW9ucy5oZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIGh0dHBPcHRpb25zLmhlYWRlcnMuYXBwZW5kKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xuICAgIGh0dHBPcHRpb25zLmhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PHsgcmVzdWx0OiBzdHJpbmcsIHN1Y2Nlc3M6IGJvb2xlYW4gfT4oJy9nb2xlc3RhblNlcnZpY2UnLCBodHRwT3B0aW9ucylcbiAgICAgIC5waXBlKG1hcCgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSlcbiAgICAgICk7XG4gIH1cbn1cbiJdfQ==