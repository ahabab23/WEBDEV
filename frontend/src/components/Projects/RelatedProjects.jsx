import React from 'react';
import projectsData from '../../../projects.json';
import { getNumericId, findStringId } from '../../utils/projectIds'

const RelatedProjects = ({ currentProjectId, maxItems = 3 }) => {
  const numericId = getNumericId(currentProjectId);
  const currentProject = projectsData.find(p => p.Id === numericId);
  
  const getRelatedProjects = () => {
    if (!currentProject) return [];
    
    const related = projectsData.filter(project => {
      return project.Id !== numericId && (
        project.Client === currentProject.Client ||
        project.Category === currentProject.Category
      );
    });
    
    if (related.length < maxItems) {
      const remaining = projectsData.filter(p => 
        p.Id !== numericId && 
        !related.some(r => r.Id === p.Id)
      );
      
      const shuffled = remaining.sort(() => 0.5 - Math.random());
      related.push(...shuffled.slice(0, maxItems - related.length));
    }
    
    return related.slice(0, maxItems);
  };

  const relatedProjects = getRelatedProjects();

  if (relatedProjects.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 sm:mt-12 px-4 sm:px-0">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
        Related Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-8xl mx-auto">
        {relatedProjects.map((project) => (
          <a
            key={project.Id}
            href={`/${findStringId(project.Id)}`}
            className="group relative shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden min-h-[250px] sm:min-h-[300px] flex flex-col justify-between"
          >
            {/* Background Image */}
            {project.Imageurl && (
              <div
                className="absolute inset-0 bg-cover bg-center scale-100 lg:scale-105 lg:group-hover:scale-125 transition-all duration-500 ease-in-out"
                style={{ backgroundImage: `url(${project.Imageurl})` }}
              ></div>
            )}
            {!project.Imageurl && (
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
                {project.Title}
              </h3>
              
              {/* Description - Always visible on mobile, hover-only on desktop */}
              <p className="text-sm sm:text-base text-gray-200 text-left leading-relaxed
                          opacity-100 sm:opacity-100 lg:opacity-0 lg:group-hover:opacity-100
                          transform translate-y-0 sm:translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0
                          transition-all duration-500 delay-75">
                {project.Client || project.Category}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RelatedProjects;