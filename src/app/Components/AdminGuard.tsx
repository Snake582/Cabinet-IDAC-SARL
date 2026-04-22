'use client'

import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../context/AuthContext'

type AdminGuardProps = {
  children: ReactNode
}

export default function AdminGuard({ children }: AdminGuardProps) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && (!user || user.role !== 'admin')) {
      router.push('/admin/login')
    }
  }, [user, loading, router])

  if (loading || !user || user.role !== 'admin') {
    return <p>Chargement...</p> // ou un spinner
  }

  return <>{children}</>
}