import React from 'react';

import './_recentWork.scss';

const RecentWork = props =>
  (<section id="recentWork">
    <div className="row mb-5 recentWork">
      <div className="col-sm-12 col-lg-6 recentWork-header">
        <h2 className="recentWork-title d-inline-block mx-auto">Recent Work</h2>
      </div>
      <div className="col-sm-12 col-lg-6 recentWork-content">
        <ul className="recentWork-list">
          {props.data.map((item, i) =>
            (<li className="recentWork-list-item" key={i}>
              <ul className="recentWork-list-item-details">
                <li className="recentWork-list-item-details-title"><a href={item.link}>{item.title}</a></li>
                <li className="recentWork-list-item-details-date">{item.date}</li>
                <li className="recentWork-list-item-details-type">{item.type}</li>
                <li className="recentWork-list-item-details-topic">{item.topic}</li>
              </ul>
            </li>),
          )}
        </ul>
      </div>
    </div> 
  </section>);

export default RecentWork;
