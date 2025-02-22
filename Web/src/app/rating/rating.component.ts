import { Component, Inject, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../model/recipe';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  stars: number[] = [1,2,3,4,5]
  selectedRating: number = 0;
  constructor(@Inject(MAT_DIALOG_DATA) public data: number,private route: ActivatedRoute,private api: ApiServiceService) { }


  ngOnInit() {
    
  }

  userId = Number(localStorage.getItem('userId'));
  rate(star: number){
    this.selectedRating = star
    this.api.storeRating(this.userId, star, this.data)
  }

}
