import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Recipes } from '../../models/Recipes';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent implements OnInit {

  @Input() Data:Recipes[];

  constructor(private router: Router) { }

  goToSearch(recipeName) {
    this.router.navigate(['/view-recipe', recipeName])
  }

  ngOnInit(): void {
  }

}
