import { createApp } from 'vue'
import './style.css'
import App from '@/App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'virtual:svg-icons-register'
//import SvgIcon from '@/components/SvgIcon/index.vue'
import useGlobalComponents from '@/components'

const app = createApp(App)

app.use(ElementPlus,{
    locale:zhCn
})
app.use(useGlobalComponents);
//app.component("SvgIcon",SvgIcon);
app.mount('#app')

