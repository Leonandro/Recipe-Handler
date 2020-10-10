import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { SearchRecipeComponent } from './components/search-recipe/search-recipe.component';
import { ListRecipesComponent } from './components/list-recipes/list-recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddRecipeComponent,
    SearchRecipeComponent,
    ListRecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
