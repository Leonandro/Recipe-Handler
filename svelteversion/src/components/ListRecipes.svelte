<script>
    export let data;
</script>

<style>
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


<div class="CustomList">
    {#each data as item}
        <div class="CustomCard">
            {item.name}
        </div>
    {/each}
</div>