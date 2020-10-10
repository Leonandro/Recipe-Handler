<script>
	import Header from './components/Header.svelte'
	import AddRecipe from './components/AddRecipe.svelte'
	import SearchRecipe from './components/SearchRecipe.svelte'
	import ListRecipes from './components/ListRecipes.svelte'

	let recipes = [{
						id: 1,
						name: 'Ensopado de galinha'  
						},
						{
						id: 2,
						name: 'Risoto'
						},
						{
						id: 3,
						name: 'strogonoff'
					}]
	
	const handleNewRecipe = () => {
		var value = prompt('Digite a nova receita');

		if(value){
			recipes = [...recipes, {id: 4, name: value}];
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