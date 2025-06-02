import React from 'react';
import { servicesData, List } from './List';

const Somalia = () => {
  return (
    <div className="p-6">
      
      
      <List items={servicesData.FEDERAL_GOVERNMENT} />
    </div>
  );
};

export default Somalia;