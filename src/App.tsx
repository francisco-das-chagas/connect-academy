import { useState, useEffect } from 'react'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import ReformaTributaria from './pages/ReformaTributaria'
import NotFound from './pages/NotFound'
import Preloader from '@/components/Preloader' // Importando o Preloader

const queryClient = new QueryClient()

const App = () => {
  // Estado para controlar o Preloader
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simula um tempo de carregamento (2 segundos) para exibir o preloader
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Lógica: Se estiver carregando, mostra o Preloader. Se não, mostra o App */}
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route
                  path="/reforma-tributaria"
                  element={<ReformaTributaria />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  )
}

export default App
