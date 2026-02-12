<<<<<<< HEAD
import { useState, useEffect } from 'react'
=======
import { useState, useEffect, lazy, Suspense } from 'react'
>>>>>>> 26d4ed83c33e7cf8dafcce367b8ca697f1a3b2fb
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
<<<<<<< HEAD
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
=======
import Preloader from '@/components/Preloader'

// --- O SEGREDO DA VELOCIDADE ---
// O 'lazy' diz ao React: "Só baixe esse arquivo se o usuário for para essa página"
const Index = lazy(() => import('./pages/Home'))
const ReformaTributaria = lazy(() => import('./pages/ReformaTributaria'))
const NotFound = lazy(() => import('./pages/Notfound'))
const queryClient = new QueryClient()

const App = () => {
  const [showIntro, setShowIntro] = useState(() => window.innerWidth >= 768)

  // Isso impede que o app tente renderizar antes do DOM estar pronto
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    if (showIntro) {
      const timer = setTimeout(() => setShowIntro(false), 2200) // Aumentei um pouco para garantir
      return () => clearTimeout(timer)
    }
  }, [showIntro])

  if (!isMounted) return null
>>>>>>> 26d4ed83c33e7cf8dafcce367b8ca697f1a3b2fb

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
<<<<<<< HEAD
        {/* Lógica: Se estiver carregando, mostra o Preloader. Se não, mostra o App */}
        {isLoading ? (
          <Preloader />
=======
        {showIntro ? (
          <Preloader onComplete={() => setShowIntro(false)} />
>>>>>>> 26d4ed83c33e7cf8dafcce367b8ca697f1a3b2fb
        ) : (
          <>
            <Toaster />
            <Sonner />
            <BrowserRouter>
<<<<<<< HEAD
              <Routes>
                <Route path="/" element={<Index />} />
                <Route
                  path="/reforma-tributaria"
                  element={<ReformaTributaria />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
=======
              {/* O Suspense mostra um 'carregando' leve enquanto baixa o código da página */}
              <Suspense
                fallback={<div className="h-screen w-full bg-background" />}
              >
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route
                    path="/reforma-tributaria"
                    element={<ReformaTributaria />}
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
>>>>>>> 26d4ed83c33e7cf8dafcce367b8ca697f1a3b2fb
            </BrowserRouter>
          </>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  )
}

export default App
