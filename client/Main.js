import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import MainPage from './MainPage'

export default class Main extends Component {
  render () {
    return (
      <div>
        <h1>Aphetech</h1>
        <Route exact path='/' component={MainPage} />
      </div>
    )
  }
}
