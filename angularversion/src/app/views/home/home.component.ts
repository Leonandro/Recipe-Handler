import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { async } from '@angular/core/testing';
import {db} from "../../../firebase.js";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}
  
  recipes = [];


  async  renderData() {
    const snapshot = await db.collection("recipes").get();
      const loadingData = [];
      snapshot.forEach((doc) => {
        loadingData.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      this.recipes = loadingData;
  };

  async handleNewRecipe() {
    var value = prompt('Digite a nova receita');

    if(value){
      await db.collection("recipes").add({
        name: value,
        calorias: 0
      })

      this.renderData();
      //this.recipes = [...this.recipes, {id: 4, name: value}];
    }
  }

  goToAddForm() {
    this.router.navigate(['/add-recipe-form'])
  }


  ngOnInit(): void {
    this.renderData();
  }

}
