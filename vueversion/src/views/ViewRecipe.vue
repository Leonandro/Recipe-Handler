<template>
    <div>
        <div class="container">
            <div class="body">
                <div id="ViewRecipeBody">
                    <p class="Title">Name</p>
                    {{correspondRecipes[0].name}}
                    <div class="Line" />

                    <p class="Title">Calories</p>
                    {{correspondRecipes[0].calorias}}
                    <div class="Line" />

                    <p class="Title">Recipe</p>
                    {{correspondRecipes[0].recipe}}
                    <div class="Line" />
                </div>
            
            </div>  
        </div>    
    </div>
</template>

<script>
    import { mapGetters} from 'vuex'
    export default {
        name: 'ViewRecipe',
        data () {
            return {
                correspondRecipes: [],
                recipeName: this.$route.params.name
            }
        },

        computed: {
        ...mapGetters({
        recipes: 'recipes'
        })
        },

        methods: {
            filterRecipes() {
                if(this.recipeName !== ''){
                    const matchedRecipes = this.recipes.filter(item => {
                        return item.name.includes(this.recipeName)})
                
                    if(matchedRecipes) {
                        this.correspondRecipes = matchedRecipes
                    }
                }
            }
        },

        mounted () {
             this.filterRecipes();
        }
    }
</script>

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