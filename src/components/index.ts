import SvgIcon from './SvgIcon/index.vue'
import Pagintion from './Pagintion/index.vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const allGlobalComponents = {SvgIcon,Pagintion}

export default {

    install(app){
        Object.keys(allGlobalComponents).forEach(key=>{
            app.component(key,allGlobalComponents[key]);
        })

        Object.keys(ElementPlusIconsVue).forEach(key=>{
            app.component(key,ElementPlusIconsVue[key]);
        })

         

    }
}