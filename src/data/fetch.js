import React, { Component } from 'react'
import { Fetch } from 'react-data-fetching'

export default class Foo extends Component {
  render() {
    return (
      <Fetch
        url="https://api.iextrading.com/1.0/stock/aapl/quote?displayPercent=true"
        method = 'GET'>
        render (){
          <div>ok</div>
        }
      </Fetch>
    )
  }
}