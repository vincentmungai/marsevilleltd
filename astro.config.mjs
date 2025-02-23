// @ts-check
import { defineConfig } from 'astro/config';
import sanity from 'astro-sanity';
import compress from 'astro-compress';
import sitemap from '@astrojs/sitemap';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  site: 'https://www.marsevilleltd.co.ke', // Updated base URL
  integrations: [
    sanity({ 
      projectId: '9bcnrig2',
      dataset: 'production',
      apiVersion: '2021-03-25',
      useCdn: true,
    }),
    compress(),
    sitemap()
  ],
  vite: {
    plugins: [
      viteCompression({
        algorithm: 'gzip',      
        threshold: 10240,       
        deleteOriginFile: false 
      }),
    ],
  },
});
