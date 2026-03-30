import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export function SkillCard() {
    const { t } = useTranslation();
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
        <section id="skills" className="py-20 mx-4 md:mx-12">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-rose-500 mb-16"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Skills
                </motion.h2>

                <Carousel title={t('Skills.lenguage')} items={skills.languages} />
                <Carousel title={t('Skills.libraries')} items={skills.technologies} />
                <Carousel title={t('Skills.Tools')} items={skills.tools} />
                <Carousel title={t('Skills.Databases')} items={skills.databases} />
            </div>
        </section>
    );
}

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
            <motion.h3
                className="text-xl text-white mb-8 font-semibold"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
            >
                {title}
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {items.map((item, index) => (
                    <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.06 }}
                        className="glass-card group rounded-xl p-6"
                    >
                        <div className="flex flex-col items-center space-y-4">
                            <img
                                src={item.icon}
                                alt={item.name}
                                className="w-12 h-12 rounded-full object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                            <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">{item.name}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
