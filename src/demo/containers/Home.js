import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h3>Demo home page</h3>
      <Link to='/waterfall'>Waterfall</Link>
    </div>
  )
}

export default connect()(Home)
