import React from 'react'
import './article.css'

function Article(props) {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={props.img} alt="blog_image" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{props.date}</p>
          <h3>{props.text}</h3>
          <p>{props.para}</p>
        </div>
      </div>
    </div>
  )
}

export default Article;
