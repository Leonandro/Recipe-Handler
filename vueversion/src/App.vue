<template>
  <div id="app">
    <Header/>
    <div id="Card"> 
      <AddRecipe v-on:add-Recipe="addNewRecipe"/>
      <SearchRecipe/>
    </div>
    <div id="ListContent">
      <h2>Receitas já adicionadas</h2>
      <ListRecipes v-bind:recipes = "recipes"/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import AddRecipe from './components/AddRecipe'
import SearchRecipe from './components/SearchRecipe'
import ListRecipes from './components/ListRecipes'

export default {
  name: 'App',
  components: {
    Header,
    AddRecipe,
    SearchRecipe, 
    ListRecipes
  },

  data() {
    return {
      recipes: [
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
    }
  },

  methods: {
    addNewRecipe (newRecipe) {
      this.recipes = [...this.recipes, newRecipe];
    }
  }
}
</script>

<style>
  #app {
  display: flex;
  flex-direction: column;
  }

  #Card{
    display: flex; 
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  #ListContent {
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

</style>
