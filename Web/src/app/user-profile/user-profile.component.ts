import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private http: HttpClient) { }

  name: string = ""
  ngOnInit() {

    this.name = localStorage.getItem('userName')!
    this.http.get<any>('http://localhost:3000/users').subscribe(res=>{
      this.user = res.find((a: any)=>{
        return a.name === this.name;
      });
    })

  }

  user: User = {
    name: '',
    email: '',
    password: '',
    registrationDate: undefined!,
    id:undefined!
  }

}
