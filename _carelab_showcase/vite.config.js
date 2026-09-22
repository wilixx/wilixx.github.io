import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({plugins:[react()],base:'/demos/carelab-green-cloud/',build:{outDir:'dist',sourcemap:false,chunkSizeWarningLimit:1100},server:{host:'127.0.0.1',port:5190,strictPort:true}});
