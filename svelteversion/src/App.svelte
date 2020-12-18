<!-- App.svelte -->
<script>
	import { Router, Route } from "svelte-routing";
	import Home from "./views/Home.svelte";
	import AddRecipeForm from "./views/AddRecipeForm.svelte";
	import SearchRecipesPage from "./views/SearchRecipesPage.svelte"
	import ViewRecipe from "./views/ViewRecipe.svelte"
  
	export let url = "";
  </script>
  
  <Router url="{url}">
	<div>
	  <Route path="viewrecipe/:name" let:params>
		<ViewRecipe recipeName="{params.name}"/>
	  </Route>	
	  <Route path="searchrecipepage" component="{SearchRecipesPage}" />	
	  <Route path="addrecipeform" component="{AddRecipeForm}" />
	  <Route path="/"><Home /></Route>
	</div>
  </Router>