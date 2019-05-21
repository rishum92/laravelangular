import { Component} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
	registrationForm: FormGroup;
  	
  	firstname:string="";
   	lastname:string="";
   	username:string="";
   	useremail:string="";
	userpassword:string="";
	mobilenumber:string="";
	usercity:string="";
   
 	constructor(private frmbuilder: FormBuilder, private http: HttpClient)
  { 
    this.registrationForm=frmbuilder.group({

    firstname:new FormControl(),
    lastname:new FormControl(),
    username:new FormControl(),
    useremail:new FormControl(),
    userpassword:new FormControl(),
    mobilenumber:new FormControl(),
    usercity:new FormControl(),
    });
  }  

  PostData(registrationForm:any)
  {
    this.firstname = registrationForm.controls.firstname.value;
    this.lastname  = registrationForm.controls.lastname.value;
    this.username  = registrationForm.controls.username.value;
    this.useremail = registrationForm.controls.useremail.value;
    this.userpassword = registrationForm.controls.userpassword.value;
    this.mobilenumber = registrationForm.controls.mobilenumber.value;
    this.usercity = registrationForm.controls.usercity.value;
   
   	console.log(this.firstname)
    
    return this.http.post<any>("http://localhost:8000/insert", {params:{firstname: this.firstname,lastname: this.lastname,username: this.username, useremail: this.useremail,userpassword: this.userpassword,mobilenumber: this.mobilenumber,usercity: this.usercity}}).subscribe();  
  }
}
