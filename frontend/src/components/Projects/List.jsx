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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-8xl mx-auto px-4 sm:px-0">
      {items.map((item) => (
        <a 
          key={item.id} 
          href={item.link}
          className="group relative shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden min-h-[250px] sm:min-h-[300px] flex flex-col justify-between"
        >
          {/* Background Image */}
          {item.image && (
            <div
              className="absolute inset-0 bg-cover bg-center scale-100 lg:scale-105 lg:group-hover:scale-125 transition-all duration-500 ease-in-out"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
          )}
          {!item.image && (
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700"></div>
          )}
          
          {/* Overlay - Different for mobile and desktop */}
          <div className="absolute inset-0 bg-black/40 sm:bg-black/20 lg:bg-black/0 lg:group-hover:bg-black/40 transition-all duration-500 ease-in-out"></div>
          
          {/* Content Container */}
          <div className="relative z-10 flex flex-col justify-between h-full p-4 sm:p-6 lg:p-8">
            {/* Title - Always visible on mobile, hover-only on desktop */}
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-left text-white mb-3 sm:mb-4 lg:mb-6 
                         opacity-100 sm:opacity-100 lg:opacity-0 lg:group-hover:opacity-100 
                         transform translate-y-0 sm:translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0
                         transition-all duration-500">
              {item.title}
            </h3>
            
            {/* Description - Always visible on mobile, hover-only on desktop */}
            <p className="text-sm sm:text-base text-gray-200 text-left leading-relaxed
                        opacity-100 sm:opacity-100 lg:opacity-0 lg:group-hover:opacity-100
                        transform translate-y-0 sm:translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0
                        transition-all duration-500 delay-75">
              {item.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};