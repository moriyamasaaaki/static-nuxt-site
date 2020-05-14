<template>
  <div>
    <div @click="isActive = true">
      <slot name="actionButton">
        <button class="button is-primary">Open</button>
      </slot>
    </div>    <div :class="{'is-active': isActive}" class="modal">
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
          <button
            @click="emitModalSubmit"
            class="button is-success">
            送信
          </button>          <button class="button" @click="isActive = false">
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
  },
  methods: {
    emitModalSubmit () {
      this.$emit('modalSubmitted', { closeModal: this.closeModal, data: 'Just some data' })
    },
    closeModal () {
      this.isActive = false
    }
  }
}
</script>
