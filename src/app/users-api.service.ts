import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  readonly usersAPIUrl = "https://localhost:7225/api";
  private baseUrl = "https://localhost:7225/api/Users";

  constructor(private http:HttpClient) { }

  addUsers(data:any){
    return this.http.post(this.usersAPIUrl + '/Users', data);
  }

  checkUsers(data:string) {
    const httpOptions = { headers: ({'phoneNumber': 'application/json'})}
    return this.http.post(this.baseUrl + '/authenticate', JSON.stringify(data), httpOptions);
  }
}