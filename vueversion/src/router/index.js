
import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import AddRecipeForm from '../views/AddRecipeForm'

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
    }
]

const router = new Router({ routes })

export default router