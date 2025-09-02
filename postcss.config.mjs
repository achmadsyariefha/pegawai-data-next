const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    'tailwindcss': {
      config: './tailwind.config.js',
      important: true,
    },
  },
};

export default config;
