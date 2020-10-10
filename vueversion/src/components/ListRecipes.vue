<template>
    <div class="CustomList">
        <div v-bind:key="recipe.id" v-for="recipe in recipes"> 
            <div class="CustomCard">
                {{recipe.name}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListRecipes',
    props: ["recipes"]
}
</script>

<style scoped>
    .CustomList {
        border: 2px solid;
        border-color: black;
        width: 77%;
        border-radius: 4px;
        padding: 1.2%;
    }

    .CustomCard {
        border: 2px solid;
        border-color: black;
        border-radius: 4px;
        margin: 1%;
        text-align: center;
    }

</style>