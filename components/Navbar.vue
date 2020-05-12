<template>
  <nav class="navbar has-shadow">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="../">
        <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" />
        </a>
        <div
        class="navbar-burger burger"
        @click="toggleIsActive"
             aria-label="menu"
             aria-expanded="false"
             data-target="navMenu">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div id="navMenu" class="navbar-menu" @click="toggleIsActive" :class="{'is-active': isActive}">
        <div class="navbar-end">
          <div class="navbar-item has-dropdown" :class="{'is-active': isActive}">
            <a class="navbar-link">
            Menu
            </a>
            <div class="navbar-dropdown">
              <nuxt-link to="/" class="navbar-item">
              ホーム
              </nuxt-link>
              <nuxt-link to="/manage" class="navbar-item">
              管理
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    toggleIsActive () {
      this.isActive = !this.isActive
    }
  }
}
</script>
