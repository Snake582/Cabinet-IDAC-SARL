'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// ================= DONNÉES =================
const biens = [
  {
    id: 1,
    title: 'Appartement à la résidence IRMA',
    description: 'Bel appartement moderne et sécurisé',
    price: '900.000 FCFA',
    image: '/images/appartement à la residence IRMA/WhatsApp-Image-2022-06-09-at-11.22.26-768x1024.jpeg',
    type: 'Appartement',
    location: 'Point E',
  },
  {
    id: 2,
    title: 'Appartement - Ouest Foire',
    description:
      'Appartement situé à Ouest Foire. 1e étage, 4 chambres, salon, cuisine, toilette.',
    price: 'Déjà loué',
    image: '/images/photo chez Mme Niang aminata mbodj/IMG-20251105-WA0015.jpg',
    type: 'Appartement',
    location: 'Ouest Foire',
  },
  {
    id: 3,
    title: 'Terrain titre foncier',
    description:
      'Terrain titre foncier de 649 m² idéalement situé à Ngor Almadies – Zone 14.',
    price: '1 250 000 FCFA / m²',
    image: '/images/TERRAIN SAMASSA/WhatsApp Image 2026-01-07 at 09.29.33.jpeg',
    type: 'Terrain',
    surface: '649 m²',
    location: 'Ngor Almadies',
  },
  {
    id: 4,
    title: 'Résidence Bolong, Appartement F4',
    description: 'Magnifique appartement F4 aux Almadies.',
    price: '1.000.000 FCFA TTC',
    image: '/images/PHOTO RESIDENCE BOLONG/IMG-20250812-WA0036.jpg',
    type: 'Appartement',
    location: 'Almadies, Dakar',
  },
  {
    id: 5,
    title: 'VILLA SALY',
    description: 'Magnifique villa avec jardin à Saly.',
    price: 'Déjà loué',
    image: '/images/VILLA SALY/WhatsApp Image 2026-01-07 at 09.49.19.jpeg',
    type: 'Villa',
    location: 'Mbour, Sénégal',
  },
  {
    id: 6,
    title: 'RESIDENCE DAHLIA',
    description:
      'Appartement F3 climatisé, disponible meublé ou non.',
    price: '800.000 FCFA',
    image: '/images/PHOTO RESIDENCE DAHLIA/IMG-20250806-WA0011.jpg',
    type: 'Appartement',
    location: 'Mermoz, Dakar',
  },
  {
    id: 7,
    title: 'Appartement à louer – Mariste (Duplex)',
    description:
      'Magnifique appartement duplex dans un quartier calme.',
    price: '300.000 FCFA TTC',
    image: '/images/Appart à Mariste/WhatsApp Image 2026-01-14 at 11.22.07.jpeg',
    type: 'Appartement',
    location: 'Mariste, Dakar',
  },
  {
    id: 8,
    title: 'Spa totalement équipée',
    description:
      'Spa professionnel dans un environnement sécurisé.',
    price: '750.000 FCFA',
    image:
      '/images/Appartement ngor-almadies/WhatsApp Image 2026-01-29 at 11.03.46 (2).jpeg',
    type: 'Local commercial',
    location: 'Ngor Almadies',
  },
  {
    id: 9,
    title: 'Salle de sport totalement équipée',
    description:
      'Salle de sport entièrement équipée.',
    price: '500.000 FCFA',
    image:
      '/images/Appartement ngor-almadies/WhatsApp Image 2026-01-29 at 11.03.40.jpeg',
    type: 'Local commercial',
    location: 'Ngor Almadies',
  },
]

// ================= COMPOSANT =================
export default function Biens() {
  const [filter, setFilter] = useState('Tous')

  const filteredBiens =
    filter === 'Tous'
      ? biens
      : biens.filter((b) => b.type === filter)

  return (
    <main className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">

        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Nos biens
        </h1>

        {/* FILTRE */}
        <div className="flex flex-wrap gap-3 mb-10">
          {['Tous', 'Appartement', 'Villa', 'Terrain', 'Local commercial'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-md font-medium transition ${
                filter === type
                  ? 'bg-blue-900 text-white'
                  : 'bg-white text-gray-800 border hover:bg-blue-100'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* LISTE DES BIENS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBiens.map((bien) => (
            <div
              key={bien.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              {/* IMAGE SÉCURISÉE */}
              <div className="relative h-48">
                {bien.image ? (
                  <Image
                    src={bien.image}
                    alt={bien.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500 text-sm">
                    Image non disponible
                  </div>
                )}
              </div>

              {/* CONTENU */}
              <div className="p-4">
                <h2 className="font-semibold text-lg text-gray-800">
                  {bien.title}
                </h2>

                <p className="text-gray-600 text-sm">
                  {bien.type}
                  {bien.surface && ` • ${bien.surface}`}
                  {' • '}
                  {bien.location}
                </p>

                <p className="text-blue-900 font-bold mt-2">
                  {bien.price}
                </p>

                <Link
                  href={`/biens/${bien.id}`}
                  className="mt-4 inline-block bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition text-sm"
                >
                  Voir détails
                </Link>
              </div>
            </div>
          ))}

          {filteredBiens.length === 0 && (
            <p className="col-span-full text-center text-gray-600">
              Aucun bien ne correspond à ce filtre.
            </p>
          )}
        </div>
      </div>
    </main>
  )
}