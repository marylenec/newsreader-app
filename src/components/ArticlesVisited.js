import React, { Component } from 'react'
import ArticleCard from './ArticleCard'

  class ArticlesVisited extends Component {

      displayVisited = () => {
        console.log(this.props.visited)
        let arr = this.props.visited.map(article => {
          return <ArticleCard article={article} key={article.title} />
        })
        return arr
      }

      displayFullRead = () => {
        console.log(this.props.fullRead)
        let arr = this.props.fullRead.map(article => {
          return <ArticleCard article={article} key={article.title} />
        })
        return arr
      }

      render() {

      const { visted, fullRead } = this.props;

      return (
      <React.Fragment>
        { this.props.visited.length > 0 ?
          <div>
            <h3>Articles Visited:</h3>
            {this.displayVisited()}
          </div> : null }
        { this.props.fullRead.length > 0 ?
          <div>
            <h3>Full Articles Read:</h3>
            {this.displayFullRead()}
          </div> : null }
      </React.Fragment>
      )
    }
  }

export default ArticlesVisited;
