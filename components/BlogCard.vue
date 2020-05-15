<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">タイトル</p>
          <p class="subtitle is-6"><i>サブタイトル</i></p>
        </div>
      </div>
      <div class="content">
        内容が入ります。内容が入ります。内容が入ります。
        <br />
      </div>
    </div>
    <footer class="card-footer">
      <nuxt-link :to="'#'" class="card-footer-item">もっと見る</nuxt-link>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
  .card-image:hover {
    cursor: pointer;
    opacity: 0.9;
  }
  .price-box {
    text-align: right;
    .price {
      color: gray;
      font-size: 16px;
      text-decoration: line-through;
    }
    .disc-price {
      font-size: 21px;
      font-weight: bold;
    }
  }
</style>
