import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  test: {
    globals: true,
    include: ["test/integration/**/*.test.ts"],
    setupFiles: ["./test/integration/setup.integration.ts"],
    environment: 'node',
    maxWorkers: "70%",
    sequence: {
      concurrent: false,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
    },
  },
})