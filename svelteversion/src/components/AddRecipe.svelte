<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    const addNew = () => {
        dispatch("addrecipe")  
    }
</script>

<style>
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

<div class="AddRecipeCard" on:click={addNew}>
    
    <div class="AddRecipeButton">ADD <img  src="./icons/Plus.svg" alt="Plus Icon"  class="AddIcon" /></div>
</div>