// vitest.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // Allows using global variables in your tests
    environment: 'node', // Set the test environment (e.g., 'jsdom', 'node')
    coverage: {
      reporter: ['text', 'json', 'html'], // Code coverage reporters
      reportsDirectory: './coverage', // Output directory for coverage
    },
    watch: false, // Disable watch mode for CI or manual runs
    threads: true, // Use multiple threads for faster testing
    isolate: true, // Ensure tests are isolated
  },
  resolve: {
    alias: {
      '@': '/src', // Setup alias for paths if needed
    },
  },
});

