import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  light: state,
});

const LightComponent = ({ light, dispatch }) => (
  <div>
    <p>{light}</p>
    <button type="button" onClick={() => dispatch({ type: 'SWITCH' })}>Switch</button>
  </div>
);
export default connect(mapStateToProps)(LightComponent);
