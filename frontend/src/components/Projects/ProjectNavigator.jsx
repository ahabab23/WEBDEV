import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import projectsData from '../../../projects.json';
import { getNumericId, findStringId } from '../../utils/projectIds';

const ProjectNavigator = ({ currentProjectId }) => {
  const navigate = useNavigate();
  const numericId = getNumericId(currentProjectId);
  const currentIndex = projectsData.findIndex(p => p.Id === numericId);
  const previousProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  const handleNavigation = (projectId) => {
    navigate(`/${findStringId(projectId)}`);
  };

  const formatTitle = (title) => {
    return title.split(' ').map((word, i, arr) => (
      <React.Fragment key={i}>
        {word}
        {i !== arr.length - 1 && ' '}
        {word.length > 8 && i !== arr.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="flex justify-between items-center py-8 border-t border-b border-gray-200">
      <div className="flex-1">
        {previousProject && (
          <button
            onClick={() => handleNavigation(previousProject.Id)}
            className="cursor-pointer group flex items-center gap-3 text-left hover:text-blue-600 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 transition-transform bg-blue-500 text-white" />
            <div>
              <div className="hover:translate-x-2 duration-500 font-semibold max-w-xs break-words whitespace-normal">
                {formatTitle(previousProject.Title)}
              </div>
            </div>
          </button>
        )}
      </div>
      
      <div className="flex-1 text-right">
        {nextProject && (
          <button
            onClick={() => handleNavigation(nextProject.Id)}
            className="cursor-pointer group flex items-center gap-3 text-right ml-auto hover:text-blue-600 transition-colors"
          >
            <div>
              <div className="font-semibold hover:translate-x-2 duration-500 max-w-xs break-words whitespace-normal">
                {formatTitle(nextProject.Title)}
              </div>
            </div>
            <ChevronRight className="w-6 h-6 bg-blue-500 text-white transition-transform" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectNavigator;