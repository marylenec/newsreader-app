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
        <figure className='pointer' onClick={(e) => props.addArticleFullRead(article)}>
          <img className="show" src={article.urlToImage} alt={article.title}/>
        </figure>
        <h1 className='pointer' onClick={(e) => props.addArticleFullRead(article)}>{article.title}</h1>
        <small className='pointer' onClick={(e) => props.addArticleFullRead(article)}>{article.source.name} - {article.author}</small>
        <p className='pointer' onClick={(e) => props.addArticleFullRead(article)}>{article.content ? teaser(article.content) : 'no content available'}</p>
        <section className='d-flex justify-content-center'>
        <button className='btn default-btn' onClick={(e) => props.addArticleFullRead(article)} >View on {webLink(article.url)}</button>
        </section>
      </article>
      </section>
    </React.Fragment>
    :
    null
  )
}

  export default connect(null, { addArticleFullRead })(ArticleShow);
