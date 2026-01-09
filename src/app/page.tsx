'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm, ValidationError } from '@formspree/react'
import { useEffect } from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const Datapartenaires = [
  {
    id: 1,
    image: '/images/logo.png',
    alt: 'BHS',
  },
  {
    id: 2,
    image: '/images/OIP.webp',
    alt: 'BCEAO',
  },
  {
    id: 3,
    image: '/images/etablissementon2218.png',
    alt: 'SGBS',
  },
   {
    id: 4,
    image: '/images/bnde-550x550-500x500.jpg',
    alt: 'BNDE',
  },
  {
    id: 5,
    image: '/images/AzkkBOYak4zUPTNDvA1y1Zi6aJq84MoI6JfgutYU.jpg',
    alt: 'ORABANK',
  },
  {
    id: 6,
    image: '/images/bank-of-africa-logo-png_seeklogo-343454.png',
    alt: 'BANK OF AFRICA',
  },
   {
    id: 7,
    image: '/images/Sans-titre-6.jpg',
    alt: 'GROUPE COFINA',
  },
  {
    id: 8,
    image: '/images/OIP (1).webp',
    alt: 'CGF BOURSE',
  },
  {
    id: 9,
    image: '/images/OIP (2).webp',
    alt: 'BNP PARIBAS',
  },
  {
    id: 10,
    image: '/images/OIPe.webp',
    alt: 'SUNU BANK',
  },
]

const Datareferences = [
  {
    id: 1,
    image: '/images/OIP (3).webp',
    alt: 'Gainde2000',
  },
  {
    id: 2,
    image: '/images/Teyliom-Group.png',
    alt: 'Teyliom Group',
  },
  {
    id: 3,
    image: '/images/DIMA-GROUPE.jpg',
    alt: 'Dima Groupe',
  },
  {
    id: 4,
    image: '/images/1576867972899.jfif',
    alt: 'Addoha',
  },
  {
    id: 5,
    image: '/images/OIP (4).webp',
    alt: 'YAS',
  },
  {
    id: 6,
    image: '/images/images.png',
    alt: 'Ashoka',
  },
  {
    id: 7,
    image: '/images/platinum.jpeg',
    alt: 'Platinum',
  },
  {
    id: 8,
    image: '/images/atlantic.jpeg',
    alt: 'Atlantic',
  },
]

const biens = [
  {
    id: 1,
    title: 'Appartement à la résidence IRMA',
    description: 'Bel appartement moderne et sécurisé déjà meublé, situé à la résidence IRMA, offrant un cadre de vie confortable et pratique.',
    price: '900.000 FCFA',
    image: '/images/appartement à la residence IRMA/WhatsApp-Image-2022-06-09-at-11.22.26-768x1024.jpeg',
  },
  {
    id: 4,
    title: 'Résidence Bolong, Appartement F4',
    description: 'Le Cabinet IDAC SARL vous propose un magnifique F4 au 1er étage de la Résidence Bolong, derrière la station Shell.',
    price: '1.000.000 FCFA TTC',
    image: '/images/PHOTO RESIDENCE BOLONG/IMG-20250812-WA0036.jpg',
  },
  {
    id: 3,
    title: 'Terrain titré à Ngor Almadies',
    description: 'IDAC SARL propose à la vente un terrain titré de 649 m², idéalement situé à Ngor Almadies – Zone 14, dans un secteur recherché et à fort potentiel.',
    price: '1 250 000 FCFA / m² FCFA',
    image: '/images/TERRAIN SAMASSA/WhatsApp Image 2026-01-07 at 09.29.33.jpeg',
  },
]

export default function Home() {
  const [state, handleSubmit] = useForm('mgovdjjy')
    const router = useRouter()
  
    // 🔁 Redirection après succès
    useEffect(() => {
      if (state.succeeded) {
        const timer = setTimeout(() => {
          router.push('/')
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
              ✅ Merci pour votre message !
            </p>
            <p className="text-gray-600 mt-2">
              Vous allez être redirigé vers l&apos;accueil…
            </p>
          </div>
        </div>
      )
    }

  return (
    <main className="bg-gray-50 text-gray-900">

      {/* ================= SECTION 1 : Présentation ================= */}
 <section className="relative h-[80vh] flex items-center justify-center">
  {/* Image de fond */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/images/11088893.png')" }}
  />

  {/* Overlay sombre */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Contenu */}
  <div className="relative z-10 text-center px-6 max-w-3xl">
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
      Bienvenue chez <span className="text-blue-400">Cabinet IDAC SARL</span>
    </h1>

    <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
      Le Cabinet IDAC est une structure spécialisée dans la gestion et la
      valorisation du patrimoine, ainsi que dans l&apos;accompagnement global
      des particuliers, entreprises et copropriétés.
    </p>
  </div>
</section>

      {/* ================= SECTION 2 : Les Biens ================= */}
      <section id="biens" className="py-24 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
          Nos Biens
        </h2>
        <p className="text-center text-gray-700 mb-12">
          Découvrez notre sélection de biens immobiliers au Sénégal.
        </p>

       <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
  {biens.map((bien) => (
    <div
      key={bien.id}
      className="bg-white shadow-md rounded-lg overflow-hidden"
    >
      {/* Image */}
      <Image
        src={bien.image}
        alt={bien.title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />

      {/* Contenu */}
      <div className="p-4">
        <h3 className="font-semibold text-lg text-blue-900">
          {bien.title}
        </h3>
        <p className="text-gray-600 text-sm mt-1">
          {bien.description}
        </p>
        <p className="mt-3 font-bold text-amber-600">
          {bien.price}
        </p>
      </div>
    </div>
  ))}
</div>

        <Link
          href="/biens"
          className="block text-center mt-8 text-white px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-800 transition w-48 mx-auto"
        >
          Voir tous nos biens
        </Link>
      </section>

      {/* ================= SECTION 3 : Témoignages ================= */}
      <section id="temoignages" className="py-24 px-4 bg-white">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
          Témoignages
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
            “Excellent service !” – Client A
          </div>
          <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
            “Très professionnel et réactif.” – Client B
          </div>
          <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
            “Je recommande vivement.” – Client C
          </div>
        </div>
      </section>

      {/* ================= SECTION 4 : Partenaires ================= */}
      <section className="py-24 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
          Nos Partenaires
        </h2>

        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
          {Datapartenaires.map((partenaire) => (
            <div
              key={partenaire.id}
              className="bg-white rounded-lg shadow-md p-6 w-48 h-24 flex items-center justify-center overflow-hidden"
            >
              {partenaire.image ? (
                <Image
                  src={partenaire.image}
                  alt={partenaire.alt}
                  width={150}
                  height={60}
                  className="object-cover"
                />
              ) : (
                <span className="text-gray-400 text-sm">
                  Logo à venir
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 5 : Références ================= */}
      <section className="py-24 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
          Nos Références
        </h2>

        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
          {Datareferences.map((reference) => (
            <div
              key={reference.id}
              className="bg-white rounded-lg shadow-md p-6 w-48 h-24 flex items-center justify-center overflow-hidden"
            >
              <Image
                src={reference.image}
                alt={reference.alt}
                width={150}
                height={60}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 6 : Contact ================= */}
      <section id="contact" className="py-24 px-4 bg-white">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
          Contactez-nous
        </h2>

        <div className="max-w-3xl mx-auto">
          <form
                    onSubmit={handleSubmit}
                    className="grid gap-4 max-w-xl border-solid p-6 rounded-md shadow-sm mx-auto"
                  >
                    <input
                      type="text"
                      name="nom"
                      placeholder="Votre nom"
                      required
                      className="border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-300 border-indigo-600"
                    />
          
                    <input
                      type="email"
                      name="email"
                      placeholder="Votre email"
                      required
                      className="border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-300 border-indigo-600"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
          
                    <textarea
                      name="message"
                      placeholder="Votre message"
                      rows={4}
                      required
                      className="border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-300 border-indigo-600"
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
          
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition w-fit disabled:opacity-50"
                    >
                      {state.submitting ? 'Envoi…' : 'Envoyer le message'}
                    </button>
                  </form>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-blue-900 text-white py-8 text-center">
        <p>© 2026 Cabinet IDAC SARL – Tous droits réservés</p>
        <p>
          📍 115 Rue Carnot × Jean Jaurès, Dakar |
          <a href="mailto:contact@cabinetidac.sn" className='hover:underline'>✉️ contact@cabinetidac.sn</a> |
          <a href="tel:+221338239998" className='hover:underline'>📞 +221 33 823 99 98</a>
        </p>
        <Link href="#" target="_blank" className="inline-flex items-center mt-2 hover:underline">
          <Instagram className="mr-2" />
        </Link>
        <Link href="#" target="_blank" className="inline-flex items-center mt-2 hover:underline">
        <Facebook className="mr-2" />
        </Link>
        <Link href="#" target="_blank" className="inline-flex items-center mt-2 hover:underline">
        <Twitter className="mr-2" />
        </Link>
        <div className="mt-4 text-end px-4">
          <p className="mt-4 text-sm">
          Conçu par <a href="https://guelewardev.vercel.app/" target="_blank" className="underline">Guelewar Dev</a>
        </p>
        </div>
      </footer>

    </main>
  )
}
