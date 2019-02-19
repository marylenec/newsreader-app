import React, { Component } from 'react'
import ArticleCard from './ArticleCard'

  class ArticlesList extends Component {

      state = {
        position: 6
      }

      updatePosition = () => {
        this.setState({
          position: this.state.position + 6
        })
      }

      displayArticles = () => {
        let arr = this.props.articles.map(article => {
          return (
            <ArticleCard
              key={article.title}
              article={article}  addArticleVisited={this.props.addArticleVisited} />
          )
        })
        return arr.slice(0, this.state.position)
      }

      displayLoadBtn = () => {
        // console.log(this.state.position)
        while (this.state.position < this.props.articles.length) {
        return (
          <button className='btn default-btn' onClick={() => this.updatePosition()}>Load More</button>
          )
        }
      }

      render() {
        // console.log(this.props)

      return (
      <React.Fragment>
        <section className='row'>
        {this.displayArticles()}
        </section>
        <section className='row center-block'>
        {this.displayLoadBtn()}
        </section>
      </React.Fragment>
      )
    }
  }

export default ArticlesList;
