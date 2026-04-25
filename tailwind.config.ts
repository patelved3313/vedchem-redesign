import type { Config } from 'tailwindcss';
const config: Config = {content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}','./lib/**/*.{ts,tsx}'],theme:{extend:{colors:{vedRed:'#e11812',vedOrange:'#ff6a00',vedInk:'#080808',vedSoft:'#fff7f1'},boxShadow:{soft:'0 24px 80px rgba(120,35,0,.10)',glow:'0 18px 60px rgba(255,106,0,.28)'},borderRadius:{'4xl':'2rem','5xl':'2.6rem','6xl':'3.2rem'}}},plugins:[]};
export default config;
