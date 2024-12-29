/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'light-pastel-pink': '#FDE7E9',
      'light-pink': '#FAD2D3',
      'soft-pink': '#FAC0C2',
      'muted-rose': '#F49799',
      'deep-rose': '#E85E68',
      'neutral-beige': '#F9F5F4',
      'dark-gray': '#4F4F4F'
    },
    extend: {
      boxShadow: {
        'soft-pink': `
          0px 20px 50px -10px rgba(244, 151, 153, 0.3), 
          0px 15px 30px -15px rgba(232, 94, 104, 0.35), 
          0px -1px 3px 0px inset rgba(250, 192, 194, 0.2)
        `,
      },
    },
  },
  plugins: [],
}

/*
White: #FFFFFF (Text for buttons)
Light Pink: #FAD2D3 (Buttons hover, Dividers/Borders)
Soft Pink: #FAC0C2 (Active links) (buttons)
Muted Rose: #F49799 (Links)
Deep Rose: #E85E68 (Headings, hover links, buttons active, Inputs/Buttons on focus)
Neutral Beige: #F9F5F4 (background )
Dark Gray: #4F4F4F (Primary Text ) */