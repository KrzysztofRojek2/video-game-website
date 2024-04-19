import React from 'react';
import './footerColumn.css';

const FooterColumn = ({ title, items, span }) => {
  return (
    <div className={`footer-column column-span-${span}`}>
      <h3>{title}</h3>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default FooterColumn;