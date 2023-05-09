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
  getInvoiceData()   {
    const url = "http://localhost:3000/invoices";
    return this.http.get<invoices[]>(url); 
 }

}