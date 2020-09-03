import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get('api/users');
  }

  sendMail() {
    return this.httpClient.get('api/mail');
  }

}
