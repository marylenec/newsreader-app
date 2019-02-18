import React, { Component } from 'react'
import ArticleCard from './ArticleCard'

  class ArticlesVisited extends Component {

      displayVisited = () => {
        // console.log(this.props.visited)
        return this.props.visited.map(article => {
          return (
            <ArticleCard article={article.article} key={article.article.title} timeStamp={article.timeStamp}/>
          )
        })
      }

      displayFullRead = () => {
        console.log(this.props.fullRead)
        return this.props.fullRead.map(article => {
          return <ArticleCard article={article.article} key={article.article.title} timeStamp={article.timeStamp} />
        })
      }

      render() {

      const { visted, fullRead } = this.props;

      return (
      <React.Fragment>
        { this.props.visited.length > 0 ?
          <div>
          <h3>Articles Visited:</h3>
          <div className='flex-container'>
            {this.displayVisited()}
          </div></div> : null }
        { this.props.fullRead.length > 0 ?
          <div>
          <h3>Full Articles Read:</h3>
          <div className='flex-container'>
            {this.displayFullRead()}
          </div></div> : null }
      </React.Fragment>
      )
    }
  }

export default ArticlesVisited;
