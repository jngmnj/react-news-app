import React, { useCallback, useState } from 'react'
import NavBar from "../NavBar"
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => {setCategory(category); console.log("카테고리수정", category)}, []);

  return (
    <>
      <NavBar category={category} onSelect={onSelect} />
      <Outlet category={category} />
    </>
  );
}

export default Layout