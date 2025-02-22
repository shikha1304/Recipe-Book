import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    return !!localStorage.getItem('userName');
  }
  onLogOut(){
    localStorage.removeItem("userName");
    this.router.navigate(["/signup"]);
  }
}
