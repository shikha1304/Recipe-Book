import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFilterPipe } from './custom-filter-pipe.pipe';
import { HighlightDirective } from './highlight.directive';
import { Directive, ElementRef, HostListener } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { CollectionsComponent } from './collections/collections.component';
import { RecipeCatalogComponent } from './recipe-catalog/recipe-catalog.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeCardsComponent } from './recipe-cards/recipe-cards.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { FilterComponent } from './filter/filter.component';
import {MatIconModule} from '@angular/material/icon';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { AddIngDialogComponent } from './add-ing-dialog/add-ing-dialog.component';
import { AddInsDialogComponent } from './add-ins-dialog/add-ins-dialog.component';
import { EditInfoDialogComponent } from './edit-info-dialog/edit-info-dialog.component';
import { RatingComponent } from './rating/rating.component'

@NgModule({
  declarations: [
    AppComponent,
    CustomFilterPipe,
    HighlightDirective,
    HomeComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    NavbarComponent,
    CreateRecipeComponent,
    FavoritesComponent,
    CollectionsComponent,
    RecipeCatalogComponent,
    UserProfileComponent,
    ShoppingListComponent,
    RecipeCardsComponent,
    FilterComponent,
    EditRecipeComponent,
    AddIngDialogComponent,
    AddInsDialogComponent,
    EditInfoDialogComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule ,
    MatMenuModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
