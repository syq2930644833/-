const state = {
    clientWidth: 1,
    headShow:false
}

const mutations = {
    CLIENT_WIDTH_CHANGE: (state,clientWidth) => {
        state.clientWidth = clientWidth
    },
    HEAD_SHOW_CHANGE: (state,headShow) => {
        state.headShow = headShow
    }
}

const actions = {
    clientWidthChange({commit},clientWidth){
        commit('CLIENT_WIDTH_CHANGE',clientWidth)
    },
    headShowChange({commit},headShow){
        commit('HEAD_SHOW_CHANGE',headShow)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  