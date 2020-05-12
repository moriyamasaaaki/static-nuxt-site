const INITIAL_DATA = {
  posts: [
    {
      _id: '1',
      title: 'タイトル1',
      subtitle: 'サブタイトル1',
      createdAt: new Date(),
      isRead: false
    },
    {
      _id: '2',
      title: 'タイトル2',
      subtitle: 'サブタイトル2',
      createdAt: new Date(),
      isRead: true
    }
  ]
}

function fetchPostsAPI () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(INITIAL_DATA.posts)
    }, 1000)
  })
}

export const state = () => {
  return {
    posts: []
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
    state.posts = posts
  }
}
