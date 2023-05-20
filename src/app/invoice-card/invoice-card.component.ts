import { Component } from '@angular/core';
import { InvoiceService } from '../services/invoice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { invoices } from 'src/interfaces/invoices';

@Component({
  selector: 'app-invoice-card',
  templateUrl: './invoice-card.component.html',
  styleUrls: ['./invoice-card.component.scss']
})
export class InvoiceCardComponent {
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

  // Deletes the Invoice

  // Go to the edit page
}
