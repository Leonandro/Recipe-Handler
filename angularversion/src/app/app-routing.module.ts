import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AddRecipeFormComponent } from './views/add-recipe-form/add-recipe-form.component'
import { SearchRecipePageComponent } from './views/search-recipe-page/search-recipe-page.component'
import { ViewRecipeComponent } from './views/view-recipe/view-recipe.component'


const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'add-recipe-form',
        component: AddRecipeFormComponent
    },
    {
        path: 'search-recipe-page',
        component: SearchRecipePageComponent
    },
    {
        path: 'view-recipe/:name',
        component: ViewRecipeComponent
    }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }