import { MdDownload } from "react-icons/md";
import { jobDataList } from "../../data/job";
import { Card } from "./Card";
import { EducationCard } from "./EducationCard";
import { Projects } from "./Project";

export function Portfolio() {

    return (
        <div className="min-h-screen textGothamMedium bg-background text-foreground">
            {/* nav */}
            <div className="fixed bg-white top-0 left-0 bg-gradient-to-br  right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-between p-2 items-center">
                <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl">Becci Alex</h1>
                    <div className="hidden  md:flex justify-between items-center">
                        <h1>LINKS</h1>
                        <h1>LINKS</h1>
                        <h1>LINKS</h1>
                        <h1>LINKS</h1>
                    </div>
                    <button className="flex  items-center text-sm  rounded-md p-2 bg-gradient-to-br from-blue-600 to-blue-800 text-white hover:bg-blue-900 transition-colors duration-300 shadow-md">
                        <a href="/cv.pdf" download>
                            Descargar CV
                        </a>
                        <MdDownload size={20} />
                    </button>
                </nav>
            </div>
            <main className="container mx-auto  pt-24">
                {/* HERO */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-10  shadow-lg max-w-3xl mx-auto mt-10">
                    <h1 className="text-4xl font-extrabold mb-6">Bienvenido, soy Becci Alex</h1>
                    <p className="text-lg mb-8 leading-relaxed">
                        Soy un desarrollador Full Stack apasionado por la creación de aplicaciones web modernas. Me especializo en frontend y backend, con experiencia en React, Next.js, Python y NestJS. ¡Explora mis proyectos para conocer más!
                    </p>
                    <button className="flex items-center text-sm  rounded-md p-3 bg-white text-blue-800 hover:bg-gray-200 transition-colors duration-300 shadow-md">
                        <span>Ver mi portafolio</span>
                        <svg
                            className="ml-2 w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>

                <div className="bg-white   p-8 max-w-3xl mx-auto my-8">
                    {/* Sección: Sobre mí */}
                    <div className="mb-6">
                        <h1 className="text-3xl  text-gray-800 ">Sobre mí</h1>
                        <div className="h-1 bg-pink-600 w-1/6" />
                    </div>
                    <p className="text-gray-700 mb-6">
                        Soy un desarrollador full stack con experiencia en frontend y backend, trabajando actualmente en <span className="">Bingo Oasis Pilar</span>, además de colaborar en otros proyectos freelance.
                    </p>

                    {/* Sección: Idiomas */}
                    <h2 className="text-2xl  text-gray-800 mb-4">Idiomas</h2>
                    <ul className="space-y-4">
                        <li className="flex items-center space-x-2">
                            <span className="w-3 h-3 bg-pink-600 rounded-full"></span>
                            <span className="text-gray-700">Español - Nativo</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="w-3 h-3 bg-pink-600 rounded-full"></span>
                            <span className="text-gray-700">Inglés - Básico</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="w-3 h-3 bg-pink-600 rounded-full"></span>
                            <span className="text-gray-700">Portugués - Básico</span>
                        </li>
                    </ul>
                    {/* Experience */}
                    <div className="my-6">
                        <h1 className="text-3xl  text-gray-800 ">Experiencia</h1>
                        <div className="h-1 bg-pink-600 w-1/6" />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {jobDataList.map((jobData) => (
                            <Card
                                title={jobData.title}
                                date={jobData.date}
                                description={jobData.description}
                            />
                        ))}
                    </div>
                </div>
                <EducationCard />
                <Projects />
            </main>
        </div>
    )
}