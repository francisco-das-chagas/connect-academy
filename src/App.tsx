import { useState, useEffect } from 'react'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import ReformaTributaria from './pages/ReformaTributaria'
import NotFound from './pages/NotFound'
import Preloader from '@/components/Preloader'

const queryClient = new QueryClient()

const App = () => {
  // ALTERAÇÃO AQUI:
  // Inicializa o estado verificando a largura da tela.
  // Se for < 768px (Mobile), isLoading começa como FALSE.
  // Se for >= 768px (Desktop), isLoading começa como TRUE.
  const [isLoading, setIsLoading] = useState(() => window.innerWidth >= 768)

  useEffect(() => {
    // Se não estiver carregando (ou seja, é mobile), não cria o timer.
    if (!isLoading) return

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [isLoading])

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
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
