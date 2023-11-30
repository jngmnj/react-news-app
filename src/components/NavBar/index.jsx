import React from 'react'
import { CategoriesBlock, Category } from './NavBar.styles'
import categories from '../Categories'

const NavBar = ({ category, onSelect }) => {
  return (
    <CategoriesBlock>
      {categories.map((cate) => (
        <Category 
          key={cate.name}
          active={category === cate.name}  
          onClick={() => onSelect(cate.name)}
        >
          {cate.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
}

export default NavBar