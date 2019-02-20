import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { addArticleFullRead } from '../actions/articleActions'

const ArticleShow = (props) => {

  const { article } = props
  // console.log(props)

  const teaser = (str) => {
    return str.slice(0,250) + "..."
  }

  const webLink = (str) => {
    //replace with empty before www.
    const replace = ['https://www.', 'http://www.', 'https://']

		let result = ''
    for (let char of replace) {
      if (str.includes(char)) {
        result = str.replace(char,'')
      }
    }
    const end = result.split("").indexOf('/')
    result = result.slice(0, end)

    return result
  }

  return ( article ?

    <React.Fragment>
      <section className="row justify-content-center">
      <article className="ArticleCard col-md-8 col-sm-12">
        <a href={article.url} target="_blank" rel="noopener noreferrer" onClick={(e) => props.addArticleFullRead(article)}>
          <figure>
          <img className="show" src={article.urlToImage} alt={article.title}/>
          </figure>
        </a>
        <a href={article.url} target="_blank" rel="noopener noreferrer" onClick={(e) => props.addArticleFullRead(article)}>
          <h1>{article.title}</h1>
        </a>
        <a href={article.url} target="_blank" rel="noopener noreferrer" onClick={(e) => props.addArticleFullRead(article)}>
          <small>{article.source.name} - {article.author}</small>
        </a>
        <a href={article.url} target="_blank" rel="noopener noreferrer" onClick={(e) => props.addArticleFullRead(article)}>
          <p>{article.content ? teaser(article.content) : 'no content available'}</p>
        </a>
        <section className='d-flex justify-content-center'>
        <a href={article.url} className='btn default-btn' onClick={(e) => props.addArticleFullRead(article)} target="_blank" rel="noopener noreferrer" >View on {webLink(article.url)}</a>
        </section>
      </article>
      </section>
    </React.Fragment>
    :
    null
  )
}

  export default connect(null, { addArticleFullRead })(ArticleShow);
