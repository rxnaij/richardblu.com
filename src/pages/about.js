import React, { Component } from "react"

const ImgBox = ({ children }) => {
  return (
    <div
      style={{
        display: "block",
        width: "200px",
        height: "200px",
        backgroundColor: "lightgray",
        margin: "1rem auto"
      }}
    >
      {children}
    </div>
  )
}

class AboutPage extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <main>
        <h1>Hi! I'm Richard.</h1>
        <ImgBox />
      </main>
    )
  }
}

export default AboutPage