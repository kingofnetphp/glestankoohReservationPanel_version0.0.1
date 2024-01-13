import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class LibWizardPanelService {
    constructor(handler, http) {
        this.handler = handler;
        this.http = http;
        // this.http = new HttpClient(handler); /// to skip interceptors, becouse this service hits third backend provider
    }
    get(item) {
        let params = new HttpParams();
        params = params.append('bill', JSON.stringify(item.bill));
        params = params.append('mobile', item.mobile);
        params = params.append('func', 'savereservation');
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
    getNameFamil(item) {
        let params = new HttpParams();
        params = params.append('personId', item.personId);
        params = params.append('func', 'getnamefamil');
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
    SubmitPost(item) {
        item.bill.choicedCalender.days = [];
        let params = new HttpParams()
            .set('bill', JSON.stringify(item.bill))
            .set('personId', item.personId)
            .set('RentItemID', item.RentItemID)
            .set('TypeReserve2', item.TypeReserve2)
            .set('IncomeReasonID', item.IncomeReasonID)
            .set('func', 'savereservation');
        let httpOptions = {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
                .set('Access-Control-Allow-Origin', '*')
        };
        return this.http.post('/golestanService', params.toString(), httpOptions)
            .pipe(map((data) => {
            return data;
        }));
    }
    submit(item) {
        item.bill.choicedCalender.days = [];
        let params = new HttpParams();
        params = params.append('bill', JSON.stringify(item.bill));
        params = params.append('personId', item.personId);
        params = params.append('RentItemID', item.RentItemID);
        params = params.append('TypeReserve2', item.TypeReserve2);
        params = params.append('IncomeReasonID', item.IncomeReasonID);
        params = params.append('func', 'savereservation');
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
LibWizardPanelService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LibWizardPanelService, deps: [{ token: i1.HttpBackend }, { token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
LibWizardPanelService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LibWizardPanelService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LibWizardPanelService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpBackend }, { type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLXdpemFyZC1wYW5lbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbGliLXdpemFyZC1wYW5lbC9zcmMvbGliL2xpYi13aXphcmQtcGFuZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBMkIsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBT3JDLE1BQU0sT0FBTyxxQkFBcUI7SUFFaEMsWUFDVSxPQUFvQixFQUNwQixJQUFnQjtRQURoQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBQ3BCLFNBQUksR0FBSixJQUFJLENBQVk7UUFFeEIsa0hBQWtIO0lBQ3BILENBQUM7SUFFRCxHQUFHLENBQUMsSUFBb0M7UUFDdEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUM5QixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMxRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2xELElBQUksV0FBVyxHQUFHO1lBQ2hCLE9BQU8sRUFBRSxJQUFJLFdBQVcsRUFBRTtZQUMxQixNQUFNLEVBQUUsTUFBTTtTQUNmLENBQUM7UUFDRixXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztRQUNoRixXQUFXLENBQUMsT0FB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SGpDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwQmFja2VuZCwgSHR0cFBhcmFtcywgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcydcbmltcG9ydCB7IEJpbGwgfSBmcm9tICcuL2xpYi13aXphcmQtcGFuZWwtYmlsbC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExpYldpemFyZFBhbmVsU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBoYW5kbGVyOiBIdHRwQmFja2VuZCxcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnRcbiAgKSB7XG4gICAgLy8gdGhpcy5odHRwID0gbmV3IEh0dHBDbGllbnQoaGFuZGxlcik7IC8vLyB0byBza2lwIGludGVyY2VwdG9ycywgYmVjb3VzZSB0aGlzIHNlcnZpY2UgaGl0cyB0aGlyZCBiYWNrZW5kIHByb3ZpZGVyXG4gIH1cblxuICBnZXQoaXRlbTogeyBiaWxsOiBCaWxsLCBtb2JpbGU6IHN0cmluZyB9KTogT2JzZXJ2YWJsZTx7IHJlc3VsdDogc3RyaW5nLCBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdiaWxsJywgSlNPTi5zdHJpbmdpZnkoaXRlbS5iaWxsKSk7XG4gICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnbW9iaWxlJywgaXRlbS5tb2JpbGUpO1xuICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ2Z1bmMnLCAnc2F2ZXJlc2VydmF0aW9uJyk7XG4gICAgbGV0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKCksXG4gICAgICBwYXJhbXM6IHBhcmFtc1xuICAgIH07XG4gICAgaHR0cE9wdGlvbnMuaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICBodHRwT3B0aW9ucy5oZWFkZXJzLmFwcGVuZCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcbiAgICBodHRwT3B0aW9ucy5oZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDx7IHJlc3VsdDogc3RyaW5nLCBzdWNjZXNzOiBib29sZWFuIH0+KCcvZ29sZXN0YW5TZXJ2aWNlJywgaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShtYXAoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICApO1xuICB9XG4gIGdldE5hbWVGYW1pbChpdGVtOiB7IHBlcnNvbklkOiBudW1iZXIgfSk6IE9ic2VydmFibGU8e1xuICAgIHJlc3VsdDogc3RyaW5nLCBzdWNjZXNzOiBib29sZWFuLFxuICAgIGRhdGE6IHsgbmFtZTogc3RyaW5nLCBmYW1pbDogc3RyaW5nLCBtb2JpbGU6IHN0cmluZyB9XG4gIH0+IHtcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdwZXJzb25JZCcsIGl0ZW0ucGVyc29uSWQpO1xuICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ2Z1bmMnLCAnZ2V0bmFtZWZhbWlsJyk7XG4gICAgbGV0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKCksXG4gICAgICBwYXJhbXM6IHBhcmFtc1xuICAgIH07XG4gICAgaHR0cE9wdGlvbnMuaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICBodHRwT3B0aW9ucy5oZWFkZXJzLmFwcGVuZCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKTtcbiAgICBodHRwT3B0aW9ucy5oZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDx7IHJlc3VsdDogc3RyaW5nLCBzdWNjZXNzOiBib29sZWFuLCBkYXRhOlxuICAgICAgIHsgbmFtZTogc3RyaW5nLCBmYW1pbDogc3RyaW5nLCBtb2JpbGU6IHN0cmluZyB9IH0+XG4gICAgICAgKCcvZ29sZXN0YW5TZXJ2aWNlJywgaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShtYXAoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgICApO1xuICB9XG4gIFN1Ym1pdFBvc3QoaXRlbToge1xuICAgIFJlbnRJdGVtSUQ6IG51bWJlcixcbiAgICBUeXBlUmVzZXJ2ZTI6IG51bWJlcixcbiAgICBJbmNvbWVSZWFzb25JRDogbnVtYmVyLCBwZXJzb25JZDogbnVtYmVyLCBiaWxsOiBCaWxsXG4gIH0pOiBPYnNlcnZhYmxlPFxuICAgIHsgcmVzdWx0OiBzdHJpbmcsIHN1Y2Nlc3M6IGJvb2xlYW4sIGRhdGE6IHsgRG9jTm86IG51bWJlciwgUmVzZXJ2ZUlEOiBudW1iZXIsIFRvYWxQcmljZTogbnVtYmVyIH0gfVxuICA+IHtcbiAgICBpdGVtLmJpbGwuY2hvaWNlZENhbGVuZGVyLmRheXM9W107XG4gICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKClcbiAgICAgIC5zZXQoJ2JpbGwnLCBKU09OLnN0cmluZ2lmeShpdGVtLmJpbGwpKVxuICAgICAgLnNldCgncGVyc29uSWQnLCBpdGVtLnBlcnNvbklkKVxuICAgICAgLnNldCgnUmVudEl0ZW1JRCcsIGl0ZW0uUmVudEl0ZW1JRClcbiAgICAgIC5zZXQoJ1R5cGVSZXNlcnZlMicsIGl0ZW0uVHlwZVJlc2VydmUyKVxuICAgICAgLnNldCgnSW5jb21lUmVhc29uSUQnLCBpdGVtLkluY29tZVJlYXNvbklEKVxuICAgICAgLnNldCgnZnVuYycsICdzYXZlcmVzZXJ2YXRpb24nKTtcbiAgICBsZXQgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgICAuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpXG4gICAgICAgIC5zZXQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJylcbiAgICB9O1xuIFxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDx7IHJlc3VsdDogc3RyaW5nLCBzdWNjZXNzOiBib29sZWFuIH0+XG4gICAgKCcvZ29sZXN0YW5TZXJ2aWNlJywgcGFyYW1zLnRvU3RyaW5nKCksIGh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUobWFwKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KVxuICAgICAgKTtcbiAgfVxuICBzdWJtaXQoaXRlbToge1xuICAgIFJlbnRJdGVtSUQ6IG51bWJlcixcbiAgICBUeXBlUmVzZXJ2ZTI6IG51bWJlcixcbiAgICBJbmNvbWVSZWFzb25JRDogbnVtYmVyLCBwZXJzb25JZDogbnVtYmVyLCBiaWxsOiBCaWxsXG4gIH0pOiBPYnNlcnZhYmxlPFxuICAgIHsgcmVzdWx0OiBzdHJpbmcsIHN1Y2Nlc3M6IGJvb2xlYW4sIGRhdGE6IHsgRG9jTm86IG51bWJlciwgUmVzZXJ2ZUlEOiBudW1iZXIsIFRvYWxQcmljZTogbnVtYmVyIH0gfVxuICA+IHtcbiAgICBpdGVtLmJpbGwuY2hvaWNlZENhbGVuZGVyLmRheXM9W107XG4gICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnYmlsbCcsIEpTT04uc3RyaW5naWZ5KGl0ZW0uYmlsbCkpO1xuICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ3BlcnNvbklkJywgaXRlbS5wZXJzb25JZCk7XG5cbiAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdSZW50SXRlbUlEJywgaXRlbS5SZW50SXRlbUlEKTtcbiAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdUeXBlUmVzZXJ2ZTInLCBpdGVtLlR5cGVSZXNlcnZlMik7XG4gICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnSW5jb21lUmVhc29uSUQnLCBpdGVtLkluY29tZVJlYXNvbklEKTtcbiAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdmdW5jJywgJ3NhdmVyZXNlcnZhdGlvbicpO1xuICAgIGxldCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycygpLFxuICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICB9O1xuICAgIGh0dHBPcHRpb25zLmhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgaHR0cE9wdGlvbnMuaGVhZGVycy5hcHBlbmQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJyk7XG4gICAgaHR0cE9wdGlvbnMuaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8eyByZXN1bHQ6IHN0cmluZywgc3VjY2VzczogYm9vbGVhbiB9PlxuICAgICgnL2dvbGVzdGFuU2VydmljZScsIGh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUobWFwKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KVxuICAgICAgKTtcbiAgfVxufVxuIl19