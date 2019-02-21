import { FETCH_NEWS, VISITED, FULL_READ } from './types';

const myKey = 'd84da9782868494a97d02c16f764e19d'

export const fetchNews = () => dispatch => {
  fetch(`https://newsapi.org/v2/everything?sources=engadget&apiKey=${myKey}`)
    .then( res => res.json())
    .then( data => {
      dispatch({
        type: FETCH_NEWS,
        payload: data.articles
      })
    })
}

export const addArticleVisited = (article) => dispatch => {
  const timeStamp = new Date().toUTCString()
    dispatch({
      type: VISITED,
      payload: {article, timeStamp:timeStamp}
    })
}

export const addArticleFullRead = (article) => dispatch => {
  const timeStamp = new Date().toUTCString()
    dispatch({
      type: FULL_READ,
      payload: {article, timeStamp:timeStamp}
    })
  window.open(article.url)
}
