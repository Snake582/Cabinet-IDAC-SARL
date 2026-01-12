'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
import { useState } from 'react'
import { Swiper as SwiperType } from 'swiper'

const bienData = [
  {
    id: '1',
    title: 'Appartement à la résidence IRMA',
    type: 'Appartement',
    location: 'Dakar Plateau',
    price: '900.000 FCFA',
    surface: 120,
    images: [
      '/images/appartement%20à%20la%20residence%20IRMA/WhatsApp-Image-2022-06-09-at-14.43.05-768x10241.jpeg',
      '/images/appartement%20à%20la%20residence%20IRMA/WhatsApp-Image-2022-06-09-at-14.43.06-2-768x1024.jpeg',
      '/images/appartement%20à%20la%20residence%20IRMA/WhatsApp-Image-2022-06-09-at-14.43.06-768x1024.jpeg',
      '/images/appartement%20à%20la%20residence%20IRMA/WhatsApp-Image-2022-06-09-at-14.43.07-1-768x1024.jpeg',
      '/images/appartement%20à%20la%20residence%20IRMA/WhatsApp-Image-2022-06-09-at-14.43.05-768x1024.jpeg',
      '/images/appartement%20à%20la%20residence%20IRMA/Appart6-768x1024.jpeg',
      '/images/appartement%20à%20la%20residence%20IRMA/Appart5-768x1024.jpeg',
    ],
    description: 'Bel appartement moderne, sécurisé et bien situé.',
  },
  {
    id: '2',
    title: 'Appartement à $',
    type: 'Appartement',
    location: '$',
    price: '2 FCFA',
    images: [
      '/images/photo chez Mme Niang aminata mbodj/IMG-20251105-WA0013.jpg',
      '/images/photo chez Mme Niang aminata mbodj/IMG-20251105-WA0012.jpg',
      '/images/photo chez Mme Niang aminata mbodj/IMG-20251105-WA0011.jpg',
      '/images/photo chez Mme Niang aminata mbodj/IMG-20251105-WA0009.jpg',
      '/images/photo chez Mme Niang aminata mbodj/IMG-20251105-WA0008.jpg',
      '/images/photo chez Mme Niang aminata mbodj/IMG-20251105-WA0005.jpg',
      '/images/photo chez Mme Niang aminata mbodj/IMG-20251105-WA0010.jpg',
      '/images/photo chez Mme Niang aminata mbodj/IMG-20251105-WA0004.jpg',
    ],
    description: 'Appartement situé à Ouest Foire. 1e étage, 4 chambres, salon, cuisine, toilette.',
  },
  {
    id: '3',
    title: 'Terrain titré à Ngor Almadies',
    type: 'Terrain',
    location: 'Ngor Almadies',
    price: '1 250 000 FCFA / m²',
    surface: '649 m²',
    images: [
      '/images/TERRAIN%20SAMASSA/WhatsApp%20Image%202026-01-07%20at%2009.29.33.jpeg',
    ],
    description:
      'IDAC SARL propose à la vente un terrain titré de 649 m², idéalement situé à Ngor Almadies – Zone 14, dans un secteur recherché et à fort potentiel. Le terrain fait actuellement l’objet d’une démolition en cours, réalisée conformément à une autorisation administrative dûment validée, ce qui permet un démarrage immédiat d’un projet immobilier. Il se prête parfaitement à un développement résidentiel ou commercial.',
  },
  {    id: '4',
    title: 'Résidence Bolong, Appartement F4',
    type: 'Appartement',
    location: 'Dakar',
    price: '1.000.000 FCFA TTC',
    images: [
      '/images/PHOTO RESIDENCE BOLONG/IMG-20250812-WA0036.jpg',
      '/images/PHOTO RESIDENCE BOLONG/IMG-20250812-WA0038.jpg',
      '/images/PHOTO RESIDENCE BOLONG/IMG-20250812-WA0039.jpg',
      '/images/PHOTO RESIDENCE BOLONG/IMG-20250812-WA0040.jpg',
      '/images/PHOTO RESIDENCE BOLONG/IMG-20250812-WA0041.jpg',
      '/images/PHOTO RESIDENCE BOLONG/IMG-20250812-WA0042.jpg',
      '/images/PHOTO RESIDENCE BOLONG/IMG-20250812-WA0043.jpg',
      '/images/PHOTO RESIDENCE BOLONG/IMG-20250812-WA0044.jpg',
      '/images/PHOTO RESIDENCE BOLONG/IMG-20250812-WA0045.jpg',
      '/images/PHOTO RESIDENCE BOLONG/IMG-20250812-WA0046.jpg',
      '/images/PHOTO RESIDENCE BOLONG/IMG-20250812-WA0047.jpg',
      '/images/PHOTO RESIDENCE BOLONG/IMG-20250812-WA0048.jpg',
      '/images/PHOTO RESIDENCE BOLONG/IMG-20250812-WA0049.jpg',
      '/images/PHOTO RESIDENCE BOLONG/IMG-20250812-WA0050.jpg',
      '/images/PHOTO RESIDENCE BOLONG/IMG-20250812-WA0037.jpg',
    ],
    description: 'Le Cabinet IDAC SARL vous propose un magnifique F4 au 1er étage de la Résidence Bolong, derrière la station Shell.\n\n💎 Dans la résidence :\n• Ascenseur\n• Parking sécurisé\n• Gardiennage 24h/24\n• Piscine pour se détendre\n\n🏡 Composition de l’appartement :\n• Salon lumineux avec balcon\n• Cuisine moderne équipée (buanderie + garde-manger)\n• Chambre avec placard et toilette privative\n• 2 autres chambres avec placards (dont 1 avec balcon)\n• Patio idéal pour un espace vert\n• 2 toilettes extérieures',
  },
  {
    id: '5',
    title: 'VILLA SALY',
    type: 'Villa',
    location: 'Mbour, Sénégal',
    price: 'Déjà loué',
    images: [
      '/images/VILLA SALY/WhatsApp Image 2026-01-07 at 09.49.19.jpeg',
      '/images/VILLA SALY/WhatsApp Image 2026-01-07 at 09.49.21 (2).jpeg',
      '/images/VILLA SALY/WhatsApp Image 2026-01-07 at 09.49.19 (3).jpeg',
      '/images/VILLA SALY/WhatsApp Image 2026-01-07 at 09.49.19 (4).jpeg',
      '/images/VILLA SALY/WhatsApp Image 2026-01-07 at 09.49.20.jpeg',
      '/images/VILLA SALY/WhatsApp Image 2026-01-07 at 09.49.21 (1).jpeg',
      '/images/VILLA SALY/WhatsApp Image 2026-01-07 at 09.49.21.jpeg',
      '/images/VILLA SALY/WhatsApp Image 2026-01-07 at 09.49.20 (5).jpeg',
      '/images/VILLA SALY/WhatsApp Image 2026-01-07 at 09.49.20 (4).jpeg',
      '/images/VILLA SALY/WhatsApp Image 2026-01-07 at 09.49.20 (3).jpeg',
      '/images/VILLA SALY/WhatsApp Image 2026-01-07 at 09.49.19 (2).jpeg',
      '/images/VILLA SALY/WhatsApp Image 2026-01-07 at 09.49.19 (1).jpeg',
      '/images/VILLA SALY/WhatsApp Image 2026-01-07 at 09.49.18 (3).jpeg',
      '/images/VILLA SALY/WhatsApp Image 2026-01-07 at 09.49.18.jpeg',
      '/images/VILLA SALY/WhatsApp Image 2026-01-07 at 09.49.16.jpeg',
    ],
    description: 'Le Cabinet IDAC SARL vous propose une magnifique villa à Saly. Elle se compose de :\n\n🏡 Une spacieuse pièce de vie avec salon et salle à manger\n🍽️ Une cuisine moderne entièrement équipée\n🌳 Un grand jardin arboré pour profiter des beaux jours\n🚗 Un parking privé pour plusieurs véhicules\n\nCette villa est idéale pour une résidence principale ou une maison de vacances, offrant confort et tranquillité dans un cadre agréable.',
  },
  {
    id: '6',
    title: 'Résidence RESIDENCE DAHLIA',
    type: 'Appartement',
    location: 'Dakar',
    price: '800.000 FCFA',
    images: [
      '/images/PHOTO RESIDENCE DAHLIA/IMG-20250806-WA0015.jpg',
      '/images/PHOTO RESIDENCE DAHLIA/WhatsApp Image 2025-08-12 à 11.56.21_fa0e3413.jpg',
      '/images/PHOTO RESIDENCE DAHLIA/WhatsApp Image 2026-01-07 at 09.29.34 (1).jpeg',
      '/images/PHOTO RESIDENCE DAHLIA/WhatsApp Image 2026-01-07 at 09.29.34 (2).jpeg',
      '/images/PHOTO RESIDENCE DAHLIA/WhatsApp Image 2026-01-07 at 09.29.34.jpeg',
      '/images/PHOTO RESIDENCE DAHLIA/WhatsApp Image 2026-01-07 at 09.29.35 (2).jpeg',
      '/images/PHOTO RESIDENCE DAHLIA/WhatsApp Image 2026-01-07 at 09.29.35 (3).jpeg',
      '/images/PHOTO RESIDENCE DAHLIA/WhatsApp Image 2026-01-07 at 09.29.35 (4).jpeg',
      '/images/PHOTO RESIDENCE DAHLIA/WhatsApp Image 2026-01-07 at 09.29.35 (5).jpeg',
      '/images/PHOTO RESIDENCE DAHLIA/WhatsApp Image 2026-01-07 at 09.29.36 (2).jpeg',
      '/images/PHOTO RESIDENCE DAHLIA/WhatsApp Image 2026-01-07 at 09.29.36 (4).jpeg',
    ],
    description: 'Direction le 3ᵉ étage pour découvrir ce magnifique appartement F3, entièrement climatisé, disponible meublé ou non meublé selon vos préférences.🛋️ Grand salon lumineux, parfaitement aménagé, avec une vue exceptionnelle sur le Monument de la Renaissance🛏️ 3 chambres avec placards, dont une suite parentale avec toilette intérieure et balcon privé🚿 Toilette extérieure🍽️ Cuisine fonctionnelle avec buanderie Un cadre de vie confortable, élégant et pratique, idéal pour se sentir chez soi dès le premier jour.'
 },
]

export default function BienPage() {
  const { id } = useParams()
  const bien = bienData.find((b) => b.id === id)

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  if (!bien) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-600 mb-4">Bien non trouvé.</p>
        <Link
          href="/biens"
          className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
        >
          ← Retour aux biens
        </Link>
      </div>
    )
  }

  return (
    <main className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Retour */}
        <Link
          href="/biens"
          className="inline-block mb-6 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
        >
          ← Retour aux biens
        </Link>

        {/* Infos */}
        <h1 className="text-3xl font-bold text-blue-900 mb-2">{bien.title}</h1>
        <p className="text-gray-600 mb-4">
          {bien.type} • {bien.surface ? `${bien.surface}` : ''} • {bien.location}
        </p>
        <p className="text-2xl font-bold text-blue-900 mb-8">
          {typeof bien.price === 'number'
            ? `${bien.price} `
            : bien.price}
        </p>

        {/* CAROUSEL PRINCIPAL */}
        <div className="flex justify-center">
          <Swiper
            modules={[Navigation, Pagination, Thumbs]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={10}
            loop
            thumbs={{ swiper: thumbsSwiper }}
            className="max-w-[800px] w-full"
          >
            {bien.images.map((img, idx) => (
              <SwiperSlide key={idx} className="flex justify-center items-center">
                <div className="relative w-full h-[400px] md:h-[600px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={img}
                    alt={`${bien.title} image ${idx + 1}`}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* MINIATURES */}
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Navigation, Thumbs]}
          spaceBetween={2}
          slidesPerView={6}
          watchSlidesProgress
          className="mb-12 flex justify-center"
        >
          {bien.images.map((img, idx) => (
            <SwiperSlide key={idx} className="cursor-pointer flex justify-center">
              <div className="relative w-14 md:w-24 h-24 md:h-32 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={img}
                  alt={`${bien.title} miniature ${idx + 1}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Description */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-10">
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-gray-700 leading-relaxed">{bien.description}</p>
        </section>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="tel:+221338239998"
            className="bg-blue-900 text-white px-6 py-3 rounded-md text-center hover:bg-blue-800"
          >
            Contacter l&apos;agence
          </Link>

          <Link
            href="/estimation"
            className="bg-amber-500 text-white px-6 py-3 rounded-md text-center hover:bg-amber-600"
          >
            Demander une estimation
          </Link>
        </div>
      </div>
    </main>
  )
}
