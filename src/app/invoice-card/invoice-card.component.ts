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

  showModal: boolean = false;
  invoiceIdOnClick!: any;

  // Get Invoice Data
  getInvoiceData(): void {
     this.invoiceService.getInvoiceData().subscribe(
      (response:invoices[]) =>{
      this.invoiceData = response; 
    }, (error: any) => {
      console.error(error);
    })
  }

  // Deletes the Invoice
  openModal(id: any) {
    this.showModal = true;
    this.invoiceIdOnClick = id;
  }
  closeModal() {
    this.showModal = false;
  }
  confirmDelete() {
    console.log(this.invoiceIdOnClick);
    this.invoiceService.deleteInvoiceData(this.invoiceIdOnClick).subscribe(
      () => {
        console.log('Invoice Deleted');
        this.closeModal();
        location.reload();
      }, (error: any) => {
        console.error('Error while trying to delete invoice');      
      }
    );
  }

  // Go to the edit page
}
