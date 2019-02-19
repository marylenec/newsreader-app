import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../actions/articleActions'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ArticlesList from '../components/ArticlesList';
import ArticlesVisited from '../components/ArticlesVisited';
import ArticleShow from './ArticleShow';
import NavBar from '../components/NavBar';
import Home from '../components/Home';

  class ListContainer extends Component {

      componentDidMount() {
        this.props.fetchNews()
      }

      render() {
      return (
        <BrowserRouter>
          <div>
          <NavBar/>
          <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/articles' render={() => {
            return ( this.props.data.length > 0 ?
              <main className='ListContainer row'>
                <ArticlesList
                articles={this.props.data}
                // addArticleVisited={this.addArticleVisited}
                />
              </main>
              : <main className='ListContainer row'><p>Loading...</p></main>
            )}} />
          <Route path='/articles/:title' render={(props) => {
            //using the react router match property find the article from this.props.data that matches the article title in the URL path and then pass the object to the ArticleShow component
            let articleId = props.match.params.title
            return   <main className='ListContainer row'>
            <ArticleShow article={this.props.data.find(article => article.title === articleId)}
             // addArticleFullRead={this.addArticleFullRead}
            /></main>
          }} />
          </Switch>
          <Route exact path='/visited' render={() => {
            return (
              <main className='ListContainer row'><ArticlesVisited
            visited={this.props.visited} fullRead={this.props.fullRead}
            /></main>
          )}} />
          </div>
      </BrowserRouter>
      )
    }
  }

      const mapStateToProps = (state) => {
        //data: is whats referenced in this.props...
        //state.data from index.js rootReducer
        //.data what we want from articleReducer.js
        return {data: state.data.data,
        visited: state.data.visited,
        fullRead: state.data.fullRead}
      }

export default connect(mapStateToProps, { fetchNews })(ListContainer);
