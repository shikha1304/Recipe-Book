import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { Recipe } from '../model/recipe';
import { List } from '../model/list';
import {MatIconModule} from '@angular/material/icon'
import { MatDialog } from '@angular/material/dialog';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-recipe-cards',
  templateUrl: './recipe-cards.component.html',
  styleUrls: ['./recipe-cards.component.css']
})
export class RecipeCardsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private api: ApiServiceService, private router: Router, private dialog: MatDialog) {}
 
  recipe: Recipe={
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
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let recipe = history.state.recipe as Recipe;
      this.recipe = recipe
    });
  }

  collectedRecipe: Recipe ={
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
  }

  onEdit(recipe: Recipe){
    this.api.addCollection(recipe).subscribe();
    this.router.navigate(['/recipe/card/edit'], { state: { recipe }});
  }

  list: List = {
    item: '',
    quantity: undefined!,
    userId: undefined!,
    id:undefined!
  }
  addItem(item: string){
    console.log(item)
    this.list.item = item
    this.list.quantity = 1
    this.list.userId = Number(localStorage.getItem('userId'))
    
    this.api.addItem(this.list).subscribe(()=>{
      console.log(this.list)
      alert("Ingredient added to shopping cart")
    })
    console.log(this.list)
  }

  onRate(id: number){
    this.dialog.open(RatingComponent, {
      width: '40%',
      height: '30%',
      data: id
    });
  }

}
