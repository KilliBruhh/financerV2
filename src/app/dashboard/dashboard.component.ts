import { Component } from '@angular/core';
import { InvoiceService } from '../services/invoice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { invoices } from 'src/interfaces/invoices';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
 
  constructor(private invoiceService : InvoiceService, private router : Router, private activatedRoute : ActivatedRoute) { }


  ngOnInit(): void {
   this.getInvoiceData();
  }
  
  invoiceData!: invoices[];
  totalInvoices: number = 10;

  // Get Invoice Data
  getInvoiceData(): void {
     this.invoiceService.getInvoiceData().subscribe(
      (response:invoices[]) =>{
      this.invoiceData = response;        
      this.totalInvoices = response.length;
      
      // Check if the invoice payment is true (paid)
      for (let i = 0; i< this.totalInvoices; i++) 
      {

      }
    },
    (error: any) => {
      console.error(error);
    })
  }

}
