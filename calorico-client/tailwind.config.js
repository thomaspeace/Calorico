/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#1D4ED8',
          secondary: '#F59E0B',
          accent: '#22C55E',
          background: '#F3F4F6',
          surface: '#FFFFFF',
          textPrimary: '#111827',
          textSecondary: '#6B7280',
          border: '#D1D5DB',
          error: '#EF4444',
          success: '#10B981',
        },
        dark: {
          primary: '#3B82F6',
          secondary: '#FBBF24',
          accent: '#84CC16',
          background: '#111827',
          surface: '#1F2937',
          textPrimary: '#F9FAFB',
          textSecondary: '#9CA3AF',
          border: '#374151',
          error: '#DC2626',
          success: '#16A34A',
        }
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
}

