import React from 'react';
import Detainee from "../../Assets/detainee2.jpg";
import Fibre from "../../Assets/fibre.jpg";
import Dci from "../../Assets/data_center-1.jpg";
import Vehicle from "../../Assets/vehicle_reg.jpg";
import Bio from "../../Assets/hr_biometrics.jpg";
import Cam from "../../Assets/safe.jpg";
import Nai from "../../Assets/nairobi_county.jpg";
import Revenue from "../../Assets/revenue_collections.jpg";
import Account from "../../Assets/myaccount.jpg";
import Micro from "../../Assets/micro-finance3.jpg";
import Loan from "../../Assets/digital_lending.png";

// eslint-disable-next-line react-refresh/only-export-components
export const servicesData = {
  ALL: [
    {
      id: 'detainee-case-management',
      title: 'Detainee Case Management Information System (DeMIS Baarista)',
      description: 'Federal Government Of Somalia',
      image: Detainee,
      link: '/detainee-case-management'
    },
    {
      id: 'it-fiber-infrastructure',
      title: 'IT Fiber Infrastructure Project',
      description: 'Federal Government Of Somalia',
      image: Fibre,
      link: '/it-fiber-infrastructure'
    },
    {
      id: 'data-center-infrastructure',
      title: 'Data Center IT Infrastructure (DCI) Project',
      description: 'Federal Government Of Somalia',
      image: Dci,
      link: '/data-center-infrastructure'
    },
    {
      id: 'central-database-registration',
      title: 'Central Database for Registration (CDR) and Vehicle Registration System',
      description: 'Federal Government Of Somalia',
      image: Vehicle,
      link: '/central-database-registration'
    },
    {
      id: 'hrm-biometric-system',
      title: 'HRM Biometric System',
      description: 'Federal Government Of Somalia',
      image: Bio,
      link: '/hrm-biometric-system'
    },
    {
      id: 'safe-city-management',
      title: 'Safe City Management Project',
      description: 'Federal Government Of Somalia',
      image: Cam,
      link: '/safe-city-management'
    },
    {
      id: 'county-hrm-system',
      title: 'Human Resource Management System',
      description: 'County Governments Of Kenya',
      image: Nai,
      link: '/county-hrm-system'
    },
    {
      id: 'county-revenue-collection',
      title: 'Revenue Collection System',
      description: 'County Governments Of Kenya',
      image: Revenue,
      link: '/county-revenue-collection'
    },
    {
      id: 'microfinance-management',
      title: 'Micro-Finance Management Systems',
      description: 'SMEs',
      image: Micro,
      link: '/microfinance-management'
    },
    {
      id: 'digital-loans-mobile',
      title: 'Digital Loans Mobile Apps',
      description: 'SMEs',
      image: Loan,
      link: '/digital-loans-mobile'
    },
    {
      id: 'my-accountant-app',
      title: 'MyAccountant App',
      description: 'Software as a service (SaaS)',
      image: Account,
      link: '/my-accountant-app'
    }
  ],
  FEDERAL_GOVERNMENT: [
    // Same as ALL but only federal government projects
    {
        id: 'detainee-case-management',
        title: 'Detainee Case Management Information System (DeMIS Baarista)',
        description: 'Federal Government Of Somalia',
        image: Detainee,
        link: '/detainee-case-management'
      },
      {
        id: 'it-fiber-infrastructure',
        title: 'IT Fiber Infrastructure Project',
        description: 'Federal Government Of Somalia',
        image: Fibre,
        link: '/it-fiber-infrastructure'
      },
      {
        id: 'data-center-infrastructure',
        title: 'Data Center IT Infrastructure (DCI) Project',
        description: 'Federal Government Of Somalia',
        image: Dci,
        link: '/data-center-infrastructure'
      },
      {
        id: 'central-database-registration',
        title: 'Central Database for Registration (CDR) and Vehicle Registration System',
        description: 'Federal Government Of Somalia',
        image: Vehicle,
        link: '/central-database-registration'
      },
      {
        id: 'hrm-biometric-system',
        title: 'HRM Biometric System',
        description: 'Federal Government Of Somalia',
        image: Bio,
        link: '/hrm-biometric-system'
      },
      {
        id: 'safe-city-management',
        title: 'Safe City Management Project',
        description: 'Federal Government Of Somalia',
        image: Cam,
        link: '/safe-city-management'
      }
  ],
  COUNTY_GOVERNMENTS: [
    // Same as ALL but only county government projects
    {
        id: 'county-hrm-system',
        title: 'Human Resource Management System',
        description: 'County Governments Of Kenya',
        image: Nai,
        link: '/county-hrm-system'
      },
      {
        id: 'county-revenue-collection',
        title: 'Revenue Collection System',
        description: 'County Governments Of Kenya',
        image: Revenue,
        link: '/county-revenue-collection'
      },
  ],
  SMES: [
    // Same as ALL but only SME projects
    {
        id: 'microfinance-management',
        title: 'Micro-Finance Management Systems',
        description: 'SMEs',
        image: Micro,
        link: '/microfinance-management'
      },
      {
        id: 'digital-loans-mobile',
        title: 'Digital Loans Mobile Apps',
        description: 'SMEs',
        image: Loan,
        link: '/digital-loans-mobile'
      },
  ],
  SAAS: [
    // Same as ALL but only SaaS projects
    {
        id: 'my-accountant-app',
        title: 'MyAccountant App',
        description: 'Software as a service (SaaS)',
        image: Account,
        link: '/my-accountant-app'
      }
  ]
};

export const List = ({ items }) => {
  return (
    <div className="grid md:grid-cols-4 gap-8 max-w-8xl mx-auto">
      {items.map((item) => (
        <a 
          key={item.id} 
          href={item.link}
          className="group relative p-12 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden min-h-[300px] flex flex-col justify-between"
        >
          {item.image && (
            <div
              className="absolute inset-0 bg-cover bg-center opacity-100 scale-105 group-hover:scale-125 transition-all duration-500 ease-in-out"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
          )}
          {!item.image && (
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700"></div>
          )}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 ease-in-out"></div>
          <div className="relative z-10 flex flex-col justify-between h-full">
            <h3 className="text-2xl font-bold text-left text-white mb-6 transition-colors duration-500">
              {item.title}
            </h3>
            <p className="text-gray-200 text-left leading-relaxed transition-colors duration-500">
              {item.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};