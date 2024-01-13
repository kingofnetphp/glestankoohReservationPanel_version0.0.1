import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class LibReservPanelService {
    constructor(handler, http) {
        this.handler = handler;
        this.http = http;
        // this.http = new HttpClient(handler); /// to skip interceptors, becouse this service hits third backend provider
    }
    get(RentItemID, StartDate, Act) {
        let params = new HttpParams();
        params = params.append('StartDate', StartDate);
        params = params.append('RentItemID', RentItemID);
        params = params.append('Act', Act);
        params = params.append('func', 'selectCalender');
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
LibReservPanelService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LibReservPanelService, deps: [{ token: i1.HttpBackend }, { token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
LibReservPanelService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LibReservPanelService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LibReservPanelService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpBackend }, { type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLXJlc2Vydi1wYW5lbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbGliLXJlc2Vydi1wYW5lbC9zcmMvbGliL2xpYi1yZXNlcnYtcGFuZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBMkIsVUFBVSxFQUFDLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBT3BDLE1BQU0sT0FBTyxxQkFBcUI7SUFDaEMsWUFDVSxPQUFvQixFQUNwQixJQUFnQjtRQURoQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBQ3BCLFNBQUksR0FBSixJQUFJLENBQVk7UUFFekIsa0hBQWtIO0lBQ25ILENBQUM7SUFDRCxHQUFHLENBQUMsVUFBa0IsRUFBRSxTQUFpQixFQUFHLEdBQVc7UUFDckQsSUFBSSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUM5QixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDL0MsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sR0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxNQUFNLEdBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUU5QyxJQUFJLFdBQVcsR0FBRztZQUNoQixPQUFPLEVBQUUsSUFBSSxXQUFXLEVBQUU7WUFDMUIsTUFBTSxFQUFFLE1BQU07U0FDZixDQUFDO1FBQ0YsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7UUFDaEYsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0QsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDL0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVSxrQkFBa0IsRUFBRSxXQUFXLENBQUM7YUFDM0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO1lBQ3RCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQ0QsQ0FBQztJQUNOLENBQUM7O2tIQTFCVSxxQkFBcUI7c0hBQXJCLHFCQUFxQixjQUZwQixNQUFNOzJGQUVQLHFCQUFxQjtrQkFIakMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEluamVjdGFibGUsSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwQmFja2VuZCwgSHR0cFBhcmFtcyxIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IG1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2VsbENhbGVuZGVyUmVzZXJ2YXRpb24sTW9udGgsQ2FsZW5kZXIgfSBmcm9tICcuL2NvbXBvbmVudC1yYW5nZS1kYXRlLXBpY2tlci9jZWxsLWNhbGVuZGVyLXJlc2VydmF0aW9uLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTGliUmVzZXJ2UGFuZWxTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBoYW5kbGVyOiBIdHRwQmFja2VuZCxcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICkge1xuICAgLy8gdGhpcy5odHRwID0gbmV3IEh0dHBDbGllbnQoaGFuZGxlcik7IC8vLyB0byBza2lwIGludGVyY2VwdG9ycywgYmVjb3VzZSB0aGlzIHNlcnZpY2UgaGl0cyB0aGlyZCBiYWNrZW5kIHByb3ZpZGVyXG4gIH1cbiAgZ2V0KFJlbnRJdGVtSUQ6IG51bWJlciwgU3RhcnREYXRlOiBzdHJpbmcsICBBY3Q6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FsZW5kZXI+IHtcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcbiAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdTdGFydERhdGUnLCBTdGFydERhdGUpO1xuICAgIHBhcmFtcyA9IHBhcmFtcy5hcHBlbmQoJ1JlbnRJdGVtSUQnLCBSZW50SXRlbUlEKTtcbiAgICBwYXJhbXM9cGFyYW1zLmFwcGVuZCgnQWN0JyxBY3QpO1xuICAgIHBhcmFtcz1wYXJhbXMuYXBwZW5kKCdmdW5jJywnc2VsZWN0Q2FsZW5kZXInKTtcblxuICAgIGxldCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycygpLFxuICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICB9O1xuICAgIGh0dHBPcHRpb25zLmhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgaHR0cE9wdGlvbnMuaGVhZGVycy5hcHBlbmQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJyk7XG4gICAgaHR0cE9wdGlvbnMuaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8TW9udGhbXT4oJy9nb2xlc3RhblNlcnZpY2UnLCBodHRwT3B0aW9ucylcbiAgICAgIC5waXBlKG1hcCgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxufVxuXG4iXX0=