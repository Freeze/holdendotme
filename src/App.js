import './App.css';
import React from 'react';
import myJson from './data.json'

function Entry(props){
  // return(
  //   <div className="square">
  //     <p className="date"><b>Date:</b> {props.obsDt}</p>
  //     <p className="loc"><b>Location Name:</b> {props.locName}</p>
  //     <p className="misc"><b>Coordinates:</b> {props.lat},{props.lng}</p>
  //     <p className="misc"><b>Number Observed:</b> {props.howMany}</p>
  //   </div>
  // )
  return(
    <span className="square">
      <p className="misc"> {props.speciesCode} • {props.obsDt} • {props.locName} • {props.lat},{props.lng} • {props.howMany}</p>
    </span>
  )
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myData: myJson,
      selectedOwl: "Northern Saw Whet Owl"
    };
  }

  renderHeader(title) {
    return(
      <React.Fragment>
      <h3 className="headerText">{title}</h3>
      </React.Fragment>
    )
  }

  renderOwls() {
    return(
      this.state.myData.map((data, idx) =>
        <Entry
          speciesCode={data.speciesCode}
          obsDt={data.obsDt}
          locName={data.locName}
          lat={data.lat}
          lng={data.lng}
          howMany={data.howMany}
        />
      )
    )
  }


  renderWx() {
    return(
      this.state.myData.map((data, idx) =>
      ""
      )
    )
  }

  render() {
    return (
      <div id="pageParent" className="pageParent">
        <div id="containerParent" className="containerParent">
          <div id="owlContainer" className="genericContainer">
            <div id="owlHeader" className="header">
              {this.renderHeader("owls")}
            </div>
            {this.renderOwls()}
          </div>
          <div id="afdContainer" className="genericContainer">
            <div id="afdHeader" className="header">
              {this.renderHeader("mpx afd")}
            </div>
            <p className="misc">2</p>
          </div>
          <div id="spcContainer" className="genericContainer">
            <div id="spcHeader" className="header">
              {this.renderHeader("spc")}
            </div>
            <p className="misc">3</p>
          </div>
          <div id="mesoscaleContainer" className="genericContainer">
            <div id="mesoscaleHeader" className="header">
              {this.renderHeader("3cape")}
            </div>
            <p className="misc">4</p>
          </div>
        </div>
      </div>
    )
  }

}

export default Main;
