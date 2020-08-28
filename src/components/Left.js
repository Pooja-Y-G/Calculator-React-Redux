import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Reducer1Actions } from "../Calci/store/actions";

export class Left extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h2 style={{ paddingLeft: "20px" }}>Operations</h2>
        </div>
        <div className="value-container">
          <input type="text" disabled="false" value={this.props.red1.value} />
        </div>
        <div className="buttons-container">
          {this.props.red1.btns.map((item) => {
            if (item === "C") {
              return (
                <button onClick={() => this.props.r1clear()}>{item}</button>
              );
            } else if (item === "=") {
              return (
                <button
                  onClick={() => this.props.r1equals(this.props.red1.value)}
                >
                  {item}
                </button>
              );
            } else {
              return (
                <button onClick={() => this.props.r1addition(item)}>
                  {item}
                </button>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  red1: state.reducer1,
});

const mapDispatchToProps = (dispatch) => ({
  r1addition: bindActionCreators(Reducer1Actions.r1addition, dispatch),
  r1clear: bindActionCreators(Reducer1Actions.r1clear, dispatch),
  r1equals: bindActionCreators(Reducer1Actions.r1equals, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Left);
