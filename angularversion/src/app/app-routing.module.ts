import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AddRecipeFormComponent } from './views/add-recipe-form/add-recipe-form.component'


const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'add-recipe-form',
        component: AddRecipeFormComponent
    }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }