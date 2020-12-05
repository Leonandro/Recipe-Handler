<template>
    <div class="AddRecipeCard" @click="goToAddForm">
        Add
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
        margin: 3.5%;
        border: 2px solid;
        border-color: #4834d4;
        border-radius: 4px;
        width: 30%;
        padding: 3%;
        text-align: center;
    }
</style>