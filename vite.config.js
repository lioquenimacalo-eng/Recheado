import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'logo2.webp'
      ],
      manifest: {
        name: 'Recheados',
        short_name: 'Recheados',
        description: 'Recheados - Fast Food',
        theme_color: '#e11d48',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        scope: '/',
        lang: 'pt-BR',
        categories: ['food', 'lifestyle'],
        icons: [
          {
            src: 'logo2.webp',
            sizes: '192x192',
            type: 'image/webp',
            purpose: 'any'
          },
          {
            src: 'logo2.webp',
            sizes: '512x512',
            type: 'image/webp',
            purpose: 'any'
          },
          {
            src: 'logo2.webp',
            sizes: '512x512',
            type: 'image/webp',
            purpose: 'maskable'
          }
        ]
      },
      workbox: {
        // Precache apenas arquivos realmente necessários
        globPatterns: [
          '**/*.{js,css,html,ico,png,jpg,jpeg,svg,webp,woff2,woff,ttf}'
        ],
        // Evita cachear arquivos muito grandes (proteção contra abuso de storage)
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5MB

        // Limpeza automática de caches antigos (muito importante)
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true,

        // Fallback para SPA (essencial para funcionar offline)
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/api/, /^\/admin/], // nunca faz fallback de rotas de API

        runtimeCaching: [
          // Imagens → Cache First (bom para performance offline)
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'recheados-images-v1',
              expiration: {
                maxEntries: 80,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 dias
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          // Fontes → Cache First (quase nunca mudam)
          {
            urlPattern: /\.(?:woff|woff2|ttf|otf)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'recheados-fonts-v1',
              expiration: {
                maxEntries: 15,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 ano
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          // API → Network First com timeout curto (mais seguro)
          {
            urlPattern: ({ url }) => url.pathname.startsWith('/api'),
            handler: 'NetworkFirst',
            options: {
              cacheName: 'recheados-api-v1',
              networkTimeoutSeconds: 4,
              expiration: {
                maxEntries: 40,
                maxAgeSeconds: 60 * 3 // apenas 3 minutos
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          // Páginas / navegação → Network First
          {
            urlPattern: ({ request }) => request.mode === 'navigate',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'recheados-pages-v1',
              networkTimeoutSeconds: 3,
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 // 1 dia
              }
            }
          }
        ]
      },
      // Em produção normalmente desativamos o service worker no modo dev
      devOptions: {
        enabled: false , // mais seguro (ative só se precisar testar PWA no dev)
        type: 'module'
      }
    })
  ]
})