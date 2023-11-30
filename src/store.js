import Vue from 'vue'
import Vuex from 'vuex'
  
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        lang: 'ru'
    },
    mutations: {
    // changLang (state) {
    //         state.lang === 'ru' ? state.lang = 'en' : state.lang = 'ru'
    //     }
    },
})