import React from 'react';
import { servicesData, List } from './List';

const SME = () => {
  return (
    <div className="p-6">
      
      <List items={servicesData.SMES} />
    </div>
  );
};

export default SME;