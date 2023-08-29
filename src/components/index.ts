import SvgIcon from './SvgIcon/index.vue'
import Pagintion from './Pagintion/index.vue'

const allGlobalComponents = {SvgIcon,Pagintion}

export default {

    install(app){
        Object.keys(allGlobalComponents).forEach(key=>{
            app.component(key,allGlobalComponents[key]);
        })

    }
}