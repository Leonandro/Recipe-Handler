import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import {db} from '../firebase.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularversion';
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

  ngOnInit(): void {
    this.renderData();
  }
}
