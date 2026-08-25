import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";

export function Github() {
    const { t } = useTranslation();
    const customTheme = {
        light: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
        dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
    };

    return (
        <motion.section
            id="github"
            className="glass-card mx-4 flex max-w-7xl scroll-mt-20 flex-col items-center rounded-xl p-6 sm:p-8 xl:mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="mb-8 flex w-full flex-col justify-between gap-5 sm:flex-row sm:items-end">
                <div>
                    <h2 className="text-3xl font-bold sm:text-4xl">{t('github.title')}</h2>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">{t('github.description')}</p>
                </div>
                <a href="https://github.com/AlexBecci" target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-rose-400 focus-visible:text-rose-400 focus-visible:outline-none">
                    <FaGithub aria-hidden="true" />
                    {t('github.profileLabel')}
                </a>
            </div>
            <div className="flex w-full justify-start overflow-x-auto pb-2 lg:justify-center">
                <GitHubCalendar
                    username="AlexBecci"
                    blockSize={15}
                    blockMargin={5}
                    fontSize={14}
                    theme={customTheme}
                />
            </div>
        </motion.section>
    );
}
