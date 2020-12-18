<script>
    export let recipeName;

    import { onMount,  } from 'svelte';
    import { useRecipes } from '../components/recipesHook.js';
    import ListRecipes from '../components/ListRecipes.svelte';

    let recipes = useRecipes();
    let correspondRecipes = [];

    onMount( () => {
        recipes.renderData();
    });


    const filterRecipes = () => {
        if(recipeName !== ''){
            let matchedRecipes = $recipes.filter(item => {
                return item.name.includes(recipeName)})
            if(matchedRecipes) {
                correspondRecipes = matchedRecipes;
            }
        }
        else {
            correspondRecipes = []
        }
    }

    onMount( () => {
        recipes.renderData().then(filterRecipes);
    });
    
    
</script>

<div>
    {#if correspondRecipes[0]}
        <div class="container">
            <div class="body">
                <div id="ViewRecipeBody">
                    <p class="Title">Name</p>
                    {correspondRecipes[0].name}
                    <div class="Line" />

                    <p class="Title">Calories</p>
                    {correspondRecipes[0].calorias}
                    <div class="Line" />

                    <p class="Title">Recipe</p>
                    {correspondRecipes[0].recipe}
                    <div class="Line" />
                </div>
            
            </div>  
        </div>
    {/if}
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .body {
        display: flex; 
        flex-direction: column; 
        justify-content: center; 
        align-items: center; 
        width: 100%;
    }

     #ViewRecipeBody {
        width: 60%;
        text-align: center;
        
    }

     .Title {
        font-size: 30px;
        font-weight: bold;
        text-align: center;

    }

     .Line {
        margin-top: 2%;
        border-bottom: 1px solid;
        
    }
</style>