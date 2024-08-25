import { defineConfig } from 'vite';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      includeAssets: [
        '2023-Logo-UCL-azul.png',
        'Animation - 1707702469299.gif',
        'Curriculo-Leonardo0-Araujo-Sarmento-english.pdf',
        'Curriculo-Leonardo0-Araujo-Sarmento.pdf',
        'faculdade ucl logo.webp',
        'fapes logo.png',
        'iel-blue.png',
        'johnTLostMeme.gif',
        'leo-barzinho.jpg',
        'leonardo-dia-d.jpg',
        'my-photo.jpg',
        'qrcodegorjeta.jpeg',
        'rogerinhoDoInga_InfelizmenteEuVouTerQueFalarIssoAqui.gif',
        'thumbs-up.svg',
        'ThumbsUpSadCat.png',
        'typeORM_logo.svg',
        'xp educação logo.png',
      ],
      manifest: {
        background_color: '#f0f0f0',
        description: 'My portfolio where I share all my experiences with you.',
        dir: 'ltr',
        display: 'standalone',
        id: '/',
        name: 'LEO',
        orientation: 'portrait',
        scope: '/',
        short_name: 'LEO',
        start_url: '/',
        theme_color: '#f0f0f0',
        categories: ['portfolio', 'experiences', 'blog', 'software', 'development'],
        // screenshots: [
        //   {
        //     src: 'screenshots/DocDoc-home.png',
        //     sizes: '320x568',
        //     type: 'image/png',
        //   },
        // ],
        // icons: [
        //   {
        //     src: '/assets/icons/favicon.png',
        //     type: 'image/png',
        //     sizes: '1024x1024',
        //   },
        //   {
        //     src: '/assets/icons/favicon.svg',
        //     type: 'image/png',
        //     sizes: '192x192',
        //     purpose: 'maskable',
        //   },
        // ],
        shortcuts: [],
        lang: 'en',
      },
    }),
    TanStackRouterVite(),
    {
      name: 'markdown-loader',
      transform(code, id) {
        if (id.slice(-3) === '.md') {
          // For .md files, get the raw content
          return `export default ${JSON.stringify(code)};`;
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@services': path.resolve(__dirname, './src/services'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@': path.resolve(__dirname, './src'),
    },
  },
});
