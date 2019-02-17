import React, { Component } from 'react'
import { Link } from 'react-router-dom'

  class ArticleCard extends Component {

    teaser = (str) => {
      return str.slice(0,250)
    }

      render() {

      const { article } = this.props;

      return (
        <React.Fragment >
            <article className='ArticleCard col-sm-6 col-md-4'>
              <div className='media-container'>
                <Link to={`/articles/${article.title}`} >
                  <img src={article.urlToImage} onClick={(e) => this.props.addArticleVisited(article)} alt={article.description}/>
                </Link>
              </div>
              <Link className='link' to={`/articles/${article.title}`}>
                <h3>{article.title}</h3>
              </Link>
              <Link className='link' to={`/articles/  ${article.title}`} >   <small>{article.source.name} - {article.author}</small>
              </Link>
              <Link className='link' to={`/articles/${article.title}`} ><p>{article.content ? this.teaser(article.content) : null}...</p></Link>
              <hr/>
            </article>
        </React.Fragment>
      )
    }
  }

export default ArticleCard;
