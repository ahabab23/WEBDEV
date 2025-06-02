import React from 'react';
import { servicesData, List } from './List';

const AllList = () => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg">
      <List items={servicesData.ALL} />
    </div>
  );
};

export default AllList;