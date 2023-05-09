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

  constructor() { }

  ngOnInit(): void { 
  }
  
}
