<template>
    <div class="AddRecipeCard" @click="addRecipe">
        Add
    </div>
</template>

<script>
export default {
    name: 'AddRecipe',
    methods: {

        addRecipe () {
            var value = prompt('Digite a nova receita');

            if(value){
                const newRecipe = {
                    id: 4,
                    name: value
                }
                this.$emit('add-Recipe', newRecipe);
            }
        }
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