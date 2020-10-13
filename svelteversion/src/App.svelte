<script>
	import { onMount } from 'svelte';
	import Header from './components/Header.svelte'
	import AddRecipe from './components/AddRecipe.svelte'
	import SearchRecipe from './components/SearchRecipe.svelte'
	import ListRecipes from './components/ListRecipes.svelte'
	import {db} from './firebase.js'

	let recipes = [];

	const renderData = async () => {
		const snapshot = await db.collection("recipes").get();
		const loadingData = [];
		snapshot.forEach((doc) => {
			loadingData.push({
			id: doc.id,
			...doc.data(),
			});
		});
		recipes = loadingData; 
	}
	  
	onMount( () => {
		renderData();
	});

	const handleNewRecipe = async () => {
		var value = prompt('Digite a nova receita');

		if(value){
			await db.collection("recipes").add({
				name: value,
				calorias: 0
			})

			renderData();

			//recipes = [...recipes, {id: 4, name: value}];
		}

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
		<AddRecipe on:addrecipe={handleNewRecipe}/>
		<SearchRecipe />
	</div>

	<div id="ListContent">
		<h2>Receitas já adicionadas</h2>
		<ListRecipes data={recipes}/>
	</div>
</div>