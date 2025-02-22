import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { Recipe } from '../model/recipe';
import { Category } from '../model/category';
import { MatDialog } from '@angular/material/dialog';
import { CreateRecipeComponent } from '../create-recipe/create-recipe.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-recipe-catalog',
  templateUrl: './recipe-catalog.component.html',
  styleUrls: ['./recipe-catalog.component.css']
})
export class RecipeCatalogComponent implements OnInit {

  recipes: Recipe[]=[{
    id: 0,
    title: '',
    categoryId: '',
    ingredients: [{
        quantity: 0,
        name: '',
        ingredient: ''
    }],
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

  filteredList: Recipe[]=[{
    id: 0,
    title: '',
    categoryId: '',
    ingredients: [{
        quantity: 0,
        name: '',
        ingredient: ''
    }],
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

  constructor(private http: HttpClient, public dialog: MatDialog,private api: ApiServiceService, private router:Router) {
      // this.recipeList = this.recipes;
   }

  ngOnInit() {
    this.http.get<any>('http://localhost:5999/recipes').subscribe(res=>{
      this.recipes = res
    })
    
  }

  condition = false
  filterResultsByName(text: string) {
    if (!text) {
      this.filteredList = this.recipes;
    }
    
    this.filteredList = this.recipes.filter(
      data => data.title.toLowerCase() === text.toLowerCase()
    ); 
    this.condition=true
  }

  cat: string = ""

  filterResultsByCat() {
    if (!this.cat) {
      console.log("works")
      this.filteredList = this.recipes;
    }
  
    this.filteredList = this.recipes.filter(
      data => data.categoryId.toLowerCase() === this.cat.toLowerCase()
    );
    this.condition = true
  }

  onCreate(){
    this.dialog.open(CreateRecipeComponent, {
      width: '80%',
      maxWidth: '100%'
    });
  }

}
