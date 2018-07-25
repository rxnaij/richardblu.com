/* global graphql */

import React from 'react';
import Link from 'gatsby-link'
import Features from '../components/features';
import HowTo from '../components/how-to';
'../pages/'

const IndexPage = props =>
  (<main>
    <h1>Welcome to my site! It's my site.</h1>
    <h1>Richard Lu</h1>
    <ul>
      <li>Student</li>
      <li>Aspiring UX designer</li>
      <li>100% organic human being</li>
    </ul>
    <p>Hi! I’m Richard. Thanks for stopping by! This is my website, richardblu.com. Hope you have a nice time.</p>

    <p>I'm a human of New York aspiring to be a UX designer. I care about uplifting and affirming fellow humans in an overwhelmingly technological world.</p>

    <p>You might be looking to learn a little more about what I've worked on in the past. So <Link to="/portfolio/">here's a link to my portfolio.</Link></p>
    <Features data={props.data.allDataJson.edges[0].node.features} />
    <HowTo data={props.data.allDataJson.edges[0].node.howTo} />
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
