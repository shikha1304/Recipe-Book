import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RecipeCatalogComponent } from './recipe-catalog/recipe-catalog.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { CollectionsComponent } from './collections/collections.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeCardsComponent } from './recipe-cards/recipe-cards.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { AddInsDialogComponent } from './add-ins-dialog/add-ins-dialog.component';
import { AddIngDialogComponent } from './add-ing-dialog/add-ing-dialog.component';
import { EditInfoDialogComponent } from './edit-info-dialog/edit-info-dialog.component';
import { RatingComponent } from './rating/rating.component';

const routes: Routes = [
 {
   path: '',
   component: HomeComponent 
 },
 {
  path: 'registration',
  component: UserRegistrationComponent 
},
{
  path: 'login',
  component: UserLoginComponent
},
{
  path: 'recipe/catalog',
  component: RecipeCatalogComponent
},
{
  path: 'user/profile',
  component: UserProfileComponent
},
{
  path: 'create/new',
  component: CreateRecipeComponent
},
{
  path: 'recipe/favorites',
  component: FavoritesComponent
},
{
  path: 'recipe/collections',
  component: CollectionsComponent
},
{
  path: 'cart/shopping-list',
  component: ShoppingListComponent
},
{
  path: 'recipe/card',
  component: RecipeCardsComponent
},
{
  path: 'recipe/card/edit',
  component: EditRecipeComponent
},
{
  path: 'recipe/card/edit/add/ins',
  component: AddInsDialogComponent
},
{
  path: 'recipe/card/edit/add/ing',
  component: AddIngDialogComponent
},
{
  path: 'recipe/card/edit/info',
  component: EditInfoDialogComponent
}, 
{
  path: 'recipe/rate',
  component: RatingComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
