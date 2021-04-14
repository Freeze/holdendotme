import './App.css';
import React from 'react';


function Entry(props){
  return(
    <span className="square">
      <p
        className="owlLink"
        onClick={(e) => {
          e.preventDefault();
          window.open(props.gmapUrl)
        }}
        > {props.speciesCode} • {props.obsDt} • {props.locName} • {props.lat},{props.lng} • {props.city} • {props.howMany}</p>
    </span>
  )
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barredOwls: [],
      greatHornedOwls: []
    };
  }

  renderHeader(title) {
    return(
      <React.Fragment>
      <h3 className="headerText">{title}</h3>
      </React.Fragment>
    )
  }

  renderOwls(owlList) {
    return(
      owlList.map((data, idx) =>
        <Entry
          key={data.obsDt}
          speciesCode={data.speciesCode}
          obsDt={data.obsDt}
          locName={data.locName}
          city={data.city}
          lat={data.lat}
          lng={data.lng}
          howMany={data.howMany}
          gmapUrl={data.gmapUrl}
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

  componentDidMount() {
    fetch('brdowl.json').then(response => {
      response.json().then(data => {
        this.setState({barredOwls: data})
      })
    })
    fetch('grhowl.json').then(response => {
      response.json().then(data => {
        this.setState({greatHornedOwls: data})
      })
    })

  }

  render() {
    return (
      <div id="pageParent" className="pageParent">
        <div id="containerParent" className="containerParent">
          <div id="barredOwlContainer" className="genericContainer">
            <div id="barredOwlHeader" className="header">
              {this.renderHeader("barred owls - click for google map")}
            </div>
            {this.renderOwls(this.state.barredOwls)}
          </div>
          <div id="greatHornedOwlContainer" className="genericContainer">
            <div id="greatHornedOwlHeader" className="header">
              {this.renderHeader("great horned owls - click for google map")}
            </div>
            {this.renderOwls(this.state.greatHornedOwls)}
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
