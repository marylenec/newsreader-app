import React from 'react'
import ArticleCard from './ArticleCard'

  const ArticlesVisited = (props) => {

      const { visited, fullRead } = props;

      const displayVisited = () => {
        // console.log(props.visited)
        return visited.map(article => {
          return (
            <ArticleCard
              article={article.article}
              key={article.timeStamp}
              timeStamp={article.timeStamp}/>
          )
        })
      }

      const displayFullRead = () => {
        // console.log(props.fullRead)
        return fullRead.map(article => {
          return (
            <ArticleCard
              article={article.article}
              key={article.article.title}
              timeStamp={article.timeStamp} />
          )
        })
      }

      return (
      <React.Fragment>
        { visited.length > 0 ?
          <section>
          <h1>Articles Visited:</h1>
          <article className='flex-container'>
            {displayVisited()}
          </article></section> : 'No Articles Visited' }
        { fullRead.length > 0 ?
          <section>
          <h1>Full Articles Read:</h1>
          <article className='flex-container'>
            {displayFullRead()}
          </article></section> : null }
      </React.Fragment>
      )
  }

export default ArticlesVisited;
