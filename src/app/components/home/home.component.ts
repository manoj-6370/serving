import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EmailService } from '../../service/email.service';
import { response } from 'express';
import { error } from 'console';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
data={
  to:"",
  subject:"",
  message:""
}

constructor(private email:EmailService,private snack:MatSnackBar){}
doSubmitForm(){
  console.log("try to submit form...");
  console.log("Data = ",this.data);

  if(this.data.to==''||this.data.subject==''||this.data.message=='')
{
  this.snack.open("fields can not be empty!!","ok");
  return;
}

  this.email.sendEmail(this.data).subscribe(
    response => {
     console.log('email send successfully',response);
    },
    error => {
      console.log(error);

    }
  );


}
}
