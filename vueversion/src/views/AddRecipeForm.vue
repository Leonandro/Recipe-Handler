<template>
  <div>
 
  <div class="container">
    <p class="title">Please, input your recipe</P>
    <form @submit.prevent="submit" class="form__body">
      <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
        <label class="form__label">Type the name of your recipe</label>
        <input class="form__input" placeholder="Ex: 10 Thousand Labels Cake" v-model.trim="$v.name.$model"/>
        <div class="error" v-if="!$v.name.required && $v.name.$dirty">The name of the recipe is required</div>
        <div class="error" v-if="!$v.name.minLength && $v.name.$dirty">The name must have at least {{$v.name.$params.minLength.min}} letters.</div>
      </div>

      <div class="form-group" >
        <label class="form__label">Type the amount of the carbohydrates </label>
        <input class="form__input" placeholder="Ex: 10000" v-model="calories"/>
      </div>

      <div class="form-group" :class="{ 'form-group--error': $v.recipe.$error }">
        <label class="form__label">Type how to do this recipe</label>
        <input class="form__input" placeholder="Ex: Boil 350ml of water, put the lamen inside, wait 3 minutes then, season." v-model.trim="$v.recipe.$model"/>
        <div class="error" v-if="!$v.recipe.required && $v.recipe.$dirty">The recipe is required</div>
        <div class="error" v-if="!$v.recipe.minLength && $v.recipe.$dirty">The recipe must have at least {{$v.recipe.$params.minLength.min}} letters.</div>
      </div>


      
      <div class="btn__container">
        <button class="button" type="submit" :disabled="submitStatus === 'PENDING'">Submit!</button>
      </div>
      
      
      <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
      <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
      <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
    </form>
  </div>
  </div>
</template>

<script>
  import { required, minLength } from 'vuelidate/lib/validators';
  


  export default {
    name: 'AddRecipeForm',
    data() {
      return {
        name: '',
        recipe: '',
        calories: null,
        age: 0,
        submitStatus: null
      }
    },
    validations: {
      name: {
        required,
        minLength: minLength(3)
      },

      recipe: {
        required,
        minLength: minLength(10)
      }
    },
    methods: {
      submit() {
        console.log('submit!')
        this.$v.$touch()
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR'
        } else {
          // do your submit logic here
          this.submitStatus = 'PENDING'
          setTimeout(() => {
            this.submitStatus = 'OK'
          }, 500)
        }
      }
    },

    components: {
     
    }
  }

</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form__body {
    width: 60%;
  }

  .title {
    font-size: 2em;
    font-weight: bold;
  }

  .form-group{
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

  .btn__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .error {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: red;
  }
</style>
