import { Component, Input, OnInit } from '@angular/core';

import { Recipes } from '../../models/Recipes';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent implements OnInit {

  @Input() Data:Recipes[];

  constructor() { }

  ngOnInit(): void {
  }

}
