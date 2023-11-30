import React from 'react'
import { NewsItemBlock } from './NewsItem.styles'
import { Link } from 'react-router-dom'

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;

  return (
    <NewsItemBlock>
      {urlToImage && (
         <div className='thumbnail'>
          <Link to={url} target='_blank'>
            <img src={urlToImage} alt={`${title} 썸네일`} />
          </Link>
         </div>
      )}
      <div className="contents">
        <h2>
          <Link to={url} target='_blank' rel="noopener noreferrer">{title}</Link>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  )
}

export default NewsItem