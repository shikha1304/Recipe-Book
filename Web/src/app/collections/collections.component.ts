import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { Recipe } from '../model/recipe';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  collections: Recipe[]=[{
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
    this.http.get<any>('http://localhost:5999/collections').subscribe(res=>{
      this.collections = res
    })

    if(this.collections === null) this.Favs = true

    console.log(this.Favs)
  }

  Favs = false;

  onCardClick(recipe: Recipe){
    this.router.navigate(['/recipe/card'], { state: { recipe }})
  }

  onClick(recipeId: number){
    this.api.removeCollection(recipeId).subscribe(()=>{
      // console.log('Recipe removed from favorites')
      alert('Recipe removed from your Collections');
      location.reload()
    })
  }

}
