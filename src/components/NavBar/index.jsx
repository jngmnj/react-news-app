import React from 'react'
import { CategoriesBlock, Category } from './NavBar.styles'
import categories from '../Categories'

const NavBar = ({ category, onSelect }) => {
  return (
    <CategoriesBlock>
      {categories.map((cate) => (
        <Category
          key={cate.name}
          // activeclassname="active"
          className={({ isActive }) => isActive ? "active" : ""}
          exact={cate.name === "all"}
          to={cate.name === "all" ? "/" : `/${cate.name}`}
        >
          {cate.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
}

export default NavBar