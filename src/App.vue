<template>
  <div id="app">
    <TheNavBar />
    <div class="container">
      <router-view v-show="showPage" @ready="pageReady" />
      <AppSpinner v-show="!showPage" />
    </div>
  </div>
</template>

<script>
import TheNavBar from '@/components/TheNavbar'
import AppSpinner from '@/components/AppSpinner'
import NProgress from 'nprogress'

export default {
  components: {
    TheNavBar,
    AppSpinner
  },

  data () {
    return {
      showPage: false
    }
  },

  methods: {
    pageReady () {
      this.showPage = true
      NProgress.done()
    }
  },

  created () {
    NProgress.configure({
      speed: 200,
      showSpinner: false
    })

    NProgress.start()

    this.$router.beforeEach((to, from, next) => {
      this.showPage = false

      NProgress.start()

      next()
    })
  }
}
</script>

<style>
@import "assets/css/style.css";

@import "~nprogress/nprogress.css";

#nprogress .bar {
  background-color: #57AD8D;
}

</style>
