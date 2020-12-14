import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AddRecipeFormContainer } from '../styles/AddRecipeFormStyle';
import Header from '../components/Header';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Formik } from 'formik';

export default function AddRecipeForm() {

    const schema = yup.object().shape({
        recipeName: yup.string().required('The name of the recipe is required').min(3, 'The name of the recipe must have at least 3 letters'),
        recipeText: yup.string().required('The recipe is required').min(10, 'The recipe must have at least 10 letters')
    });


 

  return (
   
    <AddRecipeFormContainer>
        <Header/>
        <div id="form__body">

            <Formik initialValues={{recipeName: '', recipeCalories: null, recipeText: ''}}
                validationSchema={schema}
                onSubmit={(values, actions) => {
                    alert(JSON.stringify(values))
                }}
                >
                {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => 
                
                (
                    <form style={{display: "flex", flexDirection: "column"}} onSubmit={handleSubmit}>
                        <p id="formTitle">Please, input your recipe</p>
                        <div id="form-group-1">
                            <label id="form__label-1">Type the name of your recipe</label>
                            <input id="form__input-1" name="recipeName"  onChange={handleChange} onBlur={handleBlur} value={values.recipeName} />
                            <div id="error-1">{(errors.recipeName && touched.recipeName) ? errors.recipeName : null} </div>
                        </div>

                        <div id="form-group-2">
                            <label id="form__label-2">Type the amount of the carbohydrates</label>
                            <input id="form__input-2" name="recipeCalories"  value={values.recipeCalories} />
                        </div>

                        <div id="form-group-3">
                            <label id="form__label-3">Type how to do this recipe</label>
                            <input id="form__input-3" name="recipeText"  onChange={handleChange} onBlur={handleBlur} value={values.recipeText} />
                            <div id="error-3">{(errors.recipeText && touched.recipeText) ? errors.recipeText : null} </div>
                        </div>

                        <button id="btn__container" type="submit">Submit!</button>
                    </form>
                )
                }
            </Formik>
           
        </div>
    </AddRecipeFormContainer>
  );
}