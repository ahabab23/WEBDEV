import React from 'react';
import { servicesData, List } from './List';

const Saas = () => {
  return (
    <div className="p-6">
      
      <List items={servicesData.SAAS} />
    </div>
  );
};

export default Saas;