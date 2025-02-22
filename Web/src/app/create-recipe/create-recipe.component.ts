import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import {MatDialogModule} from '@angular/material/dialog';
import { Recipe } from '../model/recipe';


@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

  recipeForm!: FormGroup;
  
 
  constructor(private fb: FormBuilder, private api: ApiServiceService, private dialogRef: MatDialogRef<CreateRecipeComponent>) { }
 
  ngOnInit(): void {
    this.initForm();
  }
 
  initForm() {
    // Initialize the form with FormBuilder
this.recipeForm = this.fb.group({
      title: ['', Validators.required],
      categoryId: [null, Validators.required],
      ingredients: this.fb.array([]),
      instructions: this.fb.array([]),
nutritional_information: this.fb.group({
        calories: ['', Validators.required],
        protein: ['', Validators.required],
        carbohydrates: ['', Validators.required],
        fat: ['', Validators.required],
      }),
      img: ['', Validators.required],
    });
  }
 
   get ingredients(){
    return this.recipeForm.get('ingredients') as FormArray;
   }

   get instructions(){
    return this.recipeForm.get('instructions') as FormArray;
   }
  // Helper method to add ingredient controls to the form
  addIngredient() {
    this.ingredients.push(
      this.fb.group({
        quantity: [null, Validators.required],
        name: ['', Validators.required],
        ingredient: ['']
    })
    );
  }

  removeIngredient(index: number){
    this.ingredients.removeAt(index);
  }
 
  // Helper method to add instruction controls to the form
  addInstruction() {
   this.instructions.push(this.fb.control('', Validators.required));
  }
 
  removeInstruction(index: number){
    this.instructions.removeAt(index);
  }

  recipe: Recipe = {
    id: undefined!,
    title: '',
    categoryId: '',
    ingredients: [{
        quantity: 0,
        name: '',
        ingredient: ''
    }],
    instructions: [],
    nutritional_information: {
      calories: '',
        protein: '',
        carbohydrates: '',
        fat: ''
    },
    img: '',
    creationDate: undefined!,
    creatorId: undefined!
  }

  now = new Date()
  onSubmit() {
    if (this.recipeForm.valid) {
      console.log(this.recipeForm.value)
      this.recipe.title = this.recipeForm.value.title;
      this.recipe.categoryId = this.recipeForm.value.categoryId;
      this.recipe.ingredients = this.recipeForm.value.ingredients;
      this.recipe.instructions = this.recipeForm.value.instructions;
      this.recipe.nutritional_information = this.recipeForm.value.nutritional_information;
      this.recipe.img = this.recipeForm.value.img;
      
      this.recipe.creationDate = this.now ;
      this.recipe.creatorId = Number(localStorage.getItem('userId'));

      console.log(this.recipe)
      this.api.addRecipe(this.recipe).subscribe(()=>{
      });
      this.dialogRef.close([]);
      alert("Recipe Added!!")
      location.reload()
    }
  }
}