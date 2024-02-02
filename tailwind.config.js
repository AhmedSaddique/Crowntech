/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Component/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl : "1536px",
    },
    
    extend: {
  
      aspectRatio: {
        '3/2': '3 / 2',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'bounce': 'bounce 3s linear infinite',
        'bounceRight': 'bounce 3s linear infinite',
        'scrollX': 'scrollX 30s linear infinite',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)', // Adjust the blur value as needed
      },
      
      keyframes:{
        slideright: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': {transform: 'translateX(100%)' },
        },
        scrollX: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(-100%)',
          },
        },
        bounceRight: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': {transform: 'translateX(20px)' },
         
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
      }
      },
      

      backgroundImage: {
        'finger': "url('/assets/images/finger2.png')",
        'faq':"url('/assets/images/Faq.png')",
        'choose1' :"url('/assets/images/choose1.png')",
        'quote' :"url('/assets/images/quote.svg')",
        'plant' :"url('/assets/images/plant.png')",
        'newsletter' :"url('/assets/images/newsletter.png')",
        'aboutfinger' :"url('/assets/images/aboutfinger.png')",
        'circle' :"url('/assets/images/circle.png')",
        'Contactbanner' :"url('/assets/images/Contactbanner.png')",
        'bg2' :"url('/assets/images/bg2.webp')",
        'teamCircle' :"url('/assets/images/teamCircle.png')",
        'arrowDown' :"url('/assets/images/arrowDown.png')",
        'wave' :"url('/assets/images/wave.svg')",
        'teamhero1' :"url('/assets/images/teamhero1.png')",
        'background' :"url('/assets/images/background.jpg')",
        'homebg' :"url('/assets/images/homebg.png')",
        'homebg2' :"url('/assets/images/homebg2.png')",
        'homehero' :"url('/assets/images/homehero.png')",
        'Hero' :"url('/assets/images/Hero.png')",
        'policyright' :"url('/assets/images/policy-right.png')",
        'policyleft' :"url('/assets/images/policy-left.png')",
        'testi' :"url('/assets/images/testi.png')",












      },

       fontSize: {
        'xl-h1': '48px',
        'xl-h2': '46px',
        'xl-h3': '32px',
        'xl-h4': '28px',
        'xl-h5': '26px',
        'xl-h6': '18px',
        'lg-h1': '36px',
        'lg-h2': '32px',
        'lg-h3': '28px',
        'lg-h4': '24px',
        'lg-h5': '20px',
        'lg-h6': '16px',
        'md-h1': '30px',
        'md-h2': '28px',
        'md-h3': '22px',
        'md-h4': '20px',
        'md-h5': '18px',
        'md-h6': '16px',
        '18': '18px',
        '16': '16px',
        '14': '14px',
        '12': '12px',




      },
      colors:{
        primary:{
          blue100:"#3335D7",
          blue200:"#2727B9",
          blue300:"#171878",
          blue400:"#121468",
          blue500:"#0A0B35",
          light:"#fcfffd",
          white:"#ffffff",
          black:"#000000",
          alertlight:"#E2DFFF",
          btn1:"#0000CC",
          btn2:"#0303e0",
          btn3:"#7500FF",

        },     
      },
    },
    
  },
  plugins: [
    require('preline/plugin'),
    
  ],
}
