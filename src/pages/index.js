/* global graphql */

import React from 'react';
import Link from 'gatsby-link'
import Features from '../components/features';
import HowTo from '../components/how-to';
import ProfileImg from "../../images/profile.jpg"
'../pages/'

const PortfolioItem = () => {
  return(
    <div 
      style={{
        boxShadow: "2px 2px",
        width: "280px",
        height: "162px",
        backgroundColor: "#f2f2f2",
        paddingLeft: "145px",
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

const PortfolioFeature = () => {
  return(
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <PortfolioItem />
      {/* <PortfolioItem /> */}
    </div>
  )
}

const IndexPage = props =>
  (<main>
    <div className="row">
      <div className="col-sm-6 offset-sm-1">
        <h1>Welcome to my site! It's my site.</h1>
        <p>Hi! I’m Richard. Thanks for stopping by! This is my website, richardblu.com. Hope you have a nice time.</p>
        <p>I'm a human of New York aspiring to be a UX designer. I care about uplifting and affirming fellow humans in an overwhelmingly technological world.</p>
        <p>You might be looking to learn a little more about what I've worked on in the past. I wish I could show you, but my site is currently under construction. So for the time being, <a href="http://rxnaij.github.io/portfolio">take a look at my old portfolio website, which has some of my previous projects.</a></p>
      </div>
      <div className="col-sm-4 offset-sm-1">
        <img className="mb-2" src={ProfileImg} alt="Richard Lu" />
        <h2>Richard Lu</h2>
        <ul>
          <li>Student</li>
          <li>Aspiring UX designer</li>
          <li>100% organic human being</li>
        </ul>
      </div>
    </div>

    {/* <Features data={props.data.allDataJson.edges[0].node.features} />
    <HowTo data={props.data.allDataJson.edges[0].node.howTo} /> */}
  </main>);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allDataJson {
      edges {
        node {
          features {
            title
          }
          howTo {
            title
          }
        }
      }
    }
  }
`;
