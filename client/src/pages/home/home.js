import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSubreddit, fetchPostsIfNeeded } from './actions'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: props.selectedSubreddit
    }
    this.onTextInput = this.onTextInput.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  componentDidMount () {
    const { selectedSubreddit } = this.props
    this.fetchPost(selectedSubreddit)
  }
  fetchPost (text) {
    const { dispatch } = this.props
    dispatch(fetchPostsIfNeeded(text))
  }
  onTextInput (e) {
    this.setState({text: e.target.value})
  }
  onSubmit () {
    const { dispatch } = this.props
    const { text } = this.state
    if (text) {
      dispatch(selectSubreddit(text))
      this.fetchPost(text)
    }
  }
  render () {
    const { posts } = this.props
    const { text } = this.state

    return (
      <div>
        <h3>home</h3>
        <div className="">
          <input type="text" onChange={this.onTextInput}/>
          <button onClick={this.onSubmit}>提交</button>
          <span>  {text}</span>
          {posts && posts.map((p, i) => {
            return (
              <p key={i}>{i + 1}. {p.title}</p>
            )
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const home = state.reducers.home
  const { selectedSubreddit, postsBySubreddit } = home
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: []
  }

  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(Home)
