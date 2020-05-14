<template>
  <div>
    <navbar />
    <div class="manage-page">
      <div class="columns mail-app">
        <aside class="column is-2 aside hero">
          <div>
            <div class="compose has-text-centered">
              <post-create />
            </div>
            <div class="main" />
          </div>
        </aside>
        <div id="message-feed" class="column is-4 messages hero is-fullheight">
          <div id="inbox-messages" class="inbox-messages">
            <div
              v-for="post in posts"
              :key="post._id"
              :class="{'is-active': activePost && post._id === activePost._id}"
              @click="activatePost(post)"
              class="card">
              <div class="card-content">
                <div class="msg-header">
                  <span class="msg-from">
                    <small>フォーム</small>
                  </span>
                  <span class="msg-timestamp" />
                  <span class="msg-attachment">
                    <i class="fa fa-paperclip" />
                  </span>
                </div>
                <div class="msg-subject">
                  <span class="msg-subject">
                    <strong id="fake-subject-1">{{ post.title }}</strong>
                  </span>
                </div>
                <div class="msg-snippet">
                  <p id="fake-snippet-1">
                    {{ post.subtitle }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="message-pane" class="column is-6 message hero is-fullheight">
          <div class="box message-preview">
            <div class="top">
              <div class="avatar">
                <img src="https://placehold.it/128x128" />
              </div>
              <div class="address">
                <div class="name">
                  守屋雅章
                </div>
                <div class="email">
                  xxxx@gmail.com
                </div>
              </div>
              <hr />
              <div class="content" />
            </div>
            <post-manage :postData="activePost" />
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="container">
          <div class="content has-text-centered">
            <p>
              <strong>MasaakiMoriya</strong>
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Navbar from '~/components/Navbar'
import PostCreate from '~/components/PostCreate'
import PostManage from '~/components/PostManage'
export default {
  components: {
    Navbar,
    PostCreate,
    PostManage
  },
  data () {
    return {
      activePost: {}
    }
  },
  computed: {
    ...mapState({
      posts: state => state.post.items
    })
  },
  fetch ({ store }) {
    if (store.getters['post/hasEmptyItems']) {
      return store.dispatch('post/fetchPosts')
    }
  },
  created () {
    if (this.posts && this.posts.length > 0) {
      this.activePost = this.posts[0]
    }
  },
  methods: {
    activatePost (post) {
      this.activePost = post
    }
  }
}
</script>
<style scoped lang="scss">
.manage-page {
  padding: 30px;
}
.card {
  margin-bottom: 10px;
  &.is-active {
      background-color: #eeeeee;
    }
  &:hover {
    cursor: pointer;
    background-color: #eeeeee;
  }
}

</style>
