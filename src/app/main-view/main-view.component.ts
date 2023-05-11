import { Component } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
})
export class MainViewComponent {
  data: any;
  venues: any[] = [];
  response: any;
  receivedDate: string = '';
  isUserSignedIn = true;

  constructor(
    private dataService: DataServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.dataService.getData().subscribe((response) => {
      this.data = response;
      this.venues = this.data.record.venues;
    });
  }

  onBtnClick() {
    this.dataService.getResponse().subscribe((response) => {
      this.response = response;
      this.receivedDate = this.response.record.expiresAt;
      this.dataService.setDate(this.receivedDate);
      if (this.response != null) {
        this.router.navigateByUrl('/paymentSuccessful');
      }
    });
  }
}
