import { join } from 'path';
import { fileURLToPath } from 'url';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    join(fileURLToPath(import.meta.url), '../app/**/*.{ts,tsx}'),
    join(fileURLToPath(import.meta.url), '../components/**/*.{ts,tsx}'),
  ],
  theme: {
    extend: {
      colors: {
        'brief-blue': '#1E40AF',
        'brief-sky': '#60A5FA',
        'brief-yellow': '#FACC15',
        'brief-soft': '#F1F5F9',
        'brief-dark': '#0F172A',
        'brief-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
};

export default config;
