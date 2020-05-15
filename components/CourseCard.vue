<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by2">
        <img src="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1694&q=80" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">タイトル</p>
          <p class="subtitle is-6"><i>サブタイトル</i></p>
        </div>
      </div>
      <div class="content">
        内容が入ります。内容が入ります
        <br />
      </div>
      <div class="price-box">
        <span class="price">1,500</span>
        <span class="disc-price">1,000</span>
      </div>
    </div>
    <footer class="card-footer">
      <nuxt-link :to="''" class="card-footer-item">もっと見る</nuxt-link>
      <a target="_" :href="'#'" class="card-footer-item">登録</a>
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
