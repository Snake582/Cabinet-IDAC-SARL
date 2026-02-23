'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'

export default function AdminGuard({ children }) {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      router.push('/admin/login')
    }
  }, [user])

  if (!user) return null

  return <>{children}</>
}
