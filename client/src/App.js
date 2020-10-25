import React, { useState, useEffect } from 'react'
import './App.css'
import Filter from './components/Filter'
import Post from './components/Post'

import LoadingBasketContents from './assets/images/LoadingBasketContents.gif'

const App = () => {
  const [tweets, setTweets] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    let timeout = setTimeout(() => {
      if (search !== '') {
        fetch(`/api/tweets?q=${search}`)
          .then(res => res.json())
          .then(data => {
            console.log(data.statuses)
            setTweets(data.statuses)
          })
      }
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [search])

  return (
    <div className="App d-flex justify-content-center">
      <div className="container">
        <Filter value={search} setValue={setSearch} />
        {
          tweets.length !== 0 ? 
            tweets.map(tweet => <Post tweet={tweet} />) : <img style={{height: '100px', width:'100px', marginLeft: '47%' }} src={LoadingBasketContents} alt=""/>
        }
      </div>
    </div>
  )
}

export default App
