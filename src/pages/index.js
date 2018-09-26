/* global graphql */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import RecentWork from '../components/recentWork';
import Img from 'gatsby-image';
import Layout from '../components/layout'

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

const IndexPage = props => (
  <Layout>
    <main>
      <section className="introduction">
        <div className="row mb-5">
          <div className="col-xs-12 col-lg-6 px-0 mb-3">
            <Img 
                alt="Richard Lu"
                sizes={props.data.profileImage.childImageSharp.sizes} 
              />
          </div>
          <div className="col-xs-12 col-lg-6">
            <h1 className="">
              <span className="">Richard Lu</span>
              <br />
              <small className="text-muted">student, aspiring UX designer, 100% organic human being</small>
            </h1>
            <p className="lead">Welcome to my site! It's my site.</p>
            <p>Hi! I’m Richard. Thanks for stopping by! This is my website, richardblu.com. Hope you have a nice time.</p>
            <p>I'm a human of New York aspiring to be a UX designer. I care about uplifting and affirming fellow humans in an overwhelmingly technological world.</p>
            <p>I'm putting my current work on this site. If you'd like to see some old projects, <a href="http://rxnaij.github.io/portfolio">take a look at my old portfolio website.</a></p>
          </div>
        </div>
      </section>

      <RecentWork data={props.data.allDataJson.edges[0].node.recentWork} />

      <div className="row mb-5">
        <div className="col-12">
          <h2>Contact me</h2>
          <p>Want to get in touch?</p>
          <p>Email me at <a href="mailto:richardblue37@gmail.com">richardblue37@gmail.com</a>.</p>
          <p>Fork my code on <a href="https://github.com/rxnaij">GitHub</a>.</p>
        </div>
      </div>
      
    </main>
  </Layout>
  );

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
          recentWork {
            title
            date
            link
            topic
            type
          }
        }
      }
    }

    profileImage: file(relativePath: {eq: "profile-md.jpg"} ) {
      childImageSharp {
        sizes(maxWidth: 1000) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;