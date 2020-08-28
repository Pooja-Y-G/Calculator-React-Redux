import React, { Component } from "react";
import { connect } from "react-redux";

export class Right extends Component {
  render() {
    return (
      <div>
        <span>
          <h2 style={{ fontSize: "20px", color: "green" }}>Results</h2>
        </span>
        <div style={{ paddingLeft: "40px" }}>
          <ul>
            {this.props.red1.history.map((item) => (
              <li>{item + "=" + eval(item)}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  red1: state.reducer1,
});

export default connect(mapStateToProps, {})(Right);
