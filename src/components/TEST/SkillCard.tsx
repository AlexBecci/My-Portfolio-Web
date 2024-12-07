import { useTranslation } from "react-i18next";

export function SkillCard() {
    const { t } = useTranslation();
    // Datos tipados
    const skills: { [key: string]: SkillItem[] } = {
        languages: [
            { name: "TypeScript", icon: "/images/typescript.png" },
            { name: "JavaScript", icon: "/images/javascript.png" },
            { name: "Python", icon: "/images/python.jfif" },
            { name: "Java", icon: "/images/java.png" },
            { name: "C++", icon: "/images/cpp.png" },
            { name: "C#", icon: "/images/csharp.jfif" },
        ],
        technologies: [
            { name: "React", icon: "/images/react.png" },
            { name: "Next.js", icon: "/images/nextjs.png" },
            { name: "NestJS", icon: "/images/nestjs.png" },
            { name: "Express", icon: "/images/express.png" },
            { name: "Tailwind", icon: "/images/tailwind.png" },
            { name: "Material UI", icon: "/images/materialui.png" },
            { name: "Bootstrap", icon: "/images/bootstrap.jfif" },
            { name: "TypeORM", icon: "/images/typeorm.png" },
        ],
        tools: [
            { name: "Git", icon: "/images/git.png" },
            { name: "VSCode", icon: "/images/vscode.jfif" },
            { name: "Vercel", icon: "/images/vercel.png" },
            { name: "GitHub", icon: "/images/github.png" },
            { name: "DBeaver", icon: "/images/dbeaver.jfif" },
            { name: "Railway", icon: "/images/railway.png" },
        ],
        databases: [
            { name: "MySQL", icon: "/images/mysql.png" },
            { name: "PostgreSQL", icon: "/images/postgresql.png" },
            { name: "MongoDB", icon: "/images/mongodb.png" },
        ],
    };


    return (
        <section id="skills" className="py-20 mx-4 md:mx-12F">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-rose-500 mb-16 relative">
                    Skills
                    {/*   <span className="absolute bottom-0 left-0 w-20 h-1 bg-red-500"></span> */}
                </h2>

                {/* Sección de Carruseles */}
                <Carousel title={t('Skills.lenguage')} items={skills.languages} />
                <Carousel title={t('Skills.libraries')} items={skills.technologies} />
                <Carousel title={t('Skills.Tools')} items={skills.tools} />
                <Carousel title={t('Skills.Databases')} items={skills.databases} />
            </div>
        </section>
    );
}

// Definición de tipos para las props de Carousel
type SkillItem = {
    name: string;
    icon: string;
};

type CarouselProps = {
    title: string;
    items: SkillItem[];
};

const Carousel: React.FC<CarouselProps> = ({ title, items }) => {

    return (
        <div className="mb-16">

            <h3 className="text-xl text-white mb-8 font-semibold">{title}</h3>
            <div className="relative">

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {items.map((item) => (
                        <div
                            key={item.name}
                            className="group relative bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/80 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex flex-col items-center space-y-4">
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="w-12 h-12 rounded-full object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                                <span className="text-gray-300 text-sm font-medium">{item.name}</span>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
};
