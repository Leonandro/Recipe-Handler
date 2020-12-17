<style>
    .SearchRecipeCard {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 3.5%;
        border: 2px solid;
        border-radius: 4px;
        width: 30%;
        padding: 0.4%;
    }

    .SearchRecipeCard:hover {
        background-color: #1289A7;
    }

    .SearchRecipeButton:hover {
        background-color: white;
    }

    .SearchRecipeButton {
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

    .SearchIcon {
        margin-left: 3%;
    }

</style>

<div class="SearchRecipeCard">
    <div class="SearchRecipeButton">SEARCH <img  src="./icons/Search.svg" alt="Search Icon"  class="SearchIcon" /></div>
</div>