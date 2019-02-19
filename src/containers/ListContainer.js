import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../actions/articleActions'
import {Route, Switch, Link} from 'react-router-dom';
import ArticlesList from '../components/ArticlesList';
import ArticlesVisited from '../components/ArticlesVisited';
import ArticleShow from './ArticleShow';
import NavBar from '../components/NavBar';

// const myKey = `${process.env.REACT_APP_API_KEY}`

  class ListContainer extends Component {

      // state = {
      //   data: [],
      //   visited: [],
      //   fullRead: []
      // }

      componentDidMount = () => {
        // this.fetchNews()
        this.props.fetchNews()
      }

      // fetchNews = () => {
      //   fetch(`https://newsapi.org/v2/everything?sources=engadget&apiKey=${myKey}`)
      //   .then( res => res.json())
      //   .then( data => {
      //     this.setState({
      //       data: data.articles
      //       })
      //   })
      //   .catch(err => {
      //     err.text().then(errorMessage => {
      //       'Something went wrong'
      //     })
      //   })
      // }

      addArticleVisited = (article) => {
        const timeStamp = new Date().toUTCString()
        if (!this.state.visited.includes(article)) {
          this.setState({
            visited: [...this.state.visited, {article, timeStamp: timeStamp}]
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
        <React.Fragment>
          <NavBar />
          <main className='ListContainer row'>
          <Switch>
          <Route exact path='/' render={() => {
            return (
              <section>
                <Link to='/articles'><button className='btn default-btn mr-3' >Articles</button></Link>
                <Link to='/visited'><button className='btn default-btn mr-3' >Visited</button></Link>
              </section>
            )
          }}/>
          <Route exact path='/articles' render={() => {
            return ( this.props.data.length > 0 ?
              <ArticlesList
              articles={this.props.data}
              addArticleVisited={this.addArticleVisited}
              />: <p>Loading...</p>
            )}} />
          <Route path='/articles/:title' render={(props) => {
            //using the react router match property find the article from this.props.data that matches the article title in the URL path and then pass the object to the ArticleShow component
            let articleId = props.match.params.title
            return <ArticleShow article={this.props.data.find(article => article.title === articleId)} addArticleFullRead={this.addArticleFullRead} />
          }} />
          </Switch>
          <Route exact path='/visited' render={() => {
            return (
          <ArticlesVisited
            visited={this.state.visited} fullRead={this.state.fullRead}
            />
          )}} />
          </main>
        </React.Fragment>
      )
    }
  }

const mapStateToProps = state => ({
  //state.articles from index.js rootReducer
  //.data from articleReducer.js
  data: state.data.data
})

export default connect(mapStateToProps, { fetchNews })(ListContainer);
