import { defineStore } from 'pinia'


const useLayoutStore = defineStore('Layout', {
    state: () => {
        return {
            fold: false,
            refresh: false
        }
    },
    getters: {

    },
    actions: {
        
    },
})

export default useLayoutStore