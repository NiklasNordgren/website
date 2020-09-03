import { Component, OnInit } from '@angular/core';
import { MailService } from '../service/mail.service';
import { FormControl, Validators, FormGroup, Form, FormGroupDirective } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  textFieldFormControl = new FormControl('', [
    Validators.required
  ]);

  contactForm = new FormGroup({
    email: this.emailFormControl,
    message: this.textFieldFormControl
  });

  constructor(
    private mailService: MailService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  sendMail(e: Event, formDirective: FormGroupDirective): void {

    this.mailService.sendMail(e).then(
      success => {
        this.openSuccessSnackBar();
      },
      error => {
        this.openFailureSnackBar();
      });

    formDirective.resetForm();
    this.contactForm.reset();
  }

  resetForm(formDirective: FormGroupDirective): void {
    formDirective.resetForm();
    this.contactForm.reset();
  }

  openSuccessSnackBar(): void {
    this._snackBar.open("Email was sent successfully.", "Close", {
      duration: 5000,
    });
  }

  openFailureSnackBar(): void {
    this._snackBar.open("An error occurred, please email info@niklasnordgren.com if the problem persists.", "Close", {
      duration: 5000,
    });
  }

}