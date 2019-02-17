import React from 'react'
import {Link} from 'react-router-dom'

const ArticleShow = (props) =>{

  const { article } = props
  // console.log(article)

  const teaser = (str) => {
    return str.slice(0,250)
  }
  // const url = (str) => {
  //   //find letters in string before .com
  //
  //   //replace with empty before www.
  //
  //   return str.slice()
  // }
  return ( article ?

    <div className="ArticleShow row justify-content-center">
      <div className="col-md-8">
        <a href={article.url} target="_blank">
          <img src={article.urlToImage} alt={article.title}/>
        </a>
        <a href={article.url} target="_blank">
          <h3>{article.title}</h3>
        </a>
        <a href={article.url} target="_blank">
          <small>{article.source.name} - {article.author}</small>
        </a>
        <a href={article.url} target="_blank">
          <p>{article.content ? teaser(article.content) : null}...</p>
        </a>
        <div className='d-flex justify-content-center'>
        <button className='btn source-btn'>View on {article.source.name}</button>
        </div>
        <div className='clearfix'></div>
        <Link to='/articles'><button className='btn back-btn' >Back To Articles</button></Link>
      </div>
    </div>
    :
    null
  )
}

export default ArticleShow
