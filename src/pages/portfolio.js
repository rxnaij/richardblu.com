import React, { Component } from "react"

const PortfolioItem = () => {
  return(
    <div 
      style={{
        boxShadow: "2px 2px",
        width: "280px",
        height: "162px",
        backgroundColor: "#f2f2f2",
        paddingLeft: "50%",
        paddingTop: "2rem",
        fontSize: "14px",
        marginBottom: "2rem"
      }}
    >
      <p>Website</p>
      <p>August 2017</p>
      <p>Web, UX</p>
    </div>
  )
}

const PortfolioPlaceholder = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
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