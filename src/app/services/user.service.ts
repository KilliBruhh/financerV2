import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { invoices } from 'src/interfaces/invoices';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  // Users Services

  // get data from db
  getUserData() {
    const url = "http://localhost:3000/users";
    return this.http.get<invoices[]>(url);
  }
  // Add data to DB
  postUserData(data: any) {
    const url = "http://localhost:3000/users";
    return this.http.post(`${url}`,data);
  }  

}
