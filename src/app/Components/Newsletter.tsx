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
    <div className="bg-gray-100 p-6 sm:p-8 rounded-2xl max-w-xl mx-auto text-center">
      <h3 className="text-xl font-semibold mb-2 text-blue-900">
        📩 Abonnez-vous à notre newsletter
      </h3>

      <p className="text-sm sm:text-base text-gray-600 mb-6">
        Recevez nos nouveaux biens, opportunités et offres exclusives directement par email.
      </p>

      {success ? (
        <p className="text-green-600 font-medium">
          ✅ Merci pour votre inscription !
        </p>
      ) : (
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Votre adresse email"
            className="w-full border rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-blue-300 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            onClick={subscribe}
            disabled={loading}
            className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? 'Inscription...' : 'S’abonner'}
          </button>
        </div>
      )}
    </div>
  )
}
