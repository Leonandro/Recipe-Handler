import React from 'react';
import {SearchRecipeCard, SearchRecipeButton, SearchIcon} from '../styles/SearchRecipeStyle'

class SearchRecipe extends React.Component {
  render() {
    return (
      <SearchRecipeCard>
          <SearchRecipeButton>SEARCH <SearchIcon/> </SearchRecipeButton>
      </SearchRecipeCard>
    );
  }
}


export default SearchRecipe;