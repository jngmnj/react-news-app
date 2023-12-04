import React, {useEffect, useState} from 'react'
import NewsItem from '../NewsItem';
import { NewsListBlock } from './NewsList.styles';
import axios from 'axios'
import usePromise from '../utils/usePromise';


const NewsList = ({ category }) => {
  const handleFetch = () => {
    const apiKey = "f9c9929c82944e4da5e778ecdd416126";
    const query = category === 'all' ? '' : `&category=${category}`;
    const url = `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=${apiKey}`;
    console.log(url)
    return axios.get(url);
  }
  const [loading, response, error] = usePromise(handleFetch, [category]);

  if(loading) {
    // return <CardSkeleton />; // 추후 스켈레톤만들기
    return <NewsListBlock>loading... </NewsListBlock>;
  }

  console.log("response", response)


  if (!response) {
    return null;
  }

  if (error) {
    return <NewsList>에러발생!</NewsList>
  }

  const { articles } = response.data;
  
  return (
    <NewsListBlock>
      {articles.map((article, index) => (
        <NewsItem article={article} key={index} />
      ))}
    </NewsListBlock>
  );
}

export default NewsList