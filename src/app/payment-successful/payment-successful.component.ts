import { Component, Input } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-payment-successful',
  templateUrl: './payment-successful.component.html',
  styleUrls: ['./payment-successful.component.css'],
})
export class PaymentSuccessfulComponent {
  qrCode: string;
  date: string = '';

  constructor(private dataService: DataServiceService) {
    this.qrCode = 'google.com';
  }

  ngOnInit() {}
}
