module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      'light',
      'dark',
      'cupcake',
      // {
      //   mytheme: {
      //     "primary": '#d97706',
      //     "secondary": '#1e3a8a',
      //     "accent": '#84cc16',
      //     "neutral": '#ca8a04',
      //     'base-100': '#111827',
      //     "info": '#eab308',
      //     "success": '#15803d',
      //     "warning": '#84cc16',
      //     "error": '#881337'
      //   }
      // }
    ]
  },
  plugins: [require('daisyui')]
}
