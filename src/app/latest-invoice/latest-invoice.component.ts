import { Component } from '@angular/core';
import { invoices } from 'src/interfaces/invoices';
import { InvoiceService } from '../services/invoice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-latest-invoice',
  templateUrl: './latest-invoice.component.html',
  styleUrls: ['./latest-invoice.component.scss']
})
export class LatestInvoiceComponent {
  constructor(private invoiceService : InvoiceService, private router : Router, private activatedRoute : ActivatedRoute) { }


  ngOnInit(): void {
   this.getInvoiceData();
  }
  
  invoiceData!: invoices[];
  id!: any;
  userId!: any;
  beschrijving!: any;
  amount!: any;
  paid!: any;

  // Get Invoice Data
  getInvoiceData(): void {
     this.invoiceService.getInvoiceData().subscribe(
      (response:invoices[]) =>{
      this.invoiceData = response; 
    },
    (error: any) => {
      console.error(error);
    })
  }


}
