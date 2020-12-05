<!-- App.svelte -->
<script>
	import { Router, Route } from "svelte-routing";
	import Home from "./views/Home.svelte";
	import AddRecipeForm from "./views/AddRecipeForm.svelte";
  
	export let url = "";
  </script>
  
  <Router url="{url}">
	<div>
	  <Route path="addrecipeform" component="{AddRecipeForm}" />
	  <Route path="/"><Home /></Route>
	</div>
  </Router>