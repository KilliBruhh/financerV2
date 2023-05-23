import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceService } from '../services/invoice.service';
import { count } from 'rxjs';
import { invoices } from 'src/interfaces/invoices';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private invoiceService: InvoiceService) { }

  error = false;
  succes = false;

  invoiceData =
  {
    userId: 1,
    beschrijving: '',
    amount: 0,
    paid: false,
  }
  
  submitInvoiceForm() {
    this.invoiceService.postInvoiceData(this.invoiceData).subscribe(
      response => {
        console.log("ADDED invoice data: ", response);
        this.succes = true;
        setTimeout( () => {
          location.reload();
        }, 2000);

      }, error => {
        console.log("ERROR Adding data: ", error);
      }
    )
  }

  
  ngOnInit(): void {}
  
}
