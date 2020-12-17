import Vue from 'vue'
import Vuex from 'vuex'
import {db} from './firebase'

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        recipesList: []
    },
    mutations: {
        setRecipes: (state, loadData) => state.recipesList = loadData
    },
    getters: {
        recipes: state => state.recipesList
    },
    actions: {
        async renderData(context) {
            const snapshot = await db.collection("recipes").get();
            const loadingData = [];
            snapshot.forEach((doc) => {
                loadingData.push({
                id: doc.id,
                ...doc.data(),
                });
            });

            context.commit("setRecipes", loadingData)
        },

        async addNewRecipe (context, newRecipe) {
            await db.collection("recipes").add({
                name: newRecipe.name,
                calorias: newRecipe.calorias
            })
            context.dispatch("renderData")
        }
    }
})

export { store }