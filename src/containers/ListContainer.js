import React, { Component } from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import ArticlesList from '../components/ArticlesList'
import ArticlesVisited from '../components/ArticlesVisited'
import ArticleShow from './ArticleShow'
import NavBar from '../components/NavBar';

const myKey = `${process.env.REACT_APP_API_KEY}`

  class ListContainer extends Component {

      state = {
        data: [],
        total: 0,
        visited: [],
        fullRead: []
      }

      componentDidMount = () => {
        this.fetchNews()
      }

      fetchNews = () => {
        fetch(`https://newsapi.org/v2/everything?sources=engadget&apiKey=${myKey}`)
        .then( res => res.json())
        .then( data => {
          this.setState({
            data: data.articles,
            total: data.articles.length
            }
          )
        })
        .catch(err => {
    err.text().then(errorMessage => {
      'Something went wrong'
    })})
      }

      addArticleVisited = (article) => {
        console.log(this)
        const previous = window.history.length

        const timeStamp = new Date().toUTCString()
        if (!this.state.visited.includes(article)) {
          this.setState({
            visited: [...this.state.visited, {article, timeStamp: timeStamp, previous: previous}]
          },() => console.log(this.state))
      }
    }

      addArticleFullRead = (article) => {
        // console.log(article)
        const timeStamp = new Date().toUTCString()
        if (!this.state.fullRead.includes(article)) {
          this.setState({
            fullRead: [...this.state.fullRead, {article, timeStamp: timeStamp}]
          },() => console.log(this.state))
        }
      }

      render() {
      return (
        <div>
          <NavBar />
          <div className='ListContainer row'>
          <Switch>
          <Route exact path='/' render={() => {
            return (
              <div>
                <Link to='/articles'><button className='btn default-btn mr-3' >Articles</button></Link>
                <Link to='/visited'><button className='btn default-btn mr-3' >Visited</button></Link>
              </div>
            )
          }}/>
          <Route exact path='/articles' render={() => {
            return (this.state.data.length > 0
                  ?
          <ArticlesList
          articles={this.state.data}
          articlesTotal = {this.state.total} addArticleVisited={this.addArticleVisited}
          />: <p>Loading...</p>
          )
          }} />
          <Route path='/articles/:title' render={(props) => {
            //using the react router match property find the article from this.state.data that matches the article title in the URL path and then pass the object to the ArticleShow component
            let articleId = props.match.params.title
            return <ArticleShow article={this.state.data.find(article => article.title === articleId)} addArticleFullRead={this.addArticleFullRead} />
          }} />

        </Switch>
        <Route exact path='/visited' render={() => {
          return (
        <ArticlesVisited visited={this.state.visited} fullRead={this.state.fullRead} />
        )
        }} />
        </div>
        </div>
      )
    }
  }

export default ListContainer;
