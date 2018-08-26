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

class ContactPage extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <main>
        <h1>Contact</h1>
        <p>Want to get in touch?</p>
        <p>Email me at <a href="mailto:richardblue37@gmail.com">richardblue37@gmail.com</a>.</p>
        <p>Fork my code on <a href="https://github.com/rxnaij">GitHub</a>.</p>
      </main>
    )
  }
}

export default ContactPage