'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './LanguageSwitcher'
import { motion, AnimatePresence } from "framer-motion"
import { SkillCard } from './SkillCard'
import { Projects } from './Project'
import { Github } from './GitHubCalendary'
import { FaChevronDown, FaChevronUp, FaArrowUp } from 'react-icons/fa'
import { ButtonsTemplates } from './ButtonsTemplate'

interface NavItem {
    label: string
    href: string
}

interface SkillCard {
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
    const { t } = useTranslation();

    const navItems: NavItem[] = [
        { label: t('navbar.home'), href: '#' },
        { label: t('navbar.projects'), href: '#projects' },
        { label: t('navbar.services'), href: '#services' },
        { label: t('navbar.skills'), href: '#skills' },
        { label: t('navbar.gitStatus'), href: '#github' },
        { label: t('navbar.contact'), href: '#contact' },
    ];

    const skillCards = t('SkillSection.cards', { returnObjects: true }) as SkillCard[];
    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className='min-h-screen text-white bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 textGothamMedium overflow-x-hidden'>
            {/* Navigation */}
            <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${isOpen ? 'bg-slate-950/100' : 'bg-slate-950/80'} backdrop-blur-md border-b border-white/5`}>
                <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
                    <motion.div
                        className="text-2xl font-bold"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <a href="#" className="select-none">
                            be<span className="text-rose-500">cc</span>i
                        </a>
                    </motion.div>
                    <ul className="space-x-4 lg:space-x-8 md:flex items-center">
                        <div className='hidden md:flex space-x-8'>
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    <a href={item.href} className="relative hover:text-rose-500 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-rose-500 after:transition-all after:duration-300 hover:after:w-full">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </div>
                        <div className='flex items-center'>
                            <LanguageSwitcher />
                            <button className='mx-2 md:hidden' onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                                {isOpen ? (
                                    <FaChevronUp className='cursor-pointer hover:text-rose-500 duration-150' size={20} />
                                ) : (
                                    <FaChevronDown className='cursor-pointer hover:text-rose-500 duration-150' size={20} />
                                )}
                            </button>
                        </div>
                    </ul>
                </div>
                {/* Mobile menu with animation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden md:hidden"
                        >
                            <div className="bg-slate-950/95 backdrop-blur-md border-t border-white/5">
                                <div className="space-y-1 px-4 py-3">
                                    {navItems.map((item, index) => (
                                        <motion.a
                                            key={item.label}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="block rounded-lg px-3 py-2.5 text-base font-medium text-white hover:bg-rose-500/10 hover:text-rose-400 transition-colors"
                                        >
                                            {item.label}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Hero Section */}
            <motion.section
                id='#'
                className="relative flex min-h-[90dvh] mb-16 sm:mb-4 lg:mb-16 items-center px-4 bg-glow-rose bg-grid-pattern"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="mx-auto max-w-7xl pt-24 flex flex-col items-center relative z-10">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="profile-glow float-animation"
                    >
                        <img src="/images/foto_1.jpeg" alt="Alex Becci" className="w-48 h-48 rounded-full mb-8 object-cover" />
                    </motion.div>
                    <motion.h1
                        className="mb-4 text-5xl font-bold leading-tight md:text-7xl text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {t('hero.greeting').split('Alex Becci')[0]}
                        <span className="gradient-text">Alex Becci</span>
                    </motion.h1>
                    <motion.p
                        className="mb-6 max-w-xl text-gray-400 text-center leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                    >
                        {t('hero.description')}
                    </motion.p>
                    <motion.div
                        className="flex my-4 mb-8 flex-wrap justify-center gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                    >
                        {['TypeScript', 'React', 'Next.js', 'Python', 'NestJS', 'Tailwind'].map((tech) => (
                            <span key={tech} className="px-4 skill-tag py-1.5 bg-white/10 rounded-full text-sm cursor-default">
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.55 }}
                    >
                        <ButtonsTemplates />
                    </motion.div>
                </div>
            </motion.section>

            {/* Projects Section */}
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
            >
                <Projects />
            </motion.div>

            <div className="section-divider my-8" />

            {/* Services Section */}
            <motion.section
                id="services"
                className="px-4 py-24"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
            >
                <div className="mx-auto max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="mb-2 text-lg font-medium text-rose-400 uppercase tracking-wider">{t('SkillSection.type')}</h2>
                        <h3 className="mb-16 text-4xl font-bold text-white">{t('SkillSection.title') || 'What I Do'}</h3>
                    </motion.div>
                    <motion.div
                        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-40px" }}
                    >
                        {skillCards.map((card: SkillCard, index: number) => (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                className="glass-card group rounded-xl p-8"
                            >
                                <div className="mb-4 text-4xl group-hover:scale-110 transition-transform duration-300 inline-block">{card.icon}</div>
                                <h4 className="mb-3 text-xl font-semibold text-white group-hover:text-rose-400 transition-colors duration-300">{card.title}</h4>
                                <p className="text-gray-400 leading-relaxed text-sm">{card.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            <div className="section-divider my-8" />

            {/* Skills Section */}
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
            >
                <SkillCard />
            </motion.div>

            <div className="section-divider my-8" />

            {/* GitHub Section */}
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
            >
                <Github />
            </motion.div>

            <div className="section-divider my-8" />

            {/* Contact Section */}
            <motion.section
                id="contact"
                className="mx-4 py-24"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
            >
                <div className="mx-auto max-w-7xl">
                    <motion.h2
                        className="mb-3 text-lg font-medium text-rose-400 uppercase tracking-wider"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {t('ConnectWithMe.title')}
                    </motion.h2>
                    <p className="mb-12 text-gray-400 max-w-lg">Feel free to reach out — I'm always open to discussing new projects and opportunities.</p>
                    <form
                        action="https://getform.io/f/efeea79b-a749-4cde-8bcb-6dadf720f029"
                        method="POST"
                        className="lg:max-w-xl space-y-6"
                    >
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm text-gray-400">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your.email@example.com"
                                name='email'
                                autoComplete='email'
                                id='email'
                                className="w-full rounded-xl bg-slate-800/60 backdrop-blur-sm border border-white/10 px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:border-rose-500/50 transition-all duration-300"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm text-gray-400">Message</label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Tell me about your project..."
                                id="message"
                                name='message'
                                autoComplete='off'
                                rows={5}
                                className="w-full rounded-xl bg-slate-800/60 backdrop-blur-sm border border-white/10 px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:border-rose-500/50 transition-all duration-300 resize-none"
                                required
                            />
                        </div>
                        <motion.button
                            type="submit"
                            className="rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 px-10 py-3.5 font-semibold text-white transition-all hover:from-rose-600 hover:to-rose-700 hover:shadow-lg hover:shadow-rose-500/25"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {t('ConnectWithMe.button')}
                        </motion.button>
                    </form>
                </div>
            </motion.section>

            {/* Footer area */}
            <div className="section-divider" />
            <div className="text-center py-8 text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Alex Becci — Built with React & Tailwind
            </div>

            {/* Scroll to top button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        onClick={scrollToTop}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-rose-500/90 text-white shadow-lg shadow-rose-500/25 hover:bg-rose-600 transition-colors backdrop-blur-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Scroll to top"
                    >
                        <FaArrowUp size={18} />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    )
}