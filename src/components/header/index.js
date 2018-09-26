import React from 'react';
import { Link } from "gatsby"

import './_header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header-content">
              <span className="header-logo">
                <Link to="/" className="text-light">richardblu</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );

}

export default Header;