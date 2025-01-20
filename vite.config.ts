import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'lvlup-react-hooks',
    },
    sourcemap: true,
    minify: true,
    target: 'es6',
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  plugins: [
    react(),
    dts({
      include: ['src/**/*'],
      exclude: ['vite.config.ts', 'vitest.config.ts', '**/*.test.ts'],
    }),
  ],
})
