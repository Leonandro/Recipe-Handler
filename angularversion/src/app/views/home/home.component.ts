import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipesHookService } from '../../components/recipes-hook.service'
import { async } from '@angular/core/testing';
import {db} from "../../../firebase.js";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, public recipeService: RecipesHookService) {}
  

  goToAddForm() {
    this.router.navigate(['/add-recipe-form'])
  }


  ngOnInit(): void {
    this.recipeService.renderData();
  }

}
