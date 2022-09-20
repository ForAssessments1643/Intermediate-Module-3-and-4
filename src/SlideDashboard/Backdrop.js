import React from 'react'
import './src/SlideDashboard/Backdrop.css'

export default class Backdrop extends React.Component {
  render(){
    return(
      <div
        className="backdrop"
        onClick={this.props.close}
      />
    )
  }
}