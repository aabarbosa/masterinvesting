import axios from 'axios'
import React, { Component } from 'react'
import { Fetch } from 'react-data-fetching'
import { View, Text } from 'react-native'

const API_URL = 'https://api.iextrading.com/1.0'
const getData = (stock) => {
  return axios.get(`${API_URL}/stock/${stock}/quote?displayPercent=true`)
    .then( response => response.data )
    .catch( err => console.log(err) )
}

export default class Foo extends Component {
  render() {
    return (
      <Fetch
        url="https://api.iextrading.com/1.0/stock/aapl/quote?displayPercent=true"
        method = 'GET'
      >
        {({ data }) => (
         <View>
            <Text>{data.name}
          <h1>symbol</h1>
          <p>{data.symbol}</p>
          <p>{data.companyName}</p>
          <p>{data.primaryExchange	}</p>
          <p>{data.marketCap}</p>
          <p>{data.symbol}</p>
          <p>{data.open}</p>
          </Text>

         </View>
        )}
      </Fetch>
    )
  }
}