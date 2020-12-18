<script>
    export let data;

    import { navigate } from "svelte-routing";
    const goToViewRecipe =  (recipeName) => {
        navigate(`/viewrecipe/${recipeName}`)
    }
</script>

<style>
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


<div class="CustomList">
    {#each data as item}
        <div class="CustomCard" on:click={goToViewRecipe(item.name)}>
            {item.name}
        </div>
    {/each}
</div>