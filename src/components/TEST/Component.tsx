'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './LanguageSwitcher'
import { motion } from "framer-motion"
import { SkillCard } from './SkillCard'
import { Projects } from './Project'
import { Github } from './GitHubCalendary'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
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

export function Component() {

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const { t } = useTranslation();
    // Mapeo dinámico de los enlaces del menú
    const navItems: NavItem[] = [
        { label: t('navbar.home'), href: '#' },
        { label: t('navbar.projects'), href: '#projects' },
        { label: t('navbar.services'), href: '#services' },
        { label: t('navbar.skills'), href: '#skills' },
        { label: t('navbar.gitStatus'), href: '#github' },
        { label: t('navbar.contact'), href: '#contact' },
    ];

    //nueva forma de importar la data
    const skillCards = t('SkillSection.cards', { returnObjects: true }) as SkillCard[];

    //boleano que habilita el subNavbar
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className='min-h-screen text-white bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 textGothamMedium'>
            {/* Navigation */}
            <nav className={`fixed top-0 z-50 w-full bg-slate-950 ${isOpen ? 'bg-opacity-100' : 'bg-opacity-80'}  backdrop-blur`}>{/* bg-[#1e2237]/80 */}
                <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
                    <div className="text-2xl font-bold">
                        be<span className="text-rose-500">cc</span>i
                    </div>
                    <ul className=" space-x-8 md:flex">
                        <div className='hidden md:flex space-x-8'>
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    <a href={item.href} className="hover:text-rose-500">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </div>
                        <div >

                        </div>
                        <div className='flex items-center'>
                            <LanguageSwitcher />
                            <button className='mx-2 md:hidden' onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? (
                                    <FaChevronUp className='cursor-pointer hover:text-rose-500 duration-150' size={20} />
                                ) : (
                                    <FaChevronDown className='cursor-pointer hover:text-rose-500 duration-150' size={20} />
                                )}
                            </button>
                        </div>

                    </ul>
                </div>
                {/* Mobile menu */}
                {isOpen && (
                    <div
                        className={`absolute left-0 right-0 z-20 transform transition-all duration-300 ease-in-out md:hidden ${isOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-full opacity-0"
                            }`}
                    >
                        <div className="bg-slate-950/100 shadow-lg">
                            <div className="space-y-1 px-4 py-3">
                                {navItems.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block rounded-lg px-3 py-2 text-base font-medium text-white hover:bg-slate-800/20 hover:text-white transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className=""
            >
                {/* Hero Section */}
                <section id='#' className="relative flex min-h-[90dvh] mb-16 sm:mb-4 lg:mb-16 items-center px-4">
                    <div className="mx-auto max-w-7xl pt-24 flex flex-col items-center">
                        <img src="/images/alex.jpeg" alt="Alex Becci" className="w-48 h-48 rounded-full mb-8" />
                        <h1 className="mb-4 text-5xl font-bold leading-tight md:text-7xl">
                            {t('hero.greeting')}
                        </h1>
                        <p className="mb-4 max-w-xl text-gray-400">
                            {t('hero.description')}
                        </p>
                        <div className="flex my-4 mb-8 flex-wrap justify-center gap-2">
                            {['TypeScript', 'React', 'Next.js', 'Python', 'NestJS', 'Tailwind'].map((tech) => (
                                <span key={tech} className="px-3 skill-tag py-1 bg-white/10 hover:bg-white/20 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <ButtonsTemplates />
                    </div>
                </section>
                <Projects />

                {/* Skills Section */}
                <section id="services" className="px-4 py-32">
                    <div className="mx-auto max-w-7xl">
                        <h2 className="mb-2 text-4xl font-medium text-rose-500">  {t('SkillSection.type')}</h2>
                        <h3 className="mb-16 text-4xl font-bold text-rose-500">{t('SkillSection.title')}</h3>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-h-[800px] overflow-y-auto">
                            {skillCards.map((card: any, index: number) => (
                                <div
                                    key={index}
                                    className="group rounded-lg  bg-gray-800/50 hover:bg-gray-800/80 p-8 transition ]"
                                >
                                    <div className="mb-4 text-3xl">{card.icon}</div>
                                    <h4 className="mb-4 text-xl font-semibold">{card.title}</h4>
                                    <p className="text-gray-400">{card.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <SkillCard />
                <Github />
                {/* Contact Section */}
                <section id="contact" className="mx-4  py-32">
                    <div className="mx-auto max-w-7xl">
                        <h2 className="mb-16 text-4xl font-bold text-rose-500">{t('ConnectWithMe.title')}</h2>
                        <form action="https://getform.io/f/efeea79b-a749-4cde-8bcb-6dadf720f029"
                            method="POST" /* onSubmit={handleSubmit} */ className="lg:max-w-xl space-y-8">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                name='email'
                                autoComplete='off'
                                id='email'
                                className="w-full rounded-lg bg-[#252945] px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
                                required
                            />
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Message"
                                id="message"
                                name='message'
                                autoComplete='off'
                                rows={4}
                                className="w-full rounded-lg bg-[#252945] px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
                                required
                            />
                            <button
                                type="submit"
                                className="rounded bg-rose-500 px-8 py-3 font-semibold text-white transition hover:bg-rose-600"
                            >
                                {t('ConnectWithMe.button')}
                            </button>
                        </form>
                    </div>
                </section>
            </motion.div>
        </div>
    )
}