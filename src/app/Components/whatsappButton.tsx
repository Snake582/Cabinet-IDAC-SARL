'use client'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const PHONE = '221706063217' // numéro agence sans +

  const message = `
Bonjour,
Je souhaite avoir des informations concernant un bien immobilier.
Merci.
  `.trim()

  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-600 text-white px-2 py-2 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition"
    >
     <MessageCircle size={24} />
      <span className="sr-only">Contactez-nous sur WhatsApp</span>
    </a>
  )
}
