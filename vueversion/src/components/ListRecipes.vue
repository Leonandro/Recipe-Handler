<template>
    <div class="CustomList">
        <div v-bind:key="recipe.id" v-for="recipe in recipes"> 
            <div class="CustomCard" @click="goToViewRecipe(recipe.name)">
                {{recipe.name}}
            </div>
        </div>
    </div>
</template>

<script>
import router from '../router/index'
export default {
    name: 'ListRecipes',
    props: ["recipes"],

    methods: {
        goToViewRecipe(recipeName) {
            router.push({ name: 'viewRecipe', params: { name: recipeName } })
        }
    }
}
</script>

<style scoped>
    .CustomList {
        width: 77%;
    }

    .CustomCard {
        border: 2px solid;
        border-color: black;
        border-radius: 4px;
        padding: 0.6%;
        margin: 1%;
        font-weight: bold;
        text-align: center;
        cursor: pointer; 
    }

    .CustomCard:hover {
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }

</style>