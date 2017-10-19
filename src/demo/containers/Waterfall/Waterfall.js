import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Waterfall from '../../components/Waterfall.js'

const WaterfallContainer = () => {
  return (
    <div>
      <Link to='/'>Demo home</Link>
      <h3>Demo waterfall</h3>
      <Waterfall/>
    </div>
  )
}

export default connect()(WaterfallContainer)
