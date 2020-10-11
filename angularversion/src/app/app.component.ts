import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularversion';
  recipes = [
    {
      id: 1,
      name: 'Ensopado de galinha'  
    },
    {
      id: 2,
      name: 'Risoto'
    },
    {
      id: 3,
      name: 'strogonoff'
    }
  ]

   handleNewRecipe() {
    var value = prompt('Digite a nova receita');

    if(value){
      this.recipes = [...this.recipes, {id: 4, name: value}];
    }
  }
}
