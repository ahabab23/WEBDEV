import React from 'react';
import { servicesData, List } from './List';

const Kenya = () => {
  return (
    <div className="p-6 ">
      
      <List items={servicesData.COUNTY_GOVERNMENTS} />
    </div>
  );
};

export default Kenya;