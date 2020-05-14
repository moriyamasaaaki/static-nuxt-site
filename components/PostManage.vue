<template>
  <form class="post-form">
    <div class="field">
      <label class="label">タイトル</label>
      <div class="control">
        <input
          v-model="post.title"
          class="input"
          type="text"
          placeholder="タイトル" />
      </div>
    </div>
    <div class="field">
      <label class="label">サブタイトル</label>
      <div class="control">
        <input
          v-model="post.subtitle"
          class="input"
          type="email"
          placeholder="サブタイトル" />
      </div>
    </div>
    <div class="field">
      <label class="label">内容</label>
      <div class="control">
        <textarea
          v-model="post.content"
          class="textarea"
          placeholder="内容" />
      </div>
    </div>
    <button class="button is-primary">更新</button>
  </form>
</template>

<script>
export default {
  props: ['postData'],
  data () {
    return {
      post: {
        ...this.postData
      }
    }
  },
  watch: {
    postData (data) {
      this.post = { ...data }
    }
  }
}
</script>
