/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js",
    './public/pages/home/index.html',
    './public/pages/signup/index.html' ,
    './public/pages/courses/index.html' ,
    './public/pages/login/index.html',
    './public/pages/pricing/index.html',
    './public/pages/course-details/index.html',
    './public/pages/about/index.html'
  ],
  theme: {
    extend: {
     colors: {
      primary:"#FF9500",
      "gray-15":"#262626",
      secondary:"#FFD599"
     },
     fontFamily: {
       "vietnam":'"Be Vietnam Pro", sans-serif',
     },
     rotate: {
      "75":"calc(45deg + 90deg)"
     },
     backgroundImage: {
      "poster":'url("./public/asset/images/video/bg-video.png")'
     }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}


