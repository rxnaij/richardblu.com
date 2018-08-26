import React from 'react';
import Link from "gatsby-link"

import './_header.scss';

const Header = () =>
  (<header className="header">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="header-content">
            <span className="header-logo">
              <Link to="/" className="text-light">richardblu</Link>
            </span>
            <nav className="header-nav">
              <ul className="header-nav-list">
                <li className="header-nav-list-item">
                  <Link to="/portfolio/" className="text-light">portfolio</Link>
                </li>
                <li className="header-nav-list-item">
                  <Link to="/about/" className="text-light">about</Link>
                </li>
                <li className="header-nav-list-item">
                  <Link to="/contact/" className="text-light">contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>);

const HeaderTemp = () =>
(<header className="header">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="header-content">
          <span className="header-logo">
            <Link to="/" className="text-light">richardblu</Link>
          </span>
          <nav className="header-nav text-light">
            Under construction :)
          </nav>
        </div>
      </div>
    </div>
  </div>
</header>); 

export default HeaderTemp;
