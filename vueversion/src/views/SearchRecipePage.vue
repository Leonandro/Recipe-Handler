<template>
    <div class="container">
        <div class="body">
            <div class="searchPageBody">
                <p class="formTitle">Please, enter the name of the recipe that you're looking for</p>
                <div class="inputGroup">
                    <input class="PageInput" placeholder="Ex: 10 Thousand Labels Cake" v-model="inputValue"/> 
                    <button class="PageButton" @click="filterRecipes"> <img :src="require(`../assets/Search-very-small.svg`)" class="AddIcon" /> </button>
                </div>
                <h2 class="answersLabel">Below, we show all the recipes that matches the searched name</h2>
            </div>
            <ListRecipes v-bind:recipes = "correspondRecipes"/>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import ListRecipes from '../components/ListRecipes'

    export default {
        name: 'SearchRecipePage',
        components: {
            ListRecipes
        },

        data() {
            return {
                inputValue: '',
                correspondRecipes: []
            }
        },

        computed: {
        ...mapGetters({
            recipes: 'recipes'
        })
        },

        methods: {
            ...mapActions ({
                renderData: 'renderData',
            }),

            filterRecipes () {
                if(this.inputValue !== ''){
                    let matchedRecipes = this.recipes.filter(item => {
                        let searchLowerCase = this.inputValue.toLowerCase();
                        let recipeLowerCase = item.name.toLowerCase();
                        return recipeLowerCase.includes(searchLowerCase)})
                    if(matchedRecipes) {
                        this.correspondRecipes = matchedRecipes;
                    }
                }
                else {
                    this.correspondRecipes = []
                }
            }
        },

        mounted: async function() {
            await this.renderData();
        }
        

    }
</script>

<style scoped >
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
        width: 100%
    }

    .searchPageBody {
        width: 60%;
    }

     .inputGroup {
        display: flex;
        flex-direction: row;
    }

    .PageInput{
        border: 2px solid;
        padding-left: 3%;
        padding-bottom: 1%;
        padding-top: 1%;
        border-radius: 5px;
        margin-bottom: 10%;
        width: 80%;
    }

    .PageButton {
        align-items: center;
        border: 2px solid;
        border-radius: 5px;
        width: 10%;
        margin-left: 2%;
        margin-bottom: 10%;
        padding-top: 0.1%;
        cursor: pointer;
    }

    .PageButton:hover {
        background-color: #A3CB38;
    }

    .formTitle {
        font-size: 2em;
        font-weight: bold;
        text-align: center;
    }

    .answersLabel {
        text-align: center;
    }

</style>