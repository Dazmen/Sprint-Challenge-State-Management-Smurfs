import React, { useEffect } from "react";
import { connect } from 'react-redux';
import "./App.css";

import { getSmurfs } from './actions/getSmurfs';
import SmurForm from './components/smurForm';
import SmurfList from './components/smurfList';

const App = ({getSmurfs}) => {
    useEffect(() => {
      getSmurfs();
    },[])

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurForm />
      <SmurfList />
    </div>
  );
}

// const mapStateToProps = (state) => {
//   smurfs: state.smurfs
// }

export default connect(() => {}, { getSmurfs })(App);
