import React from 'react';
import Title from './Title';
import services from '../constants/services';

const Services = () => {
  return (
    <section className="section">
      <Title title="Serviços" />
      <div className="section-center services-center">
        {services.map(({ id, icon, title, text }) => (
          <article key={id} className="service">
            {icon}
            <h4>{title}</h4>
            <div className="underline"></div>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
