<script>
    import { onMount } from 'svelte';
    import { navigate } from "svelte-routing";
	import Header from '../components/Header.svelte'
	import AddRecipe from '../components/AddRecipe.svelte'
	import SearchRecipe from '../components/SearchRecipe.svelte'
	import ListRecipes from '../components/ListRecipes.svelte'
	import {db} from '../firebase.js'
	import { useRecipes } from '../components/recipesHook.js';

	let recipes = useRecipes();
	let hue = 'ang'
	  
	onMount( () => {
		recipes.renderData();
	});

    const goToAddForm =  () => {
        navigate("/addrecipeform")
	}
	
	const goToSearch =  () => {
        navigate("/searchrecipepage")
	}
	
</script>

<style>

	#principal {
		display: flex;
		flex-direction: column;
	}

	#card {
		display: flex; 
    	flex-direction: row;
    	justify-content: center;
    	align-items: center;
	}

	#ListContent {
		display: flex; 
		flex-direction: column; 
		justify-content: center; 
		align-items: center;
	}

</style>

<div id="principal">
	<Header />
	<div id="card">
		<AddRecipe on:addrecipe={goToAddForm}/>
		<SearchRecipe on:searchrecipe={goToSearch}/>
	</div>

	<div id="ListContent">
		<h2>Below, we show all the recipes we found in your kitchen.</h2>
		<ListRecipes data={$recipes}/>
	</div>
</div>