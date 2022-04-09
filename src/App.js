import './App.css';
import {connect} from 'react-redux'
import {increment} from './actions'
import {decrement} from './actions'


function App({local_variable,increment,decrement}) {
  return (
    <div className="App">
        <h2>{local_variable}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  );
}

const mapStateToProps = state => ({
    local_variable:state
})

export default connect(mapStateToProps,{increment,decrement})(App);
