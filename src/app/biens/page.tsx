'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Exemple de données fictives pour les biens
const biens = [
  {
    id: 1,
    title: 'Appartement à la résidence IRMA',
    description: 'Bel appartement moderne et sécurisé',
    price: '900.000 FCFA',
    image: '/images/appartement à la residence IRMA/WhatsApp-Image-2022-06-09-at-11.22.26-768x1024.jpeg',
    type: 'Appartement',
    location: 'Dakar Plateau',
  },
  {
    id: 2,
    title: 'Appartement à Ouest Foire',
    description: 'Appartement situé à Ouest Foire. 1e étage, 4 chambres, salon, cuisine, toilette.',
    price: '350.000 FCFA',
    image: '/images/photo chez Mme Niang aminata mbodj/IMG-20251105-WA0015.jpg',
    type: 'Appartement',
    location: 'Ouest Foire',
  },
  {
    id: 3,
    title: 'Terrain titré à Ngor Almadies',
    description: 'IDAC SARL propose à la vente un terrain titré de 649 m², idéalement situé à Ngor Almadies – Zone 14, dans un secteur recherché et à fort potentiel.',
    price: '1 250 000 FCFA / m²',
    image: '/images/TERRAIN SAMASSA/WhatsApp Image 2026-01-07 at 09.29.33.jpeg',
    type: 'Terrain',
    surface: '649 m²',
    location: 'Ngor Almadies',
  },
  {
    id: 4,
    title: 'Résidence Bolong, Appartement F4',
    description: 'Le Cabinet IDAC SARL vous propose un magnifique F4 au 1er étage de la Résidence Bolong, derrière la station Shell.\n\n💎 Dans la résidence :\n• Ascenseur\n• Parking sécurisé\n• Gardiennage 24h/24\n• Piscine pour se détendre\n\n🏡 Composition de l’appartement :\n• Salon lumineux avec balcon\n• Cuisine moderne équipée (buanderie + garde-manger)\n• Chambre avec placard et toilette privative\n• 2 autres chambres avec placards (dont 1 avec balcon)\n• Patio idéal pour un espace vert\n• 2 toilettes extérieures',
    price: '1.000.000 FCFA TTC',
    image: '/images/PHOTO RESIDENCE BOLONG/IMG-20250812-WA0036.jpg',
    type: 'Appartement',
    location: 'Dakar',
  },
  {
    id: 5,
    title: 'VILLA SALY',
    description: 'Le Cabinet IDAC SARL vous propose une magnifique villa à Saly. Elle se compose de :\n\n🏡 Une spacieuse pièce de vie avec salon et salle à manger\n🍽️ Une cuisine moderne entièrement équipée\n🌳 Un grand jardin arboré pour profiter des beaux jours\n🚗 Un parking privé pour plusieurs véhicules\n\nCette villa est idéale pour une résidence principale ou une maison de vacances, offrant confort et tranquillité dans un cadre agréable.',
    price: 'Déjà loué',
    image: '/images/VILLA SALY/WhatsApp Image 2026-01-07 at 09.49.19.jpeg',
    type: 'Villa',
    location: 'Mbour, Sénégal',
  },
  {
    id: 6,
    title: 'PHOTO RESIDENCE DAHLIA',
    description: 'Direction le 3ᵉ étage pour découvrir ce magnifique appartement F3, entièrement climatisé, disponible meublé ou non meublé selon vos préférences.',
    price: '800.000 FCFA',
    image: '/images/PHOTO RESIDENCE DAHLIA/IMG-20250806-WA0011.jpg',
    type: 'Appartement',
    location: 'Dakar',
  },
]

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
          {['Tous', 'Appartement', 'Villa', 'Terrain'].map((type) => (
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
              {/* Image */}
              <div className="relative h-48">
                <Image
                  src={bien.image}
                  alt={bien.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Contenu */}
              <div className="p-4">
                <h2 className="font-semibold text-lg text-gray-800">
                  {bien.title}
                </h2>

                <p className="text-gray-600 text-sm">
                  {bien.type} • {bien.surface} • {bien.location}
                </p>

                <p className="text-blue-900 font-bold mt-2">
                  {bien.price.toLocaleString()} 
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

