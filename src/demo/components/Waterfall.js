import React from 'react'
const ReactGridLayout = require('react-grid-layout')
import { BinPacking2D } from '../utils/BinPacking2D'
import './react-grid-layout.css'
import './Waterfall.less'

const cards = [
  {"w": 2, "h": 2},
  {"w": 2, "h": 2},
  {"w": 1, "h": 1},
  {"w": 2, "h": 1},
  {"w": 1, "h": 2},
  {"w": 1, "h": 1},
  {"w": 1, "h": 1},
  {"w": 1, "h": 1},
  {"w": 1, "h": 2},
  {"w": 2, "h": 1},
  {"w": 2, "h": 1},
]
const CardItem = (props)=>{
  const item = props.item;
  return (
    <div className="card-item">{item.i}</div>
  )
}

class MyfirstGrid extends React.Component {
  getpackedRects(){
    return BinPacking2D(cards, 3)
  }
  render() {
    const packedRects = this.getpackedRects()
    packedRects.forEach((rect, index)=>{rect.i = `${index}`})
    return (
      <ReactGridLayout className="layout" layout={packedRects} cols={3} rowHeight={200} width={900}>
        {packedRects.map((item, index)=>{
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
