import React, { Component } from 'react'
import ArticleCard from './ArticleCard'

  class ArticlesList extends Component {

      displayArticles = () => {
        let arr = this.props.articles.map(article => {
          return (
            <ArticleCard
              key={article.title}
              article={article}  addArticleVisited={this.props.addArticleVisited} />
          )
        })
        return arr
      }

      displayLoadBtn = () => {
        while (this.props.articles.length < this.props.articlesTotal) {
        return (
          <button className='btn default-btn' onClick={() => this.props.updatePosition()}>Load More</button>
        )
        }
      }

      render() {
        console.log(this.props)

      return (
      <React.Fragment>
        <div className='row'>
        {this.displayArticles()}
        </div>
        <div className='row center-block'>
        {this.displayLoadBtn()}
        </div>
      </React.Fragment>
      )
    }
  }

export default ArticlesList;
