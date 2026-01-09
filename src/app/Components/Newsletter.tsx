'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const subscribe = async () => {
    if (!email) return

    setLoading(true)

    try {
      const res = await fetch('https://formspree.io/f/mgovdjjy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'Newsletter site immobilier',
          _gotcha: ''
        })
      })

      if (!res.ok) throw new Error()

      setSuccess(true)
      setEmail('')
    } catch {
      alert('Erreur lors de l’inscription')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-gray-100 p-6 rounded-xl max-w-md mx-auto text-center">
      <h3 className="text-lg font-semibold mb-2">
        📩 Abonnez-vous à notre newsletter
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Recevez nos nouveaux biens et offres exclusives
      </p>

      {success ? (
        <p className="text-green-600 font-medium">
          ✅ Merci pour votre inscription !
        </p>
      ) : (
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Votre adresse email"
            className="flex-1 border rounded px-3 py-2 text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={subscribe}
            disabled={loading}
            className="bg-blue-600 text-white px-4 rounded"
          >
            {loading ? '...' : 'S’abonner'}
          </button>
        </div>
      )}
    </div>
  )
}
