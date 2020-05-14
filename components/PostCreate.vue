<template>
  <modal @modalSubmitted="createPost">
    <template #actionButton>
      <a class="button is-danger is-block is-bold">
        <span class="compose">作成する</span>
      </a>
    </template>
    <form class="post-form">
      <div class="field">
        <label class="label">タイトル</label>
        <div class="control">
          <input v-model="form.title" class="input" type="text" placeholder="投稿１" />
        </div>
      </div>

      <div class="field">
        <label class="label">サブタイトル</label>
        <div class="control">
          <input v-model="form.subtitle" class="input" type="text" placeholder="サブ投稿１" />
        </div>
      </div>
      <div class="field">
        <label class="label">内容</label>
        <div class="control">
          <textarea v-model="form.content" class="textarea" placeholder="投稿１の内容" />
        </div>
      </div>
    </form>
  </modal>
</template>

<script>
import Modal from '~/components/shared/Modal'
export default {
  components: {
    Modal
  },
  data () {
    return {
      form: {
        title: '',
        subtitle: '',
        content: ''
      }
    }
  },
  methods: {
    createPost ({ closeModal, data }) {
      this.$store.dispatch('post/createPost', { ...this.form })
      closeModal()
      this.resetForm()
    },
    resetForm () {
      this.form.title = ''
      this.form.subtitle = ''
      this.form.content = ''
    }
  }
}
</script>
