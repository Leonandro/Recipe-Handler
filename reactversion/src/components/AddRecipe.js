import React from 'react';
import {AddRecipeCard} from '../styles/AddRecipeStyle';

const AddRecipe = ({clickHandler}) => {
    return (
      <AddRecipeCard onClick={clickHandler}>
            Add
      </AddRecipeCard>
    );

}


export default AddRecipe;