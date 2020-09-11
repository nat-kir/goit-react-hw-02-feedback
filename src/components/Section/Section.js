import React from 'react';
import PropTipes from 'prop-types';
// import './Section.scss';

const Section = ({ title, children }) => (
  <section>
    <h2 className="title">{title}</h2>
    {children}
  </section>
);

Section.propTipes = {
  title: PropTipes.string.isRequired,
  children: PropTipes.node.isRequired,
};

export default Section;
