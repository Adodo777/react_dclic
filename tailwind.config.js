const { components } = require('daisyui/imports');

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {},
    },
    daisyui: {
      styled: true,
      themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk"],
      base: true,
      utils: true,
      components: {
        'btn': true,
        'input': true
      },
      logs: false,
      prefix: "",
    },
    plugins: [require('daisyui')],
  }
  
