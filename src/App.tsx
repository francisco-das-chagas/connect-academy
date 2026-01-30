import { useState, useEffect, lazy, Suspense } from 'react'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Preloader from '@/components/Preloader'

// --- O SEGREDO DA VELOCIDADE ---
// O 'lazy' diz ao React: "Só baixe esse arquivo se o usuário for para essa página"
const Index = lazy(() => import('./pages/Index'))
const ReformaTributaria = lazy(() => import('./pages/ReformaTributaria'))
const NotFound = lazy(() => import('./pages/NotFound'))

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

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {showIntro ? (
          <Preloader onComplete={() => setShowIntro(false)} />
        ) : (
          <>
            <Toaster />
            <Sonner />
            <BrowserRouter>
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
            </BrowserRouter>
          </>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  )
}

export default App
