import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CreateRecipeComponent } from '../create-recipe/create-recipe.component';
import { Recipe } from '../model/recipe';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ApiServiceService } from '../api-service.service';
import {MatIconModule} from '@angular/material/icon'
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input()
  item!: any[];
  constructor(private http: HttpClient, private router: Router, private dialog: MatDialog, private api: ApiServiceService) { }

  ngOnInit() {
  }

  clicked = false
  onCardClick(recipe: Recipe){
    this.router.navigate(['/recipe/card'], { state: { recipe }})
  }

  liked = false
  onLike(recipe: Recipe){
    this.api.addFavorite(recipe).subscribe(
      ()=>{
        alert('Recipe Added to Favorites');
      })
      
    this.liked = true;
  }

  onSave(recipe: Recipe){
    this.api.addCollection(recipe).subscribe(
      ()=>{
        alert('Recipe Added in Collections');
      }
    )
    // this.liked = true;
  }

  // ratingList : 
  // this.http.get('http://localhost:3000/rating').subscribe((res)=>{
    
  // })
}


