import React, { Component } from "react";
import "../css/FlipCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col} from "react-bootstrap";
import Flippy, { FrontSide, BackSide } from "react-flippy";

export default class FlipCard extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Row className="first">
          <Col id="phase1">
            <Flippy
              flipOnHover={false} // default false
              flipOnClick={true} // default false
              flipDirection="horizontal" // horizontal or vertical
              ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
              style={{ width: "288px", height: "300px", paddingTop: "10px", marginLeft:"auto", marginRight:"auto" }} /// these are optional style, it is not necessary
            >
              <FrontSide
                style={{
                  backgroundColor: "#000",
                  height: "285px",
                  width: "270px",
                  paddingTop: "0",
                  paddingLeft: "0",
                  
                }}
              >
              <img id= "image1" src= {require('../flip images/vees.png')} alt="vees website"  width= "271" height="285"  />
              </FrontSide>
              <BackSide style={{ backgroundColor: "#175852" }}>
              <h5 id="title">Vees Oven Gh</h5>
              <p id="text">Vees Oven is a local bakery business specialized in cakes and other pasteries of all types.<br/>
              <a href="https://veesovengh.com" target="_blank" rel="noreferrer">Visit Vees Oven Gh</a> </p>
              </BackSide>
            </Flippy>
          </Col>
          <Col>
            <Flippy
              flipOnHover={false} // default false
              flipOnClick={true} // default false
              flipDirection="horizontal" // horizontal or vertical
              ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
              style={{ width: "200px", height: "200px" }} /// these are optional style, it is not necessary
            >
              <FrontSide
                style={{
                  backgroundColor: "#41669d",
                }}
              >
              <img id= "image1" src= {require('../flip images/dk.png')} alt="vees website"  width= "288" height="285"/>
              </FrontSide>
              <BackSide style={{ backgroundColor: "#175852" }}>ROCKS</BackSide>
            </Flippy>
          </Col>
          <Col id="phase1">
            <Flippy
              flipOnHover={false} // default false
              flipOnClick={true} // default false
              flipDirection="horizontal" // horizontal or vertical
              ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
              style={{ width: "300px", height: "300px", padding: "0", }} /// these are optional style, it is not necessary
            >
              <FrontSide
                style={{
                  backgroundColor: "#fff",
                }}
              >
              <img id= "image1" src= {require('../flip images/loan.png')} alt="burger"  width= "288" height="285"/>
              </FrontSide>
              <BackSide style={{ backgroundColor: "#175852" }}>ROCKS</BackSide>
            </Flippy>
          </Col>
        </Row>

        <Row className="second">
          <Col id="phase2">
            <Flippy
              flipOnHover={false} // default false
              flipOnClick={true} // default false
              flipDirection="horizontal" // horizontal or vertical
              ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
              style={{ width: "200px", height: "200px" }} /// these are optional style, it is not necessary
            >
              <FrontSide
                style={{
                  backgroundColor: "#41669d",
                }}
              >
              <img id= "image1" src= {require('../flip images/safepay.png')} alt="vees website"  width= "288" height="285"/>
              </FrontSide>
              <BackSide style={{ backgroundColor: "#175852" }}>ROCKS</BackSide>
            </Flippy>
          </Col>
          <Col>
            <Flippy
              flipOnHover={false} // default false
              flipOnClick={true} // default false
              flipDirection="horizontal" // horizontal or vertical
              ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
              style={{ width: "200px", height: "200px" }} /// these are optional style, it is not necessary
            >
              <FrontSide
                style={{
                  backgroundColor: "#41669d",
                }}
              >
              <img id= "image1" src= {require('../flip images/deov.png')} alt="vees website"  width= "288" height="285"/>
              </FrontSide>
              <BackSide style={{ backgroundColor: "#175852" }}>ROCKS</BackSide>
            </Flippy>
          </Col>

          <Col>
            <Flippy
              flipOnHover={false} // default false
              flipOnClick={true} // default false
              flipDirection="horizontal" // horizontal or vertical
              ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
              style={{ width: "200px", height: "200px" }} /// these are optional style, it is not necessary
            >
              <FrontSide
                style={{
                  backgroundColor: "#41669d",
                }}
              >
              <img id= "image1" src= {require('../flip images/ui.png')} alt="vees website"  width= "288" height="285"/>
              </FrontSide>
              <BackSide style={{ backgroundColor: "#175852" }}>ROCKS</BackSide>
            </Flippy>
          </Col>
        </Row>
      </div>
    );
  }
}
