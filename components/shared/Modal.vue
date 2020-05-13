<template>
  <div>
    <a
      class="button is-danger is-block is-bold"
      @click="isActive = true"
    >
      <span class="compose">Create</span>
    </a>
    <div :class="{'is-active': isActive}" class="modal">
      <div class="modal-background" />
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
            投稿の作成
          </p>
          <button class="delete" aria-label="close" @click="isActive = false" />
        </header>
        <section class="modal-card-body">
          <slot />
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">
            送信
          </button>
          <button class="button" @click="isActive = false">
            キャンセル
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isActive: false
    }
  }
}
</script>
