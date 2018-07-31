import Vue from 'vue'
import Vuex from 'vuex'
import headercss from './modules/css/headercss'
import menucss from './modules/css/menucss'
import commoncss from './modules/css/commoncss'
import footercss from './modules/css/footercss'
import menu from './modules/data/menu'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        headercss,
        menucss,
        menu,
        commoncss,
        footercss,
    },
    getters
})