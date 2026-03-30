import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

type Project = {
    title: string;
    description: string;
    imageUrl: string;
    githubUrl: string;
    demoUrl: string;
};


export const Projects = () => {
    const { t } = useTranslation();
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const projects = t('projects.list', { returnObjects: true }) as Project[];

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -340, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 340, behavior: 'smooth' });
        }
    };

    return (
        <div id='projects' className="max-w-7xl mx-auto px-4 lg:px-4 py-12">
            <motion.h2
                className="text-4xl text-rose-500 font-bold text-start mb-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {t('projects.title')}
            </motion.h2>
            <div className="relative group/carousel px-4 md:px-12">
                {/* Left arrow */}
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-slate-800/90 backdrop-blur-sm text-white p-3 rounded-full hover:bg-rose-500 transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 shadow-lg"
                    aria-label="Scroll left"
                >
                    <FaChevronLeft size={16} />
                </button>

                {/* Carousel */}
                <div
                    ref={carouselRef}
                    className="flex space-x-5 overflow-x-scroll scroll-smooth scrollbar-hide px-2 py-4"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="min-w-[320px] w-[320px] flex flex-col glass-card rounded-xl overflow-hidden group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                            {/* Image with overlay */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="h-[200px] w-full object-cover transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="p-5 flex-grow flex flex-col justify-between gap-3">
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-rose-400 transition-colors duration-300">{project.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                                </div>
                                <div className="flex gap-3 pt-2">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 buttonsProyects text-xs"
                                    >
                                        <FaGithub size={14} />
                                        GitHub
                                    </a>
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 buttonsProyects text-xs"
                                    >
                                        <FaExternalLinkAlt size={12} />
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Right arrow */}
                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-slate-800/90 backdrop-blur-sm text-white p-3 rounded-full hover:bg-rose-500 transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 shadow-lg"
                    aria-label="Scroll right"
                >
                    <FaChevronRight size={16} />
                </button>
            </div>
        </div>
    );
};
