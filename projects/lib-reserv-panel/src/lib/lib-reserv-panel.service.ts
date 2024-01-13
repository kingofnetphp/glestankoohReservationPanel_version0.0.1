
import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpBackend, HttpParams,HttpHeaders } from '@angular/common/http';
import { map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CellCalenderReservation,Month,Calender } from './component-range-date-picker/cell-calender-reservation.model';

@Injectable({
  providedIn: 'root'
})
export class LibReservPanelService {
  constructor(
    private handler: HttpBackend,
    private http: HttpClient,
  ) {
   // this.http = new HttpClient(handler); /// to skip interceptors, becouse this service hits third backend provider
  }
  get(RentItemID: number, StartDate: string,  Act: string): Observable<Calender> {
    let params = new HttpParams();
    params = params.append('StartDate', StartDate);
    params = params.append('RentItemID', RentItemID);
    params=params.append('Act',Act);
    params=params.append('func','selectCalender');

    let httpOptions = {
      headers: new HttpHeaders(),
      params: params
    };
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    return this.http.get<Month[]>('/golestanService', httpOptions)
      .pipe(map((data: any) => {
        return data;
      })
      );
  }

}

