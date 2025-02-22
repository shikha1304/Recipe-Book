import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { User } from '../model/user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  @ViewChild('register', {static: false}) userData: NgForm | any;

  now = new Date()

  user: User = {
    name: '',
    email: '',
    password: '',
    registrationDate: undefined!,
    id:0
  }

  constructor(private http:HttpClient, private api: ApiServiceService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.user.name = this.userData.value.userName;
    this.user.email = this.userData.value.email;
    this.user.password = this.userData.value.password;
    this.user.registrationDate = this.now;
    console.log(this.user);
    if(!this.user.name || !this.user.email || !this.user.password){
      window.alert("Please fill all the required fields");
      return;
    }
    this.api.register(this.user).subscribe(
      ()=>{
        alert("New User Registered Successfully!!");
        this.router.navigate(['login']);
      }
    )

    this.userData.reset();
  }
}
