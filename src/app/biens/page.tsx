'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Heart } from 'lucide-react'

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function BiensPage() {
  const [biens, setBiens] = useState<any[]>([])
  const [filteredBiens, setFilteredBiens] = useState<any[]>([])
  const [maxPrice, setMaxPrice] = useState('')
  const [type, setType] = useState('')
  const [likedBiens, setLikedBiens] = useState<number[]>([])
  const router = useRouter()

  useEffect(() => {
    fetch(`${API_URL}/biens`)
      .then(res => res.json())
      .then(data => {
        setBiens(data)
        setFilteredBiens(data)
      })
  }, [])

  useEffect(() => {
    let result = biens

    if (maxPrice)
      result = result.filter(b => Number(b.price) <= Number(maxPrice))

    if (type)
      result = result.filter(b => b.type === type)

    setFilteredBiens(result)
  }, [maxPrice, type, biens])
  useEffect(() => {
  const storedLikes = localStorage.getItem('likedBiens')
  if (storedLikes) {
    setLikedBiens(JSON.parse(storedLikes))
  }
}, [])

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'disponible':
        return 'bg-emerald-500'
      case 'vendu':
        return 'bg-blue-600'
      case 'loué':
        return 'bg-amber-500'
      default:
        return 'bg-red-600'
    }
  }
  const toggleLike = (id: number) => {
  let updatedLikes

  if (likedBiens.includes(id)) {
    updatedLikes = likedBiens.filter(bienId => bienId !== id)
  } else {
    updatedLikes = [...likedBiens, id]
  }

  setLikedBiens(updatedLikes)
  localStorage.setItem('likedBiens', JSON.stringify(updatedLikes))
}

  return (
    <div className="bg-gray-50 min-h-screen">

      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 text-center px-6">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Trouvez Votre Propriété Idéale
        </h1>
        <p className="opacity-80">Sélection exclusive de biens immobiliers</p>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-6 mx-6 md:mx-20 -mt-10 relative z-10">
        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="number"
            placeholder="Prix maximum (FCFA)"
            value={maxPrice}
            onChange={e => setMaxPrice(e.target.value)}
            className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <select
            value={type}
            onChange={e => setType(e.target.value)}
            className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="">Tous les types</option>
            <option value="Appartement">Appartement</option>
            <option value="Terrain">Terrain</option>
            <option value="Villa">Villa</option>
            <option value="Local commercial">Local commercial</option>
          </select>

          <button
            onClick={() => {
              setMaxPrice('')
              setType('')
            }}
            className="bg-red-400 text-white rounded-xl p-3 hover:bg-red-600 transition"
          >
            Réinitialiser
          </button>
        </div>
      </div>

      <div className="p-6 md:p-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBiens.map(bien => {

          const imagesValides =
            bien.images?.filter((img: any) => img.url && img.url.trim() !== '') || []

          const imageSrc =
            imagesValides.length > 0
              ? `http://localhost:3000/uploads/${imagesValides[0].url}`
              : '/placeholder.png'

          return (
            <div
              key={bien.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={imageSrc}
                  className="w-full h-60 sm:h-72 object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>

                <span
                  className={`absolute top-4 left-4 px-4 py-1 text-xs font-semibold text-white rounded-full shadow backdrop-blur-md ${getStatusStyle(bien.status)}`}
                >
                  {bien.status}
                </span>

                <button
  onClick={() => toggleLike(bien.id)}
  className="absolute top-4 right-4 bg-white/70 backdrop-blur-md p-2 rounded-full shadow hover:scale-110 transition"
>
  <Heart
    size={18}
    className={
      likedBiens.includes(bien.id)
        ? 'text-red-500 fill-red-500'
        : 'text-black'
    }
  />
</button>
              </div>

              <div className="p-5">
                <h2 className="text-lg font-semibold">{bien.title}</h2>
                <p className="text-gray-500 text-sm">{bien.location}</p>
                <p className="text-xl font-bold text-gray-900 mt-3">
                  {bien.price} FCFA
                </p>

                <button
                  onClick={() => router.push(`/biens/${bien.id}`)}
                  className="mt-5 w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-800 transition"
                >
                  Découvrir
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {filteredBiens.length === 0 && (
        <div className="text-center pb-20 text-gray-500">
          Aucun bien ne correspond aux critères.
        </div>
      )}
    </div>
  )
}