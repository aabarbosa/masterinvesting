import React, { Component } from 'react'
import { Fetch } from 'react-data-fetching'

export default class Foo extends Component {
  render() {
    return (
      <Fetch
        url="https://api.iextrading.com/1.0/stock/aapl/quote?displayPercent=true"
        method = 'GET'
      >
        {({ data }) => (
         <view>
            <text>{data.name}
          <h1>symbol</h1>
          <p>{data.symbol}</p>
          <p>{data.companyName}</p>
          <p>{data.primaryExchange	}</p>
          <p>{data.marketCap}</p>
          <p>{data.symbol}</p>
          <p>{data.open}</p>
          </text>

         </view>
        )}
      </Fetch>
    )
  }
}