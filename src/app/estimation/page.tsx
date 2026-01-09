'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useForm, ValidationError } from '@formspree/react'


export default function Estimation() {
  const router = useRouter()
  const [state, handleSubmit] = useForm('mgovdjjy')

  // 🔁 Redirection après succès
  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        router.push('/contact')
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [state.succeeded, router])

  // ✅ Message après envoi
  if (state.succeeded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-blue-200">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <p className="text-green-600 font-semibold text-lg">
            ✅ Votre demande d&apos;estimation a été envoyée !
          </p>
          <p className="text-gray-600 mt-2">
            Vous allez être redirigé vers le formulaire…
          </p>
        </div>
      </div>
    )
  }
  return (
    <section 
      className="bg-gray-50 py-16 border-t"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Estimer votre bien
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Recevez une estimation gratuite et confidentielle.
        </p>

        <form className="grid md:grid-cols-2 gap-4 max-w-3xl" onSubmit={handleSubmit}>
          <select className="border rounded-md px-4 py-2">
            <option>Type de bien</option>
            <option>Maison</option>
            <option>Appartement</option>
            <option>Terrain</option>
            <option>Local commercial</option>
          </select>

          <input
            type="text"
            placeholder="Localisation"
            className="border rounded-md px-4 py-2"
          />

          <input
            type="number"
            placeholder="Surface (m²)"
            className="border rounded-md px-4 py-2"
          />

          <input
            type="text"
            placeholder="Budget estimé"
            className="border rounded-md px-4 py-2"
          />

          <input
            type="tel"
            placeholder="Téléphone"
            className="border rounded-md px-4 py-2 md:col-span-2"
          />

          <button
            type="submit"
            className="bg-amber-500 text-white px-6 py-2 rounded-md hover:bg-amber-600 transition md:col-span-2 w-fit"
          >
            Demander une estimation
          </button>
        </form>
      </div>
    </section>
  )
}
