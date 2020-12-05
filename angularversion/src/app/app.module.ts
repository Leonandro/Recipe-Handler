import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { SearchRecipeComponent } from './components/search-recipe/search-recipe.component';
import { ListRecipesComponent } from './components/list-recipes/list-recipes.component';
import { HomeComponent } from './views/home/home.component'
import { AddRecipeFormComponent } from './views/add-recipe-form/add-recipe-form.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddRecipeComponent,
    SearchRecipeComponent,
    ListRecipesComponent,
    HomeComponent,
    AddRecipeFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [
    HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
