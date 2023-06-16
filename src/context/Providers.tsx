'use client'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ 
  children 
}) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        {children}
      </SessionProvider>
    </QueryClientProvider>
  )
}

export default Providers;