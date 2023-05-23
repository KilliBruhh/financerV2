import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { invoices } from 'src/interfaces/invoices';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }

  // Invoices Services

  // Get invoice data
  getInvoiceData()   {
    const url = "http://localhost:3000/invoices";
    return this.http.get<invoices[]>(url); 
 }
 // get invoice data by Id
 getInvoiceDataById(id: any) {
   const url = "http://localhost:3000/invoices/" + id;
   return this.http.get<invoices[]>(url); 
 }
 // Add data to DB
 postInvoiceData(data: any) {
    const url = "http://localhost:3000/invoices";
    return this.http.post(`${url}`, data);
 }

 // Delete data from DB
 deleteInvoiceData(id: any): Observable<invoices> {
    const url = 'http://localhost:3000/invoices/'+id;
    return this.http.delete<invoices>(url);
 }

 // Edit data from DB
 putInvoiceData(id: any, data: any) {
   const url = 'http://localhost:3000/invoices/'+id;
   return this.http.put(url, data);
}
}
