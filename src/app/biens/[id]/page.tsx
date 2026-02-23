'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Heart, MapPin, Home, Maximize } from 'lucide-react'

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function BienDetails() {
  const { id } = useParams()
  const router = useRouter()
  const [bien, setBien] = useState<any>(null)
  const [activeImage, setActiveImage] = useState<string>('')

  useEffect(() => {
    fetch(`${API_URL}/biens/${id}`)
      .then(res => res.json())
      .then(data => {
        const imagesValides =
          data.images?.filter((img: any) => img.url && img.url.trim() !== '') || []

        data.images = imagesValides
        setBien(data)

        if (imagesValides.length > 0) {
          setActiveImage(imagesValides[0].url)
        }
      })
  }, [id])

  if (!bien) return <div className="p-10 text-center">Chargement...</div>

  const hasImages = bien.images?.length > 0

  const handlePrev = () => {
    if (!hasImages) return
    const currentIndex = bien.images.findIndex((i: any) => i.url === activeImage)
    const prevIndex = (currentIndex - 1 + bien.images.length) % bien.images.length
    setActiveImage(bien.images[prevIndex].url)
  }

  const handleNext = () => {
    if (!hasImages) return
    const currentIndex = bien.images.findIndex((i: any) => i.url === activeImage)
    const nextIndex = (currentIndex + 1) % bien.images.length
    setActiveImage(bien.images[nextIndex].url)
  }

  const imageSrc = hasImages
    ? `http://localhost:3000/uploads/${activeImage}`
    : '/placeholder.png'

  return (
    <div className="bg-gray-50 min-h-screen pb-20">

      <div className="relative flex justify-center items-center bg-gray-100 py-6">
        <img
          src={imageSrc}
          className="w-full max-w-[600px] h-[300px] sm:h-[450px] object-cover rounded-2xl shadow-lg"
        />

        {hasImages && bien.images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow"
            >
              ◀
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow"
            >
              ▶
            </button>
          </>
        )}
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 -mt-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10">

          <h1 className="text-2xl md:text-4xl font-bold">{bien.title}</h1>
          <div className="flex items-center text-gray-500 mt-2">
            <MapPin size={16} className="mr-2" />
            {bien.location}
          </div>

          <div className="text-2xl md:text-3xl font-bold mt-4">
            {bien.price} FCFA
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed">{bien.description}</p>
          </div>

          {hasImages && (
            <div className="mt-10 flex gap-4 overflow-x-auto">
              {bien.images.map((img: any) => (
                <img
                  key={img.id}
                  src={`http://localhost:3000/uploads/${img.url}`}
                  onClick={() => setActiveImage(img.url)}
                  className={`w-28 h-20 object-cover rounded-xl cursor-pointer ${
                    activeImage === img.url ? 'ring-4 ring-black' : ''
                  }`}
                />
              ))}
            </div>
          )}

          <button
            onClick={() => router.push('/biens')}
            className="mt-10 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Retour aux biens
          </button>

        </div>
      </div>
    </div>
  )
}