import React from 'react'
import { NewsItemBlock } from './NewsItem.styles'
import { Link } from 'react-router-dom'

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;

  return (
    <NewsItemBlock>
      {urlToImage && (
         <div className='thumbnail'>
          <Link></Link>
         </div>
      )}
    </NewsItemBlock>
  )
}

export default NewsItem