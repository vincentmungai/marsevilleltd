// @ts-check
import { defineConfig } from 'astro/config';
import sanity from 'astro-sanity';
import compress from 'astro-compress';
import sitemap from '@astrojs/sitemap';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
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
        algorithm: 'gzip',      // Options include 'gzip' and 'brotliCompress'
        threshold: 10240,       // Only compress files larger than 10KB
        deleteOriginFile: false // Keep original uncompressed files
      }),
    ],
  },
});
