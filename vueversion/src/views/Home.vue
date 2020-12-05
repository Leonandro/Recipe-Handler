<template>
  <div id="app">
    <Header/>
    <div id="Card"> 
      <AddRecipe v-on:push-Form="navTest"/>
      <SearchRecipe/>
      
    </div>
    <div id="ListContent">
      <h2>Receitas já adicionadas</h2>
      <ListRecipes v-bind:recipes = "recipes"/>
    </div>
  </div>
</template>

<script>
    import Header from '../components/Header'
    import AddRecipe from '../components/AddRecipe'
    import SearchRecipe from '../components/SearchRecipe'
    import ListRecipes from '../components/ListRecipes'
    import {db} from '../firebase'
    import router from '../router/index'

    export default {
    name: 'Home',
    components: {
        Header,
        AddRecipe,
        SearchRecipe, 
        ListRecipes
    },

    data() {
        return {
        recipes: []
        }
    },

    methods: {
        renderData: async function (){
        const snapshot = await db.collection("recipes").get();
        const loadingData = [];
        snapshot.forEach((doc) => {
            loadingData.push({
            id: doc.id,
            ...doc.data(),
            });
        });
        this.recipes = loadingData;
        },

        addNewRecipe: async function (newRecipe) {
            await db.collection("recipes").add({
                name: newRecipe.name,
                calorias: newRecipe.calorias
            })
            this.renderData();
            //this.recipes = [...this.recipes, newRecipe];
        },

        navTest () {
            router.push('/add-recipe-form')
        }
    },

    mounted: async function() {
        this.renderData();
    }
    
    }
</script>

<style>
     html, body {
    margin: 0px !important;
    padding: 0px !important;
  }

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