import React, { Component } from "react";
import Left from "./Left";
import Right from "./Right";
import { Row, Col } from "antd";

export class Master extends Component {
  render() {
    return (
      <div>
        <div>
          <h2 style={{ textAlign: "center", color: "blue" }}>Calculator</h2>
          <Row>
            <Col span={12}>
              <Left />
            </Col>
            <Col span={12}>
              <main style={{ backgroundColor: "yellow", fontSize: "20px" }}>
                <Right />
              </main>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Master;
