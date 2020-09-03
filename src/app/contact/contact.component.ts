import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { MailService } from '../service/mail.service';
import { FormControl, Validators } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(
    private mailService: MailService,
    private _ngZone: NgZone
    ) { }

  ngOnInit(): void {
  }

  sendMail(e) {
    //this.mailService.sendMail(e);
    console.log("send email");
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

}
