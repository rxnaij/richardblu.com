import React from 'react';
import Icon from '../icon';
import Github from '../icon/github.icon';
import './_footer.scss';

const Footer = () =>
  (<footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="footer-content">
            <a href="https://instagram.com/rxnaij" target="_blank" rel="noopener noreferrer">
              <Icon icon={Github} width={36} height={36} fill={'#fff'} />
            </a>
            <a href="https://github.com/rxnaij" target="_blank" rel="noopener noreferrer">
              <Icon icon={Github} width={36} height={36} fill={'#fff'} />
            </a>
          </div>
          <p>Copyright 2018 Richard Lu</p>
        </div>
      </div>
    </div>
  </footer>);

export default Footer;
