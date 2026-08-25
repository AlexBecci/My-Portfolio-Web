'use client'

import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import { FaArrowRight, FaArrowUp, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { ButtonsTemplates } from './ButtonsTemplate'
import { Github } from './GitHubCalendary'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Projects } from './Project'
import { SkillCard } from './SkillCard'

interface NavItem {
    label: string
    href: string
}

interface ServiceCard {
    icon: string
    title: string
    description: string
}

const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
}

const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
}

export function Component() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [showScrollTop, setShowScrollTop] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const { t } = useTranslation()

    const navItems: NavItem[] = [
        { label: t('navbar.home'), href: '#home' },
        { label: t('navbar.projects'), href: '#projects' },
        { label: t('navbar.services'), href: '#services' },
        { label: t('navbar.skills'), href: '#skills' },
        { label: t('navbar.gitStatus'), href: '#github' },
        { label: t('navbar.contact'), href: '#contact' },
    ]
    const serviceCards = t('SkillSection.cards', { returnObjects: true }) as ServiceCard[]

    useEffect(() => {
        const handleScroll = () => setShowScrollTop(window.scrollY > 400)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    return (
        <MotionConfig reducedMotion="user">
            <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white textGothamMedium">
                <nav aria-label={t('accessibility.primaryNavigation')} className={`fixed top-0 z-50 w-full border-b border-white/5 backdrop-blur-md transition-all duration-300 ${isOpen ? 'bg-slate-950' : 'bg-slate-950/80'}`}>
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5">
                        <motion.a href="#home" className="select-none rounded-md text-2xl font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 400 }} aria-label="Alex Becci">
                            be<span className="text-rose-500">cc</span>i
                        </motion.a>

                        <div className="flex items-center gap-2">
                            <ul className="hidden items-center gap-6 lg:gap-8 md:flex">
                                {navItems.map((item) => (
                                    <li key={item.href}>
                                        <a href={item.href} className="relative text-sm text-slate-200 transition-colors duration-200 hover:text-rose-400 focus-visible:text-rose-400 focus-visible:outline-none after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-rose-500 after:transition-all after:duration-300 hover:after:w-full focus-visible:after:w-full">
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <LanguageSwitcher />
                            <button type="button" className="rounded-lg p-2 transition-colors hover:bg-white/10 hover:text-rose-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label={t(isOpen ? 'accessibility.closeMenu' : 'accessibility.openMenu')} aria-expanded={isOpen} aria-controls="mobile-navigation">
                                {isOpen ? <FaChevronUp size={18} aria-hidden="true" /> : <FaChevronDown size={18} aria-hidden="true" />}
                            </button>
                        </div>
                    </div>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div id="mobile-navigation" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25, ease: 'easeInOut' }} className="overflow-hidden border-t border-white/5 bg-slate-950/95 backdrop-blur-md md:hidden">
                                <ul className="space-y-1 px-4 py-3">
                                    {navItems.map((item, index) => (
                                        <motion.li key={item.href} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.04 }}>
                                            <a href={item.href} onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-2.5 text-base font-medium text-white transition-colors hover:bg-rose-500/10 hover:text-rose-400">
                                                {item.label}
                                            </a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>

                <main>
                    <motion.section id="home" className="bg-glow-rose bg-grid-pattern relative flex min-h-dvh scroll-mt-20 items-center px-4 py-28" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
                        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
                            <div className="text-center lg:text-left">
                                <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-emerald-300">
                                    <span className="relative flex h-2 w-2" aria-hidden="true">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                                    </span>
                                    {t('hero.availability')}
                                </motion.div>

                                <motion.p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-rose-400" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
                                    {t('hero.eyebrow')}
                                </motion.p>
                                <motion.h1 className="mb-6 text-5xl font-bold leading-[0.98] sm:text-6xl md:text-7xl xl:text-8xl" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                                    <span className="block text-slate-100">{t('hero.intro')}</span>
                                    <span className="gradient-text block">Alex Becci</span>
                                </motion.h1>
                                <motion.p className="mx-auto mb-7 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg lg:mx-0" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.32 }}>
                                    {t('hero.description')}
                                </motion.p>
                                <motion.a href="#projects" className="mb-7 inline-flex items-center gap-2 rounded-xl bg-rose-500 px-6 py-3 font-semibold text-white shadow-lg shadow-rose-500/20 transition-colors hover:bg-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                                    {t('hero.projectsCta')}
                                    <FaArrowRight size={14} aria-hidden="true" />
                                </motion.a>
                                <motion.div className="mb-8 flex flex-wrap justify-center gap-2 lg:justify-start" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.46 }}>
                                    {['TypeScript', 'React', 'Next.js', 'Python', 'NestJS', 'Tailwind'].map((tech) => (
                                        <span key={tech} className="skill-tag cursor-default rounded-full bg-white/10 px-4 py-1.5 text-sm">{tech}</span>
                                    ))}
                                </motion.div>
                                <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.52 }}>
                                    <ButtonsTemplates />
                                </motion.div>
                            </div>

                            <motion.div initial={{ opacity: 0, x: 30, rotate: 1.5 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-full max-w-[430px]">
                                <div className="absolute -inset-5 -z-10 rounded-[2.25rem] bg-gradient-to-br from-rose-500/20 via-purple-500/5 to-indigo-500/20 blur-2xl" />
                                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-2 shadow-2xl shadow-black/40">
                                    <img src="/images/foto_1.jpeg" alt={t('hero.photoAlt')} width="512" height="512" fetchPriority="high" className="aspect-[4/5] w-full rounded-[1.6rem] object-cover object-top" />
                                    <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-slate-950/80 p-4 backdrop-blur-md">
                                        <div className="flex items-center justify-between gap-4">
                                            <div>
                                                <p className="text-sm font-semibold text-white">Alex Becci</p>
                                                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">Software Developer</p>
                                            </div>
                                            <span className="text-xs font-medium text-rose-400">WEB · API · UI</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -right-4 top-10 hidden h-24 w-1 rounded-full bg-gradient-to-b from-rose-500 to-violet-500 sm:block" aria-hidden="true" />
                            </motion.div>
                        </div>
                    </motion.section>

                    <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}><Projects /></motion.div>
                    <div className="section-divider my-8" />

                    <motion.section id="services" className="scroll-mt-20 px-4 py-24" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
                        <div className="mx-auto max-w-7xl">
                            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                                <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-rose-400">{t('SkillSection.type')}</p>
                                <h2 className="mb-14 max-w-3xl text-3xl font-bold text-white sm:text-4xl">{t('SkillSection.title')}</h2>
                            </motion.div>
                            <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}>
                                {serviceCards.map((card) => (
                                    <motion.article key={card.title} variants={staggerItem} className="glass-card group rounded-xl p-8">
                                        <div className="mb-4 inline-block text-4xl transition-transform duration-300 group-hover:scale-110" aria-hidden="true">{card.icon}</div>
                                        <h3 className="mb-3 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-rose-400">{card.title}</h3>
                                        <p className="text-sm leading-relaxed text-gray-400">{card.description}</p>
                                    </motion.article>
                                ))}
                            </motion.div>
                        </div>
                    </motion.section>

                    <div className="section-divider my-8" />
                    <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}><SkillCard /></motion.div>
                    <div className="section-divider my-8" />
                    <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}><Github /></motion.div>
                    <div className="section-divider my-8" />

                    <motion.section id="contact" className="scroll-mt-20 px-4 py-24" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
                        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
                            <div>
                                <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-rose-400">{t('navbar.contact')}</p>
                                <h2 className="mb-5 text-4xl font-bold text-white sm:text-5xl">{t('ConnectWithMe.title')}</h2>
                                <p className="max-w-lg leading-relaxed text-gray-400">{t('ConnectWithMe.description')}</p>
                            </div>
                            <form action="https://getform.io/f/efeea79b-a749-4cde-8bcb-6dadf720f029" method="POST" className="space-y-6 rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-sm sm:p-8">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm text-gray-300">{t('ConnectWithMe.emailLabel')}</label>
                                    <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder={t('ConnectWithMe.emailPlaceholder')} name="email" autoComplete="email" id="email" className="w-full rounded-xl border border-white/10 bg-slate-800/60 px-5 py-4 text-white placeholder-gray-500 transition-all duration-300 focus:border-rose-500/50 focus:outline-none focus:ring-2 focus:ring-rose-500/50" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm text-gray-300">{t('ConnectWithMe.messageLabel')}</label>
                                    <textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder={t('ConnectWithMe.messagePlaceholder')} id="message" name="message" autoComplete="off" rows={5} className="w-full resize-none rounded-xl border border-white/10 bg-slate-800/60 px-5 py-4 text-white placeholder-gray-500 transition-all duration-300 focus:border-rose-500/50 focus:outline-none focus:ring-2 focus:ring-rose-500/50" required />
                                </div>
                                <motion.button type="submit" className="rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 px-8 py-3.5 font-semibold text-white transition-all hover:from-rose-600 hover:to-rose-700 hover:shadow-lg hover:shadow-rose-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    {t('ConnectWithMe.button')}
                                </motion.button>
                            </form>
                        </div>
                    </motion.section>
                </main>

                <div className="section-divider" />
                <footer className="px-4 py-8 text-center text-sm text-gray-500">&copy; {new Date().getFullYear()} Alex Becci · {t('footer.text')}</footer>

                <AnimatePresence>
                    {showScrollTop && (
                        <motion.button type="button" onClick={scrollToTop} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="fixed bottom-6 right-6 z-40 rounded-full bg-rose-500/90 p-3 text-white shadow-lg shadow-rose-500/25 backdrop-blur-sm transition-colors hover:bg-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 sm:bottom-8 sm:right-8" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label={t('accessibility.scrollTop')}>
                            <FaArrowUp size={18} aria-hidden="true" />
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>
        </MotionConfig>
    )
}
