'use client'

import { Building, Users, Clipboard, Home, DollarSign, FileText } from 'lucide-react'

const services = [
  {
    title: 'Étude pour investissement immobilier',
    description: 'Analyse complète du marché et conseils pour optimiser vos investissements.',
    icon: Building,
  },
  {
    title: 'Syndic de Copropriété',
    description: 'Gestion rigoureuse et transparente des copropriétés.',
    icon: Users,
  },
  {
    title: 'Ressources Humaines',
    description: 'Accompagnement pour la gestion du personnel lié à vos biens et projets.',
    icon: Clipboard,
  },
  {
    title: 'La gestion locative',
    description: 'Prise en charge complète de la location, suivi des loyers et maintenance.',
    icon: Home,
  },
  {
    title: 'Ventes de Biens',
    description: 'Assistance professionnelle pour la vente de vos propriétés.',
    icon: DollarSign,
  },
  {
    title: 'Fiscalité',
    description: 'Conseils pour optimiser vos obligations fiscales liées à l’immobilier.',
    icon: FileText,
  },
]

export default function Services() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16 space-y-12">
      <h1 className="text-3xl font-bold text-blue-900 text-center">
        Nos Services
      </h1>
      <p className="text-gray-600 text-center max-w-2xl mx-auto">
        Découvrez l’ensemble de nos services pour vous accompagner dans vos projets immobiliers et patrimoniaux.
      </p>

      {/* ================= CARDS DES SERVICES ================= */}
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <div
              key={index}
              className="bg-white border border-x-4 border-blue-300 rounded-lg p-6 shadow-sm hover:shadow-md transition text-center"
            >
              <div className="flex items-center justify-center h-16 w-16 mx-auto mb-4 rounded-full bg-blue-300 text-white">
                <Icon size={28} />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          )
        })}
      </div>
    </main>
  )
}
