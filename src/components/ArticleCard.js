import React, { Component } from 'react'
import { Link } from 'react-router-dom'

  class ArticleCard extends Component {

    teaser = (str) => {
      return str.slice(0,250) + "..."
    }

      render() {

      const { article, timeStamp } = this.props;

      return ( article ?
        <React.Fragment >
            <article className='ArticleCard col-md-4 col-sm-6 col-xs-12'>
              <div className='media-container'>
                <Link to={`/articles/${article.title}`} >
                  <img className= 'fit' src={article.urlToImage} onClick={(e) => this.props.addArticleVisited(article)} alt={article.description}/>
                </Link>
              </div>
              <Link className='link' to={`/articles/${article.title}`}>
                <h3 onClick={(e) => this.props.addArticleVisited(article)} >{article.title}</h3>
              </Link>
              <Link className='link' to={`/articles/  ${article.title}`} >   <small onClick={(e) => this.props.addArticleVisited(article)}>{article.source.name} - {article.author}</small>
              </Link>
              <div className='wrapper'>
              <Link className='link' to={`/articles/${article.title}`} ><p className='word-wrap' onClick={(e) => this.props.addArticleVisited(article)}>{article.content ? this.teaser(article.content) :'no content available'}</p></Link>
              </div>
              {timeStamp ? <div>Viewed on: {timeStamp}</div> : null}
              <hr/>
            </article>
        </React.Fragment>
        :
        null
      )
    }
  }

export default ArticleCard;
