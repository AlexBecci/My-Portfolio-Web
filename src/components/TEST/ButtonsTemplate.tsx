import { t } from "i18next"
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa"

export const ButtonsTemplates = () => {
    return (
        <div className='flex justify-between mx-auto gap-4'>
            <a onClick={() => window.open('https://www.linkedin.com/in/becci-alex/')} className="rounded button flex items-center gap-2 px-8 py-3 font-semibold text-white hover:text-sky-500 transition hover:bg-slate-900 border hover:border-sky-900">
                <FaLinkedin />
                {t('buttonLinkedin')}
            </a>

            <a href="/cv.pdf" download className="rounded button flex items-center gap-2 px-8 py-3 font-semibold text-white hover:text-rose-500 transition hover:bg-slate-900 border hover:border-rose-900">
                <FaFilePdf />
                {t('buttonCv')}
            </a>

            <a onClick={() => window.open('https://github.com/AlexBecci')} download className="rounded button flex items-center gap-2 px-8 py-3 font-semibold text-white hover:text-purple-500 transition hover:bg-slate-900 border hover:border-purple-900">
                <FaGithub />
                {t('buttonGithub')}
            </a>
        </div>
    )
}