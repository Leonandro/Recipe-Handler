<script>
    import Header from '../components/Header.svelte';

    let recipeToBeAdded = { name: '', carbohydrates: null, recipe: '' };
    let errors = {  name: '', carbohydrates: '', recipe: ''};
    let valid = false;

    const submit = () => {
      valid = true;
      
      validateName();
      validateRecipe();

      // add new poll
      if (valid) {
        console.log('valid');
      }

      else {
          console.log('invalid');
      }
    }

    const validateName = () => {
        if (recipeToBeAdded.name.trim().length < 3) {        
            valid = false;
            if(recipeToBeAdded.name.trim().length == 0){
                errors.name = 'The name of the recipe is required';
            }
            else {
                errors.name = 'The name of the recipe must have at least 3 letters';
            }
        } 
      
        else {
            errors.name = ''
        }
    }

    const validateRecipe = () => {
        if (recipeToBeAdded.recipe.trim().length < 10) {        
            valid = false;
            if(recipeToBeAdded.recipe.trim().length == 0){
                errors.recipe = 'The recipe is required';
            }
            else {
                errors.recipe = 'The recipe must have at least 10 letters';
            }
        } 
      
        else {
            errors.recipe = ''
        }
    }
  </script>






<div>
    <Header />    
    <div id="container">
        <p id="formTitle">Please, input your recipe</p>
        <form  class="form__body" on:submit|preventDefault={submit}>
            <div class="form__group">
                <label class="form__label">Type the name of your recipe</label>
                <input class="form__input" bind:value={recipeToBeAdded.name} on:input={validateName}>
                    <div class="error">
                        {errors.name}
                    </div>
            </div>

            <div class="form__group">
                <label class="form__label">Type the amount of the carbohydrates</label>
                <input class="form__input" bind:value={recipeToBeAdded.recipe.carbohydrates}>
                
            </div>

            <div class="form__group">
                <label class="form__label">Type how to do this recipe</label>
                <input class="form__input" bind:value={recipeToBeAdded.recipe} on:input={validateRecipe}>
                    <div class="error">
                        {errors.recipe}
                    </div>
                
            </div>

            <div class="btn__container">
                <button class="button" type="submit" >Submit!</button>
            </div>

            
        </form>
    </div>
</div>

<style>
    #container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #formTitle {
        font-size: 2em;
        font-weight: bold;
    }

    .form__body {
    width: 60%;
    }


    .form__group{
        display: flex;
        flex-direction: column;
        margin-bottom: 10%;
    }

    .form__label {
        align-self: center;
    }

    .form__input {
        border: 2px solid;
        padding-left: 3%;
        padding-bottom: 1%;
        padding-top: 1%;
        border-radius: 5px;
    }

    .error {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: red;
  }

  .btn__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>