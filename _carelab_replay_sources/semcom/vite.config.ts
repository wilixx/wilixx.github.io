import {defineConfig} from 'vite';
import tailwind from '@tailwindcss/postcss';
import path from 'node:path';
export default defineConfig({base:'./',resolve:{alias:{'@':path.resolve(import.meta.dirname)}},oxc:{jsx:{runtime:'automatic'}},css:{postcss:{plugins:[tailwind()]}},build:{sourcemap:false,outDir:'dist',emptyOutDir:true}});
