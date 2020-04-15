import React, { useEffect } from 'react';
import './App.css';

import { connect } from 'react-redux'

import { getData } from './actions/actions'

import Header from './components/header'
import BoxContainer from './components/BoxContainer'

const App = props => {
  useEffect(() => {
    props.getData()
  }, [])
  return (
    <div className="App">
      <Header />
      <BoxContainer />
    </div>
  );
}

export default connect(null, { getData })(App)
