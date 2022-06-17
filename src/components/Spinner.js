import React, { Component } from 'react'
import loading from "./loading.gif"

export default class  extends Component {
  render() {
    return (
      <div>
        <img className='my-3 text-center' src={loading} alt="loading"/>
      </div>
    )
  }
}
