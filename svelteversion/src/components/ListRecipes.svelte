<script>
    export let data;
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
</style>


<div class="CustomList">
    {#each data as item}
        <div class="CustomCard">
            {item.name}
        </div>
    {/each}
</div>