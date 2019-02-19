import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { addArticleVisited } from '../actions/articleActions'

  const ArticleCard = (props) => {

    const { article, timeStamp } = props;

    const teaser = (str) => {
      return str.slice(0,250) + "..."
    }

      return ( article ?
        <React.Fragment >
            <article className='ArticleCard col-md-4 col-sm-6 col-xs-12'>
              <figure className='media-container'>
                <Link to={`/articles/${article.title}`} >
                  <img className= 'fit' src={article.urlToImage} onClick={(e) => props.addArticleVisited(article)} alt={article.description}/>
                </Link>
              </figure>
              <Link className='link' to={`/articles/${article.title}`}>
                <h1 onClick={(e) => props.addArticleVisited(article)} >{article.title}</h1>
              </Link>
              <Link className='link' to={`/articles/  ${article.title}`} >   <small onClick={(e) => props.addArticleVisited(article)}>{article.source.name} - {article.author}</small>
              </Link>
              <div className='wrapper'>
              <Link className='link' to={`/articles/${article.title}`} ><p className='word-wrap' onClick={(e) => props.addArticleVisited(article)}>{article.content ? teaser(article.content) :'no content available'}</p></Link>
              </div>
              {props.timeStamp ? <small>Viewed on: {timeStamp}</small> : null}
              <hr/>
            </article>
        </React.Fragment>
        :
        null
      )
  }



  export default connect(null, { addArticleVisited })(ArticleCard);
