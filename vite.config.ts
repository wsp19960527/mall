import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Unocss from 'unocss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss()
  ],
  css:{
    preprocessorOptions:{
      less:{
        modifyVars:{
          hack:`true; @import (reference) "${resolve(__dirname,'src/assets/style/style.less')}";`
        },
        javascriptEnable:true
      }
    }
  }
})
