import React from "react";
import { connect } from "react-redux";

const mapCountToProps = (count) => ({
  number: count,
});

const CountComponent = ({ number, dispatch }) => (
  <div>
    <p>{number}</p>
    <button type="button" onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
    <button type="button" onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    <button type="button" onClick={() => dispatch({ type: 'INCREMENT10' })}>+10</button>
    <button type="button" onClick={() => dispatch({ type: 'DECREMENT10' })}>-10</button>
    <button type="button" onClick={() => dispatch({ type: 'RESET' })}>Reset</button>

  </div>
);
export default connect(mapCountToProps)(CountComponent);
