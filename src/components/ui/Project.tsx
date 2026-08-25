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
        <section id="projects" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-20 lg:px-4">
            <motion.div
                className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div>
                    <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-rose-400">Portfolio</p>
                    <h2 className="text-4xl font-bold text-white sm:text-5xl">{t('projects.title')}</h2>
                    <p className="mt-4 max-w-2xl leading-relaxed text-slate-400">{t('projects.description')}</p>
                </div>
                <p className="shrink-0 text-sm text-slate-500"><span className="font-semibold text-slate-300">{String(projects.length).padStart(2, '0')}</span> {t('projects.countLabel')}</p>
            </motion.div>
            <div className="relative group/carousel md:px-12">
                {/* Left arrow */}
                <button
                    type="button"
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-slate-800/90 p-3 text-white opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-rose-500 focus-visible:bg-rose-500 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 md:flex md:group-hover/carousel:opacity-100"
                    aria-label={t('projects.scrollLeft')}
                >
                    <FaChevronLeft size={16} aria-hidden="true" />
                </button>

                {/* Carousel */}
                <div
                    ref={carouselRef}
                    className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 py-4 sm:gap-5 sm:px-2"
                    aria-label={t('projects.title')}
                >
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            className="glass-card group flex w-[min(86vw,22rem)] min-w-[min(86vw,22rem)] snap-start flex-col overflow-hidden rounded-xl"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.3) }}
                        >
                            {/* Image with overlay */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    loading="lazy"
                                    decoding="async"
                                    className="aspect-video w-full object-cover saturate-[0.8] transition-all duration-500 group-hover:scale-105 group-hover:saturate-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="p-5 flex-grow flex flex-col justify-between gap-3">
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-rose-400 transition-colors duration-300">{project.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                                </div>
                                <div className="flex flex-wrap gap-3 pt-2">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link project-link-secondary flex items-center gap-1.5 text-xs"
                                        >
                                            <FaGithub size={14} aria-hidden="true" />
                                            {t('projects.githubLabel')}
                                        </a>
                                    )}
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link project-link-primary flex items-center gap-1.5 text-xs"
                                        >
                                            <FaExternalLinkAlt size={12} aria-hidden="true" />
                                            {t('projects.demoLabel')}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Right arrow */}
                <button
                    type="button"
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-slate-800/90 p-3 text-white opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-rose-500 focus-visible:bg-rose-500 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 md:flex md:group-hover/carousel:opacity-100"
                    aria-label={t('projects.scrollRight')}
                >
                    <FaChevronRight size={16} aria-hidden="true" />
                </button>
            </div>
        </section>
    );
};
