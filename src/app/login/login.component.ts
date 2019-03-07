import { Component } from '@angular/core';
import {FormBuilder , FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  rForm:FormGroup;
  post:any;
  description:string ='';
  name:string = '';


  constructor(private fb: FormBuilder) { 
  this.rForm = fb.group({
   'name': [null, Validators.required],
   'description':[null,Validators.compose([Validators.required])]
  })
  
}
}
