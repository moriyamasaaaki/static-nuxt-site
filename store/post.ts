import Vue from 'vue'
import { INITIAL_DATA } from './index'

export function fetchPostsAPI () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(INITIAL_DATA.posts)
    }, 200)
  })
}

export const state = () => {
  return {
    items: []
  }
}

export const getters = {
  hasEmptyItems (state: any) {
    return state.items.length === 0
  }
}

export const actions = {
  fetchPosts ({ commit }: any) {
    return fetchPostsAPI()
      .then((posts) => {
        commit('setPosts', posts)
      })
  },
  createPost ({ commit }: any, postData: any) {
    postData._id = Math.random().toString(36).substr(2, 7)
    postData.createdAt = new Date()
    commit('addPost', postData)
  },
  updatePost ({ commit, state }: any, postData: any) {
    const index = state.items.findIndex((post: any) => {
      return post._id === postData._id
    })

    commit('replacePost', { post: postData, index })
  }
}

export const mutations = {
  setPosts (state: any, posts: any) {
    state.items = posts
  },
  addPost (state: any, post: any) {
    state.items.push(post)
  },
  replacePost (state: { items: object }, { post, index }: any) {
    Vue.set(state.items, index, post)
  }
}
