/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "border-color": "#DBDBDB",
        "input-bg": "#D8D9DB",
        "active-side": '#5030E514',
        "green-btn": '#7AC555',
        "orange-btn": '#FFA500',
        "purple-btn": '#E4CCFD',
        "blue-btn": '#76A5EA',
        "yellow-bg": '#FBCB18',
        "element-bg": '#F5F5F5',
        "element2-bg": '#5030E533',
        "element-text": '#5030E5',
        "todo-blue": '#5030E5',
        "low-tag": "#D58D49",
        "high-tag": "#D8727D",
        "completed-tag": "#8BC48A",
      }
    },
  },
  plugins: [],
}

