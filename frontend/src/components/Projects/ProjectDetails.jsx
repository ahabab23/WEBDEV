import React, { useState, useEffect } from 'react';
import { Calendar, User, Tag } from 'lucide-react';
import projectsData from '../../../projects.json';
import { getNumericId } from '../../utils/projectIds';

const ProjectDetails = ({ projectId }) => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const numericId = getNumericId(projectId);
    const foundProject = projectsData.find(p => p.Id === numericId);
    setProject(foundProject);
    setLoading(false);
  }, [projectId]);

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-64 bg-gray-300 rounded-lg mb-6"></div>
        <div className="h-8 bg-gray-300 rounded mb-4"></div>
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Not Found</h2>
        <p className="text-gray-600">The requested project could not be found.</p>
      </div>
    );
  }

  return (
    <div className="w-8xl overflow-hidden p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-8xl ">
        {/* Left Side: Title and Description */}
        <div className="lg:col-span-2 w-8xl ">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h1>
          <p className="text-gray-700 text-lg">
            {project.Description}
          </p>
        </div>

        {/* Right Side: Metadata */}
        <div className="flex flex-col gap-6 text-sm text-gray-700">
          <div>
            <h3 className="uppercase text-gray-500 font-semibold text-xs mb-1">Published:</h3>
            <p className="text-base font-medium">{project.Published}</p>
          </div>
          <div>
            <h3 className="uppercase text-gray-500 font-semibold text-xs mb-1">Category:</h3>
            <p className="text-base font-medium">{project.Category}</p>
          </div>
          <div>
            <h3 className="uppercase text-gray-500 font-semibold text-xs mb-1">Client:</h3>
            <p className="text-base font-medium">{project.Client}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
