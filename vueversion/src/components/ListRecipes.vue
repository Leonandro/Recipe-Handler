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

</style>