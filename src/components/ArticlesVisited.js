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
              key={article.timeStamp}
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
          </article></section> : <section><h1>No Articles Visited</h1></section> }
        { fullRead.length > 0 ?
          <section className='margin-top-30'>
          <hr/>
            <h1>Full Articles Read:</h1>
            <article className='flex-container'>
              {displayFullRead()}
            </article>
          </section> : null }
      </React.Fragment>
      )
  }

export default ArticlesVisited;
