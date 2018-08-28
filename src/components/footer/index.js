import React from 'react';
import Icon from '../icon';
import Github from '../icon/github.icon';
import LinkedIn from '../icon/linkedin-brands.icon';
import Instagram from '../icon/instagram-brands.icon';
import './_footer.scss';

const Footer = () =>
  (<footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="footer-content">
            <a href="https://instagram.com/rxnaij" target="_blank" rel="noopener noreferrer">
              <Icon icon={Instagram} width={36} height={36} fill={'#fff'} />
            </a>
            <a href="https://www.linkedin.com/in/richard-lu-167a4050/" target="_blank" rel="noopener noreferrer">
              <Icon icon={LinkedIn} width={36} height={36} fill={'#fff'} />
            </a>
          </div>
          <p>Copyright 2018 Richard Lu</p>
          <p>Made using Gatsby.js</p>
        </div>
      </div>
    </div>
  </footer>);

export default Footer;
