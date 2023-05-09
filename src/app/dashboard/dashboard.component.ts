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
  totalInvoices!: number;
  totalPayed: number = 0;
  totalUnpayed: number = 0;

  // Get Invoice Data
  getInvoiceData(): void {
     this.invoiceService.getInvoiceData().subscribe(
      (response:invoices[]) =>{
      this.invoiceData = response;        
      this.totalInvoices = response.length;
      
      // Check if the invoice payment is true (paid)
      for (let i = 0; i< this.totalInvoices; i++) 
      {
        if(this.invoiceData[i].paid) {
          this.totalPayed+=1;
          console.log("Payed +1 ==>", this.invoiceData[i].paid);
        }
        else if(!this.invoiceData[i].paid) {
          this.totalUnpayed+=1;
        }
      }
    },
    (error: any) => {
      console.error(error);
    })
  }

}
