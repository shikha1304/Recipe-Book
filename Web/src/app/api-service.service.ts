import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/user';
import { Recipe } from './model/recipe';
import { List } from './model/list';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) {

   }

  register(data: User){
    return this.http.post('http://localhost:3000/users', data);
  }

  addFavorite(recipe: Recipe){
    return this.http.post('http://localhost:5999/favorites', recipe);
  }

  removeFavorite(recipeId: number){
    return this.http.delete('http://localhost:5999/favorites/'+recipeId);
  }

  addCollection(recipe: Recipe){
    return this.http.post('http://localhost:5999/collections', recipe);
  }

  removeCollection(id: number){
    return this.http.delete('http://localhost:5999/collections/'+id);
  }

  addItem(list: List){
    return this.http.post('http://localhost:3000/list', list);
  }

  addRecipe(recipe: Recipe){
    return this.http.post('http://localhost:5999/recipes', recipe);
  }

  removeItem(itemId: number){
    return this.http.delete('http://localhost:3000/list/'+itemId);
  }

  updateItem(item: List){
    this.http.put<List>('http://localhost:3000/list/' + item.id, item);
  }

  updateCollection(recipe: Recipe){
    this.http.put<Recipe>('http://localhost:5999/collections/' + recipe.id , recipe);
  }
  
  storeRating(userId: number, rating: number, recipeId: number){
    const data = {userId, rating, recipeId};
    this.http.post('http://localhost:3000/rating', data).subscribe(res => {
      console.log('Thankyou for Rating!!!')
    })
  }
}
