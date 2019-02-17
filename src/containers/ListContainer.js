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
        fullRead: [],
        position: 6
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
      }

      updatePosition = () => {
        this.setState({
          position: this.state.position + 6
        })
      }

      addArticleVisited = (article) => {
        if (!this.state.visited.includes(article)) {
          this.setState(state => {
            state.visited.push(article)
            return state
          })
        }
      }

      addArticleFullRead = (article) => {
        // console.log(article)
        if (!this.state.fullRead.includes(article)) {
          this.setState(state => {
            state.fullRead.push(article)
            return state
          }, () => console.log(this.state))
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
          <ArticlesList articles={this.state.data.slice(0, this.state.position)}
          articlesTotal = {this.state.total} addArticleVisited={this.addArticleVisited}
          updatePosition={this.updatePosition}
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
