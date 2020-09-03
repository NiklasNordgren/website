import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private httpClient: HttpClient) { }

  sendMail(e: Event): Promise<EmailJSResponseStatus> {
    return emailjs.sendForm('service_igekokj', 'template_zorvgsd', e.target as HTMLFormElement, 'user_HZBjFkIhL2mMxNdH8V2Og');
  }

}
