import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-recipe-form',
  templateUrl: './add-recipe-form.component.html',
  styleUrls: ['./add-recipe-form.component.css']
})
export class AddRecipeFormComponent implements OnInit {

  recipeToBeAdded = {name: '', calories: null, recipe: ''};

  submitStatus = null;

  formStatus = null;



  submit(name, recipe) {


    if(name.control.valid && recipe.control.valid) {
      alert('good submit')
    }

    else {
      alert('bad submit')
      alert(recipe.errors.required)
    }

    
    //alert(recipeName.dirty);
    //recipeName.dirty = true;
    //this.$v.$touch()
    //if (this.formStatus.invalid) {
    //  this.submitStatus = 'ERROR'
    //} else {
      // do your submit logic here
     // this.submitStatus = 'PENDING'
     // setTimeout(() => {
     //   this.submitStatus = 'OK'
     // }, 500)
    //}
  }


  constructor() { }

  ngOnInit(): void {
  }

}
