import React from 'react'
import NewsList from '../../components/NewsList/NewsList'
import { useParams } from 'react-router-dom';

const MainPage = () => {
  const params = useParams();
  console.log("pathname", params);
  const category = match.params.category || 'all';

  return (
    <NewsList/>
  )
}

export default MainPage