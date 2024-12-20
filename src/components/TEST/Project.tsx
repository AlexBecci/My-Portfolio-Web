import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

type Project = {
    title: string;
    description: string;
    imageUrl: string;
    githubUrl: string;
    demoUrl: string;
};


export const Projects = () => {
    const { t } = useTranslation(); // Hook para usar traducciones
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const projects = t('projects.list', { returnObjects: true }) as Project[];


    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -300, // Ajusta el valor según el ancho de tus elementos
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: 300, // Ajusta el valor según el ancho de tus elementos
                behavior: 'smooth',
            });
        }
    };
    return (
        <div id='projects' className="max-w-7xl mx-auto px-4 lg:px-4    py-8">
            <h2 className="text-4xl text-rose-500 font-bold text-start mb-8">{t('projects.title')}</h2>
            <div className="relative ">
                {/* Botón para desplazar a la izquierda */}
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
                >
                    &#9664;
                </button>
                {/* Carrusel */}
                <div
                    ref={carouselRef}
                    className="flex space-x-4  overflow-x-scroll scroll-smooth scrollbar-hide"
                >
                    {
                        projects.map((project, index) => (
                            <div key={index} className="min-w-[300px] w-[300px] flex flex-col bg-gray-800/50 hover:bg-gray-800/80 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div>
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="h-[200px] w-full object-cover transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                                    />
                                </div>

                                <div className="p-4 flex-grow flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-lg  text-white mb-2">{project.title}</h3>
                                        <p className="text-gray-300 text-sm">{project.description}</p>
                                    </div>
                                   {/*  <div className="flex flex-wrap gap-2 text-[70%]">
                                        <span className="bg-blue-600/10 rounded-full p-1  text-blue-600 hover:bg-blue-600/20">
                                            TypeScript
                                        </span>
                                        <span className="bg-yellow-600/10 rounded-full p-1  text-yellow-600 hover:bg-yellow-600/20">
                                            JavaScript
                                        </span>
                                        <span className="bg-cyan-600/10 rounded-full p-1  text-cyan-600 hover:bg-cyan-600/20">
                                            React
                                        </span>
                                        <span className="bg-green-600/10 rounded-full p-1  text-green-600 hover:bg-green-600/20">
                                            Node.js
                                        </span>
                                        <span className="bg-purple-600/10 rounded-full p-1  text-purple-600 hover:bg-purple-600/20">
                                            PostgreSQL
                                        </span>
                                    </div> */}
                                    <div className="flex justify-between">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="buttonsProyects text-xs rounded-md p-1 "
                                        >
                                            GitHub
                                        </a>
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="buttonsProyects text-xs rounded-md p-1 "
                                        >
                                            Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* Botón para desplazar a la derecha */}
                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
                >
                    &#9654;
                </button>
            </div>
        </div >
    );

};
