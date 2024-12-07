import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    githubUrl: string;
    demoUrl: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    imageUrl,
    githubUrl,
    demoUrl,
}) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h3 className="text-2xl  text-gray-800">{title}</h3>
                <p className="text-gray-600 mt-4">{description}</p>
                <div className="flex text-sm space-x-4 mt-6 ">
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-700"
                    >
                        GitHub
                    </a>
                    <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500"
                    >
                        Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

