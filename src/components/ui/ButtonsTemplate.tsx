import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

export const ButtonsTemplates = () => {
    const { t } = useTranslation()

    return (
        <div className="mx-auto flex flex-wrap justify-center gap-3 lg:justify-start">
            <motion.a
                href="https://www.linkedin.com/in/becci-alex/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-800/50 px-5 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-sky-500/40 hover:bg-sky-500/10 hover:text-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
            >
                <FaLinkedin size={18} aria-hidden="true" />
                {t('buttonLinkedin')}
            </motion.a>

            <motion.a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-800/50 px-5 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-rose-500/40 hover:bg-rose-500/10 hover:text-rose-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
            >
                <FaFilePdf size={18} aria-hidden="true" />
                {t('buttonCv')}
            </motion.a>

            <motion.a
                href="https://github.com/AlexBecci"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-800/50 px-5 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-purple-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
            >
                <FaGithub size={18} aria-hidden="true" />
                {t('buttonGithub')}
            </motion.a>
        </div>
    )
}
