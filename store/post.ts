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
  }
}

export const mutations = {
  setPosts (state: any, posts: any) {
    state.items = posts
  }
}
