/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors : {
        one : 'hsl(10, 79%, 65%)',
        two : 'hsl(186, 34%, 60%)',
        three : 'hsl(25, 47%, 15%)',
        four : 'hsl(28, 10%, 53%)',
        five : 'hsl(27, 66%, 92%)',
        six : 'hsl(33, 100%, 98%)'
      }
    },
  },
  plugins: [],
}
