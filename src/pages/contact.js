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
        <h1>Hi! I'm Richard.</h1>
        <p>Hey again! If you're here, you're probably wondering who exactly am I.</p>
        <p>Well, my name is Richard Lu. I was born and raised in New York City. Fun fact: I've been a student in the NYC public school system all my life. Represent!</p>
        <p>I’m a Macaulay Honors student at Hunter College, located in the City University of New York. I'm studying Interaction Design through CUNY Baccalaureate for Unique and Interdisciplinary Studies. (Whew, that's an awful lot of labels....)</p>
        <p>You could say I'm a bit of a "late bloomer" designer. I was first attracted to design in my second year of college after visiting an exhibit at the Cooper Hewitt museum for a class assignment. In that same class, I first learned about UX. What captivated me then (and still now) is the thoughtfulness that goes into different designs from urban planning to user interfaces.</p>
        <p>Besides design, I'm passionate about activism. I'm always reflecting on Asian American identity, mental health, and technology ethics.</p>
        <p>In my spare time, I play (a LOT of) DDR at the local arcade, dabble in photography, and noodle around on Reddit.</p>
        <p>As a last point, I'd like to recall this quote by graphic designer and artist Mars Dorian on Unmistakable Creative which I think suits me very well:</p>
        <blockquote>"as an introvert, I love humans--I just hate talking to them".</blockquote>
        <p>That's the long and short of it! Take your time. Hope to see you around, and talk soon.</p>
        <ImgBox />
      </main>
    )
  }
}

export default ContactPage