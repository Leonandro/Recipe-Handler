
import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import AddRecipeForm from '../views/AddRecipeForm'
import SearchRecipePage from '../views/SearchRecipePage'
import ViewRecipe from '../views/ViewRecipe'

Vue.use(Router)

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home,
    },
    {
        name: 'addRecipeForm',
        path: '/add-recipe-form',
        component: AddRecipeForm
    },
    {
        name: 'searchRecipePage',
        path: '/search-recipe-page',
        component: SearchRecipePage
    },
    {
        name: 'viewRecipe',
        path: '/view-recipe/:name',
        component: ViewRecipe
    },
    
    
]

const router = new Router({ routes })

export default router