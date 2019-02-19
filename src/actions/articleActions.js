import { FETCH_NEWS, VISITED, FULL_READ } from './types';

const myKey = `${process.env.REACT_APP_API_KEY}`

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
