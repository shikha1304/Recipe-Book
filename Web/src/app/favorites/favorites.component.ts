import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites: Recipe[]=[{
    id: 0,
    title: '',
    categoryId: '',
    ingredients: [{
        quantity: 0,
        name: '',
        ingredient: ''
    }
    ],
    instructions: [''],
    nutritional_information: {
      calories: '',
        protein: '',
        carbohydrates: '',
        fat: ''
    },
    img: '',
    creationDate: undefined!,
    creatorId: 0
  }]

  constructor(private http: HttpClient, private api: ApiServiceService, private router: Router) { }

  ngOnInit() {
    this.http.get<any>('http://localhost:5999/favorites').subscribe(res=>{
      this.favorites = res
    })

    if(this.favorites === null) this.Favs = true

    console.log(this.Favs)
  }

  Favs = false;

  onCardClick(recipe: Recipe){
    this.router.navigate(['/recipe/card'], { state: { recipe }})
  }

  onDislike(recipeId: number){
    this.api.removeFavorite(recipeId).subscribe(()=>{
      // console.log('Recipe removed from favorites')
      alert('Recipe removed from favorites');
      location.reload()
    })
  }
}
