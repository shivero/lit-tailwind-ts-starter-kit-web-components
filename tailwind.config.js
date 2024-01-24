/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "src/**/*.{js,ts,css,scss}"];

export const theme = {

  extend: {
    fontFamily: {
      sans: ['Segoe UI', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    }
  },
};
export const plugins = [];
