<template>
  <div>
    <navbar />
    <div class="blogs-page">
      <div class="main-content">
        <div class="container">
          <div class="columns is-mobile">
            <div class="column is-8 is-offset-2">
              <div class="section">
                <div class="title">
                  <h1>投稿一覧</h1>
                  <hr />
                </div>
                <PostItem
                  v-for="post in posts"
                  :key="post._id"
                  :title="post.title"
                  :subtitle="post.subtitle"
                  :date="post.createdAt"
                  :isRead="post.isRead"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <form>
        <input type="text" v-model="form.title">
        <input type="text" v-model="form.subtitle">
      </form>
      {{isFormValid()}} -->
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import PostItem from '~/components/PostItem'
export default {
  components: {
    Navbar, PostItem
  },
  data () {
    return {
      title: '初めての投稿',
      form: {
        title: 'タイトル',
        subtitle: 'サブタイトル'
      }
    }
  },
  computed: {
    posts () {
      return this.$store.state.posts
    }
  },
  methods: {
    isFormValid () {
      console.log('isFormValid has been called')
      if (this.form.title) {
        return true
      }
      return false
    }
  }
}
</script>
<style scoped>
  .post-content {
    font-style: italic;
  }
  .post {
    margin-bottom: 20px;
    padding: 5px;
    border-bottom: 2px solid transparent;
  }
  .post:hover {
    border-bottom: 2px solid #e8e8e8;
  }
</style>
