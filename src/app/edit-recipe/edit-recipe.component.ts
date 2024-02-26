import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { List } from '../model/list';
import { Recipe } from '../model/recipe';
import { MatDialog } from '@angular/material/dialog';
import { EditInfoDialogComponent } from '../edit-info-dialog/edit-info-dialog.component';
import { AddIngDialogComponent } from '../add-ing-dialog/add-ing-dialog.component';
import { AddInsDialogComponent } from '../add-ins-dialog/add-ins-dialog.component';
import { MatIcon } from '@angular/material/icon';
MatIcon
@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

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

  

  list: List = {
    item: '',
    quantity: undefined!,
    userId: undefined!,
    id:undefined!
  }
  
  editInfo(recipe: Recipe){
    this.dialog.open(EditInfoDialogComponent, {
      width: '40%',
      data: recipe
    });
  }

  addIng(recipe: Recipe){
    this.dialog.open(AddIngDialogComponent, {
      width: '40%',
      data: recipe
    });
  }

  addIns(recipe: Recipe){
    this.dialog.open(AddInsDialogComponent, {
      width: '30%',
      data: recipe
    });
  }

  removeIng(index: number){
    this.recipe.ingredients.splice(index, 1);
    console.log(index)
    this.api.updateCollection(this.recipe);
  }

  

  
}
