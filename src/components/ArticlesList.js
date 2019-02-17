import React, { Component } from 'react'
import ArticleCard from './ArticleCard'

  class ArticlesList extends Component {

      display = () => {
        return this.props.articles.map(article => {
          return (
            <ArticleCard
              key={article.title}
              article={article}  addArticleVisited={this.props.addArticleVisited} />
          )
        })
      }

      render() {
      return (
      <React.Fragment>
        {this.display()}
      </React.Fragment>
      )
    }
  }

export default ArticlesList;
