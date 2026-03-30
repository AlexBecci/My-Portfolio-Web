import { t } from "i18next"
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa"
import { motion } from "framer-motion"

export const ButtonsTemplates = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-between mx-auto gap-4'>
            <motion.a
                href="https://www.linkedin.com/in/becci-alex/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl flex items-center gap-2 px-8 py-3 font-semibold text-white bg-slate-800/50 backdrop-blur-sm border border-white/10 hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10 transition-all duration-300"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
            >
                <FaLinkedin size={18} />
                {t('buttonLinkedin')}
            </motion.a>

            <motion.a
                href="/cv.pdf"
                download
                className="rounded-xl flex items-center gap-2 px-8 py-3 font-semibold text-white bg-slate-800/50 backdrop-blur-sm border border-white/10 hover:text-rose-400 hover:border-rose-500/40 hover:bg-rose-500/10 transition-all duration-300"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
            >
                <FaFilePdf size={18} />
                {t('buttonCv')}
            </motion.a>

            <motion.a
                href="https://github.com/AlexBecci"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl flex items-center gap-2 px-8 py-3 font-semibold text-white bg-slate-800/50 backdrop-blur-sm border border-white/10 hover:text-purple-400 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
            >
                <FaGithub size={18} />
                {t('buttonGithub')}
            </motion.a>
        </div>
    )
}