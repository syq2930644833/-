const state = {
    clientWidth: 1,
    headShow:false,
    footShow:true,
    headIndex:0
}

const mutations = {
    CLIENT_WIDTH_CHANGE: (state,clientWidth) => {
        state.clientWidth = clientWidth
    },
    HEAD_SHOW_CHANGE: (state,headShow) => {
        state.headShow = headShow
    },
    FOOT_SHOW_CHANGE: (state,footShow) => {
        state.footShow = footShow
    },
    HEAD_INDEX_CHANGE: (state,headIndex) => {
        state.headIndex = headIndex
    },
}

const actions = {
    clientWidthChange({commit},clientWidth){
        commit('CLIENT_WIDTH_CHANGE',clientWidth)
    },
    headShowChange({commit},headShow){
        commit('HEAD_SHOW_CHANGE',headShow)
    },
    footShowChange({commit},footShow){
        commit('FOOT_SHOW_CHANGE',footShow)
    },
    headIndexChange({commit},headIndex){
        commit('HEAD_INDEX_CHANGE',headIndex)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  