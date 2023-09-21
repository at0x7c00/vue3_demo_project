import { defineStore } from 'pinia'


const useLayoutStore = defineStore('User', {
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