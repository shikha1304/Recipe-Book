import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  @ViewChild('login', {static:false}) loginData: NgForm | any

  constructor(private http: HttpClient, private api: ApiServiceService, private router:Router) { }

  ngOnInit() {
  }

  onLogin(){
    this.http.get<any>('http://localhost:3000/users').subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginData.value.email && a.password === this.loginData.value.password
      });

      if(user){
        alert('You are successfully logged in!');
        this.loginData.reset();
        this.router.navigate(['']);
        localStorage.setItem('userName', user.name);
        localStorage.setItem('userId', user.id.toString());
      } else{
        alert('User Not Found');
        this.router.navigate(['/login']);
      }
    }, err=>{
      alert('Something went Wrong')
    })
  }
}
