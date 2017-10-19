import React from 'react'
const ReactGridLayout = require('react-grid-layout')
import './react-grid-layout.css'
import './Waterfall.less'

const cards = [
  {"w": 2, "h": 2},
  {"w": 2, "h": 2},
  {"w": 1, "h": 1},
  {"w": 1, "h": 1},
  {"w": 2, "h": 1},
  {"w": 1, "h": 2}
]

const CardItem = (props)=>{
  const item = props.item;
  return (
    <div className="card-item">{item.i}</div>
  )
}

class MyfirstGrid extends React.Component {
  render() {
    const layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];
    return (
      <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={100} width={1200}>
        {layout.map((item)=>{
          return (
            <div key={item.i}>
              <CardItem item={item}/>
            </div>
          )
        })}
      </ReactGridLayout>
    )
  }
}
export default class Waterfall extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){

  }
  render(){
    return (
      <div className="waterfall-wrapper">
        <MyfirstGrid/>
      </div>
    )
  }
}
