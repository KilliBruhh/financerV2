import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../services/invoice.service';
import { ActivatedRoute } from '@angular/router';
import { invoices } from 'src/interfaces/invoices';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.scss']
})
export class EditInvoiceComponent implements OnInit {

  constructor(private invoiceService: InvoiceService, private activeRoute: ActivatedRoute) { }

  invoiceId!: any;

  ngOnInit() {
    // Get id parameter
    this.activeRoute.params.subscribe(params => {
      this.invoiceId = params['id'];
    });

    // fill fields with current invoice data
    this.fetchInvoiceData(this.invoiceId);
  }

  error = false;
  succes = false;

  invoiceData =
  {
    userId: 1,
    beschrijving: '',
    amount: 0,
    paid: false,
  }

  // fetch current data and put it in the fields
  fetchInvoiceData(id: any) {
    this.invoiceService.getInvoiceDataById(id).subscribe(
      (response: any) => {
        this.invoiceData.beschrijving = response.beschrijving;
        this.invoiceData.amount = response.amount;
      }, (error) => {
        console.error('Error getting data');
      }
    );
  }

  // Edit the submitted changes
  submitEditForm() {
    this.invoiceService.putInvoiceData(this.invoiceId, this.invoiceData).subscribe(
      () => {
        console.log("Invoice Has been Edited");
        this.succes = true;
        // After 2 seconds page reloads ands put the new dadta in the fields
        setTimeout( () => {
          location.reload();
        }, 2000);

      }, (error) => {
        console.error("ERROR editing invoice");
        this.error = true;       
      }
    );
  }


}
