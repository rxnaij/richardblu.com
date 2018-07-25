/* global graphql */

import React from 'react';
import Features from '../components/features';
import HowTo from '../components/how-to';

const IndexPage = props =>
  (<main>
    <h1>Welcome to my site! It's my site.</h1>
    <h1>Richard Lu</h1>
    <ul>
      <li>Student</li>
      <li>Aspiring UX designer</li>
      <li>100% organic human being</li>
    </ul>
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
