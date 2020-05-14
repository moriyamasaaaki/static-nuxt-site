<template>
  <form class="post-form">
    <div class="field">
      <label class="label">タイトル</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="タイトル" />
      </div>
    </div>
    <div class="field">
      <label class="label">サブタイトル</label>
      <div class="control">
        <input
          class="input"
          type="email"
          placeholder="サブタイトル" />
      </div>
    </div>
    <div class="field">
      <label class="label">内容</label>
      <div class="control">
        <textarea
          class="textarea"
          placeholder="内容" />
      </div>
    </div>
    <button class="button is-primary">更新</button>
  </form>
</template>

<script>
export default {
}
</script>
