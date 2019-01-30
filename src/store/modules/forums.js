import {makeAppendChildToParentMutation} from '@/store/assetHelpers'

export default {
  namespaced: true,

  state: {
    items: {}
  },

  getters: {},

  actions: {
    fetchForum: ({dispatch}, {id}) => dispatch('fetchItem', {resource: 'forums', id, emoji: 'forum'}, {root: true}),

    fetchForums: ({dispatch}, {ids}) => dispatch('fetchItems', {resource: 'forums', emoji: 'forums', ids}, {root: true})
  },

  mutations: {
    appendThreadToForum: makeAppendChildToParentMutation({parent: 'forums', child: 'threads'})
  }
}
