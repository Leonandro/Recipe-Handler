<template>
    <div class="AddRecipeCard" @click="goToAddForm">
       <div class="AddRecipeButton">ADD <img :src="require(`../assets/Plus.svg`)" class="AddIcon" /></div>
    </div>
</template>

<script>
export default {
    name: 'AddRecipe',
    methods: {

        goToAddForm () {
            this.$emit('push-Form')
        }

        //addRecipe () {
        //    var value = prompt('Digite a nova receita');
        //
        //    if(value){
        //        const newRecipe = {
        //            name: value,
        //            calorias: 0
        //        }
        //        this.$emit('add-Recipe', newRecipe);
        //    }
        //}

    }
}
</script>

<style scoped>
    .AddRecipeCard {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 3.5%;
        border: 2px solid;
        border-radius: 4px;
        width: 30%;
        padding: 0.4%;
    }

    .AddRecipeButton {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border: 2px solid;
        border-radius: 4px;
        font-size: 50px;
        padding: 3%;    
        height: 100%;
        width: 100%;
        cursor: pointer;
    }

    .AddRecipeButton:hover {
        background-color: white;
    }

    .AddRecipeCard:hover {
        background-color: #A3CB38;
    }

    .AddIcon {
        margin-left: 3%;
    }
</style>