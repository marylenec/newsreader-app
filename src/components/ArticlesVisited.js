import React, { Component } from 'react'
import ArticleCard from './ArticleCard'

  class ArticlesVisited extends Component {

      display = () => {
        console.log(this.props.visited)
        let arr = this.props.visited.map(article => {
          return <ArticleCard article={article} key={article.title} />
        })
        return arr
      }

      render() {
      return (
      <React.Fragment>
        {this.display()}
      </React.Fragment>
      )
    }
  }

export default ArticlesVisited;
