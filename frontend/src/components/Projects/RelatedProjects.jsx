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
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-8xl mx-auto">
        {relatedProjects.map((project) => (
          <a
            key={project.Id}
            href={`/${findStringId(project.Id)}`}
            className="group relative p-12 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden min-h-[300px] flex flex-col justify-between"
          >
            {project.Imageurl && (
              <div
                className="absolute inset-0 bg-cover bg-center opacity-100 scale-105 group-hover:scale-125 transition-all duration-500 ease-in-out"
                style={{ backgroundImage: `url(${project.Imageurl})` }}
              ></div>
            )}
            {!project.Imageurl && (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700"></div>
            )}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 ease-in-out"></div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <h3 className="text-2xl font-bold text-left text-white mb-6 transition-colors duration-500">
                {project.Title}
              </h3>
              <p className="text-gray-200 text-left leading-relaxed transition-colors duration-500">
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