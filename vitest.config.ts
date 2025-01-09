import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      setupFiles: './test/setup',
      coverage: {
        thresholds: {
          statements: 30,
          branches: 30,
          functions: 30,
          lines: 30,
        },
      },
    },
  }),
)
