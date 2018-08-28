import React, { Component } from "react"

const PortfolioItem = ({ children }) => {
  return(
    <div 
      style={{
        // boxShadow: "0px 4px 4px",
        // width: "280px",
        height: "162px",
        backgroundColor: "#f2f2f2",
        marginBottom: "2rem",
        border: "2px solid black"
      }}
      className="col-xs-10 offset-xs-1 col-sm-6 offset-sm-3"
    >
      {children}
      <div>

      </div>
      <div>
        <p>Website</p>
        <p>August 2017</p>
        <p>Web, UX</p>
      </div>
    </div>
  )
}

const PortfolioPlaceholder = () => (
  <div
    style={{
      // display: "flex",
      // flexDirection: "column",
      // justifyContent: "center",
      // alignItems: "center"
    }}
  >
    <PortfolioItem />
    <PortfolioItem />
    <PortfolioItem />
    <PortfolioItem />
  </div>
)

class PortfolioPage extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <main>
        <h1>Portfolio</h1>
        <PortfolioPlaceholder />
      </main>
    )
  }
}

export default PortfolioPage