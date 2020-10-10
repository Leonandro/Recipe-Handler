import React from 'react';
import {CustomList, CustomCard} from '../styles/ListRecipesStyle';

const ListRecipes = ({data}) =>  {
    return (
      <CustomList>
            {data.map(function(item) {
            return <CustomCard >{item.name}</CustomCard>;
            })}
      </CustomList>
    );
}


export default ListRecipes;