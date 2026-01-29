'use client'

import { useState } from 'react'
import {
  Building,
  Users,
  Clipboard,
  Home,
  DollarSign,
  FileText,
  Briefcase,
  ChevronDown,
} from 'lucide-react'

const services = [
  {
    title: 'Étude pour investissement immobilier',
    description:
      'Le Cabinet IDAC accompagne investisseurs et entreprises dans l’analyse et la structuration de leurs projets d’investissement immobilier. Nous réalisons des études approfondies du marché, évaluons la rentabilité des opérations et identifions les opportunités les plus sécurisées. Grâce à une approche stratégique et objective, nous aidons nos clients à prendre des décisions éclairées, durables et adaptées à leurs objectifs financiers et patrimoniaux.',
    icon: Building,
  },
  {
    title: 'Gestion locative',
    description:
      'Nous assurons la gestion intégrale de votre patrimoine en veillant au bon entretien et à la rentabilité. Notre approche rigoureuse garantit une gestion fiable, durable et parfaitement adaptée à vos besoins.',
    icon: Home,
  },
  {
    title: 'Syndic de copropriété',
    description:
      'Nous disposons d’un département spécialement dédié à la gestion de la copropriété. Nous assurons le syndic avec sérieux, transparence et méthode : entretien des parties communes, gestion administrative et financière, et préservation du cadre de vie des résidents.',
    icon: Users,
  },
  {
    title: 'Fiscalité',
    description:
      'Le Cabinet IDAC propose un accompagnement complet en fiscalité immobilière afin de sécuriser, optimiser et simplifier l’ensemble des démarches fiscales liées aux biens immobiliers des propriétaires, investisseurs et entreprises.',
    icon: FileText,
  },
  {
    title: 'Vente de biens',
    description:
      'Nous accompagnons nos clients dans toutes les étapes liées à la vente, l’achat ou la location de biens immobiliers. Notre mission est de sécuriser chaque démarche et d’offrir une expérience simple, fluide et professionnelle.',
    icon: DollarSign,
  },
  {
    title: 'Ressources humaines',
    description:
      'Le Cabinet IDAC propose un accompagnement structuré en ressources humaines lié aux activités immobilières et patrimoniales. Nous assistons nos clients dans l’organisation, la gestion et le suivi du personnel intervenant sur leurs biens et projets (gestionnaires, agents, gardiens, prestataires), dans le respect des obligations légales et opérationnelles.',
    icon: Clipboard,
  },
  {
    title: 'Gestion de patrimoine',
    description:
      'Nous conseillons les investisseurs dans le développement et l’optimisation de leur patrimoine immobilier grâce à des solutions sur mesure, sécurisées et orientées résultats.',
    icon: Briefcase,
  },
]

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <main className="max-w-7xl mx-auto px-4 py-16 space-y-12">
      <h1 className="text-3xl font-bold text-blue-900 text-center">
        Nos Services
      </h1>

      <p className="text-gray-600 text-center max-w-2xl mx-auto">
        Découvrez l’ensemble de nos services pour vous accompagner dans vos projets immobiliers et patrimoniaux.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon
          const isOpen = openIndex === index

          return (
            <div
              key={index}
              className="bg-white border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col"
            >
              {/* ICON */}
              <div className="flex items-center justify-center h-16 w-16 mx-auto mb-4 rounded-full bg-blue-300 text-white">
                <Icon size={28} />
              </div>

              {/* TITLE */}
              <h3 className="font-semibold text-lg text-gray-900 text-center mb-2">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <div
                className={`text-gray-600 text-sm text-center overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-16 opacity-90'
                }`}
              >
                {service.description}
              </div>

              {/* BUTTON */}
              {service.description.length > 120 && (
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="mt-4 mx-auto inline-flex items-center gap-2 text-blue-700 font-medium text-sm group"
                >
                  {isOpen ? 'Fermer' : 'Voir détails'}
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>
              )}
            </div>
          )
        })}
      </div>
    </main>
  )
}
