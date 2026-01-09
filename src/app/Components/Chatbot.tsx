'use client'

import { useEffect, useState } from 'react'

type Message = {
  role: 'user' | 'bot'
  content: string
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState<'info' | 'chat'>('info')

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: '👋 Bonjour ! Dites-nous si vous cherchez un bien ou si vous souhaitez louer / vendre votre propriété.' }
  ])

  // Charger l’historique
  useEffect(() => {
    const saved = localStorage.getItem('chatbot_messages')
    if (saved) setMessages(JSON.parse(saved))
  }, [])

  // Sauvegarder l’historique
  useEffect(() => {
    localStorage.setItem('chatbot_messages', JSON.stringify(messages))
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage = input
    setInput('')
    setLoading(true)

    setMessages((prev) => [
      ...prev,
      { role: 'user', content: userMessage }
    ])

    try {
      const res = await fetch('https://formspree.io/f/mgovdjjy', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email,
    name,
    phone,
    message: userMessage,
    page: window.location.href,
    source: 'Chatbot du site',
    _gotcha: ''
  })
})

if (!res.ok) throw new Error('Erreur Formspree')

      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          content: '📩 Message envoyé avec succès ! Notre équipe vous répondra rapidement.'
        }
      ])
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          content: '❌ Une erreur est survenue. Veuillez réessayer.'
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="w-80 h-[460px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 font-semibold">
            🏡 Service immobilier
            <p className='text-xs opacity-80'>Location • Vente • Mise en gestion</p>
            <p className="text-xs opacity-80">Réponse sous 24h</p>
          </div>

          {/* Infos client */}
          {step === 'info' && (
            <div className="p-4 space-y-3">
                <input
                type="email"
                className="w-full border rounded px-3 py-2 text-sm"
                placeholder="Adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="w-full border rounded px-3 py-2 text-sm"
                placeholder="Votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="w-full border rounded px-3 py-2 text-sm"
                placeholder="Téléphone / WhatsApp"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <button
                onClick={() => name && setStep('chat')}
                className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
                disabled={!name}
              >
                Commencer la discussion
              </button>
            </div>
          )}

          {/* Chat */}
          {step === 'chat' && (
            <>
              <div className="flex-1 p-3 space-y-2 overflow-y-auto">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`p-2 text-sm rounded-lg max-w-[75%] ${
                      msg.role === 'user'
                        ? 'bg-blue-500 text-white ml-auto'
                        : 'bg-gray-200'
                    }`}
                  >
                    {msg.content}
                  </div>
                ))}
              </div>

              <div className="p-3 border-t flex gap-2">
                <input
                  className="flex-1 border rounded px-2 text-sm"
                  placeholder="Votre message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={loading}
                />
                <button
                  onClick={sendMessage}
                  disabled={loading}
                  className="bg-blue-600 text-white px-3 rounded"
                >
                  {loading ? '...' : 'Envoyer'}
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Bouton flottant */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:scale-105 transition"
      >
        💬
      </button>
    </div>
  )
}
