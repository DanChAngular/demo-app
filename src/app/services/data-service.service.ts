import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private venuesUrl = 'https://api.jsonbin.io/v3/b/631aee46a1610e63862444c0';
  private header =
    '$2b$10$5eRbA9CLdvKK/tsB5BCKle8W9Hi1sAkzEUwFpobWnEbg8bPiY2BK6';
  private responseUrl = 'https://api.jsonbin.io/v3/b/6311b2fde13e6063dc979a31';
  date: string = '';

  constructor(private httpClient: HttpClient) {}

  getData() {
    let header = new HttpHeaders();
    header = header.set('X-Master-Key', this.header);
    return this.httpClient.get(this.venuesUrl, { headers: header });
  }

  getResponse() {
    let header = new HttpHeaders();
    header = header.set('X-Master-Key', this.header);
    return this.httpClient.get(this.responseUrl, { headers: header });
  }

  setDate(date: string) {
    this.date = date;
  }
}
