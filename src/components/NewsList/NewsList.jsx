import React, {useEffect, useState} from 'react'
import NewsItem from '../NewsItem';
import { NewsListBlock } from './NewsList.styles';
import axios from 'axios'


const NewsList = ({ category }) => {
    console.log("newslist", category)
      const [articles, setArticles] = useState(null);
      const [loading, setLoading] = useState(false);

      useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            try {
                const apiKey = "f9c9929c82944e4da5e778ecdd416126";
                const query = category === 'all' ? '' : `&query=${category}`;
                const url = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${apiKey}`;
                const response = await axios.get(url);
                setArticles(response.data.articles);
            } catch(e) {
                console.log(e)
            }
            setLoading(false);
        }
        fetchData();   
      }, [category]);

      if(loading) {
        // return <CardSkeleton />; // 추후 스켈레톤만들기
        return <NewsListBlock>loading... </NewsListBlock>;
      }

      if(!articles) {
        return null;
      }
  
  return (
    <NewsListBlock>
      {articles.map((article, index) => (
        <NewsItem article={article} key={index} />
      ))}
    </NewsListBlock>
  );
}

export default NewsList