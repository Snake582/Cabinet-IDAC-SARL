'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useForm, ValidationError } from '@formspree/react'
import { User } from 'lucide-react'

const agents = [
  {
    name: 'IBRAHIMA DIENG',
    role: 'Directeur Général',
  },
  {
    name: 'SAHER SECK',
    role: 'Directeur Commercial & Gestion de Copropriété',
    phone: '+221 77 612 69 98',
    email: 'saher.seck@cabinetidac.sn',
  },
  {
    name: 'MAÏMOUNA KAMARA',
    role: 'Responsable Administrative et Financier',
    phone: '+221 76 638 96 80',
    email: 'maykamara@hotmail.fr',
  },
  {
    name: 'EL HADJI NDIAYE DIAGNE',
    role: 'Agent de Recouvrement',
    phone: '+221 70 638 96 80',
    email: 'contact@cabinetidac.sn',
  },
  {
    name: 'KHADIDIATOU I. SY',
    role: 'Chargée Recouvrement, Contentieux et Commerciale',
    phone: '+221 70 638 96 81',
    email: 'khadijasy@cabinetidac.sn',
  },
  {
    name: 'AICHA J. SISSOKHO',
    role: 'Comptable',
    phone: '+221 76 555 39 39 / 77 873 73 40',
    email: 'aichacissokho@cabinetidac.sn',
  },
  {
    name: 'KHADY WADE',
    role: 'Agent de Recouvrement',
    phone: '+221 76 622 92 78',
    email: 'contact@cabinetidac.sn',
  },
  {
    name: 'Cabinet IDAC SARL',
    role: 'Agence Immobilière',
    phone: '+221 33 823 99 98',
    email: 'contact@cabinetidac.sn',
  },
]

export default function Page() {
  const [state, handleSubmit] = useForm('mgovdjjy')
  const router = useRouter()

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => router.push('/contact'), 3000)
      return () => clearTimeout(timer)
    }
  }, [state.succeeded, router])

  if (state.succeeded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-blue-100">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
          <p className="text-green-600 font-bold text-xl">
            ✅ Merci pour votre message !
          </p>
          <p className="text-gray-700 mt-2">
            Vous allez être redirigé vers le formulaire…
          </p>
        </div>
      </div>
    )
  }

  return (
    <main className="bg-white text-gray-900">

      {/* ================= CONTACT ================= */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-4 text-center">
          Contactez-nous
        </h1>
        <p className="text-gray-600 mb-10 max-w-3xl text-center mx-auto">
          Notre équipe est à votre écoute pour vous accompagner dans tous vos projets immobiliers. 
          Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl mx-auto">
          <input
            type="text"
            name="nom"
            placeholder="Votre nom"
            required
            className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-300 focus:outline-none transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            required
            className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-300 focus:outline-none transition"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            name="message"
            placeholder="Votre message"
            rows={5}
            required
            className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-300 focus:outline-none transition resize-none"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition w-fit mx-auto disabled:opacity-50"
          >
            {state.submitting ? 'Envoi…' : 'Envoyer le message'}
          </button>
        </form>
      </section>

      {/* ================= ÉQUIPE ================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 border-t border-blue-200">
        <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
          Notre équipe
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {agents.map((agent, idx) => (
            <div
              key={idx}
              className="border border-y-4 border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition text-center bg-white"
            >
              <div className="flex items-center justify-center h-20 w-20 mx-auto mb-4 rounded-full bg-blue-300 shadow-inner">
                <User size={32} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg">{agent.name}</h3>
              <p className="text-gray-600">{agent.role}</p>
              <div className="mt-3 text-sm space-y-1">
                {agent.phone && (
                  <p>📞 <a href={`tel:${agent.phone}`} className="hover:underline">{agent.phone}</a></p>
                )}
                {agent.email && (
                  <p>✉️ <a href={`mailto:${agent.email}`} className="hover:underline">{agent.email}</a></p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= INFOS AGENCE ================= */}
      <section className="bg-blue-900 text-white py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <h2 className="text-2xl font-semibold mb-2">
            Cabinet IDAC SARL
          </h2>
          <p>📍 115 rue Carnot × Jean Jaurès, Dakar, en centre-ville</p>
          <p><a href="tel:+221338239998" className='hover:underline'>📞 +221 33 823 99 98</a></p>
          <p><a href="mailto:contact@cabinetidac.sn" className='hover:underline'>✉️ contact@cabinetidac.sn</a></p>
          <p>🕒 Lundi – Jeudi : 8h30 – 17h30</p>
          <p>🕒 Vendredi : 8h30 – 15h30</p>
        </div>
      </section>
    </main>
  )
}
