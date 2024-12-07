'use client'

import { useState } from 'react'
import { Code2, Download, Globe, Mail, Phone } from 'lucide-react'
import { motion } from "framer-motion"

interface HeroContent {
  greeting: string
  subtitle: string
  description: string
  skills: {
    frontend: string[]
    backend: string[]
    databases: string[]
    languages: string[]
  }
  buttons: {
    primary: string
    secondary: string
  }
  contact: {
    email: string
    phone: string
  }
}

const content: Record<'es' | 'en', HeroContent> = {
  es: {
    greeting: "¡Hola! Soy Alex Becci",
    subtitle: "Full Stack Developer",
    description: "Apasionado por el desarrollo Full Stack, con experiencia en tecnologías modernas para crear soluciones escalables y eficientes en frontend y backend. Enfocado en entregar valor tanto para clientes como para proyectos internos de empresas.",
    skills: {
      frontend: ["React", "Next.js", "Tailwind CSS", "Material UI"],
      backend: ["Python", "TypeScript", "NestJS"],
      databases: ["MySQL", "PostgreSQL", "MongoDB"],
      languages: ["Español (nativo)", "Inglés (básico)", "Portugués (básico)"]
    },
    buttons: {
      primary: "Descargar CV",
      secondary: "Ver Portafolio"
    },
    contact: {
      email: "beccialex2002@gmail.com",
      phone: "(54) 11 2633 0565"
    }
  },
  en: {
    greeting: "Hi! I'm Alex Becci",
    subtitle: "Full Stack Developer",
    description: "Passionate about Full Stack development, with experience in modern technologies to create scalable and efficient solutions in frontend and backend. Focused on delivering value both for clients and internal business projects.",
    skills: {
      frontend: ["React", "Next.js", "Tailwind CSS", "Material UI"],
      backend: ["Python", "TypeScript", "NestJS"],
      databases: ["MySQL", "PostgreSQL", "MongoDB"],
      languages: ["Spanish (native)", "English (basic)", "Portuguese (basic)"]
    },
    buttons: {
      primary: "Download CV",
      secondary: "View Portfolio"
    },
    contact: {
      email: "beccialex2002@gmail.com",
      phone: "(54) 11 2633 0565"
    }
  }
}

export default function Hero() {
  const [language, setLanguage] = useState<'es' | 'en'>('es')
  const t = content[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            {t.greeting}
          </h1>
          <h2 className="text-2xl md:text-3xl text-indigo-400 font-semibold">
            {t.subtitle}
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left bg-slate-900/50 p-6 rounded-xl">
            <div>
              <h3 className="text-lg font-semibold text-indigo-400 mb-2">Frontend</h3>
              <p className="text-gray-300">{t.skills.frontend.join(', ')}</p>

              <h3 className="text-lg font-semibold text-indigo-400 mt-4 mb-2">Backend</h3>
              <p className="text-gray-300">{t.skills.backend.join(', ')}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-400 mb-2">Databases</h3>
              <p className="text-gray-300">{t.skills.databases.join(', ')}</p>

              <h3 className="text-lg font-semibold text-indigo-400 mt-4 mb-2">Languages</h3>
              <p className="text-gray-300">{t.skills.languages.join(', ')}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center text-gray-400">
            <a href={`mailto:${t.contact.email}`} className="flex items-center justify-center hover:text-indigo-400">
              <Mail className="mr-2 h-4 w-4" />
              {t.contact.email}
            </a>
            <a href={`tel:${t.contact.phone}`} className="flex items-center justify-center hover:text-indigo-400">
              <Phone className="mr-2 h-4 w-4" />
              {t.contact.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

