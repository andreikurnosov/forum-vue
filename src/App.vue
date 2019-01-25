<template>
  <div id="app">
    <TheNavBar />
    <div class="container">
      <router-view v-show="showPage" @ready="showPage = true" />
      <AppSpinner v-show="!showPage" />
    </div>
  </div>
</template>

<script>
import TheNavBar from '@/components/TheNavbar'
import AppSpinner from '@/components/AppSpinner'

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
  created () {
    this.$router.beforeEach((to, from, next) => {
      this.showPage = false
      next()
    })
  }
}
</script>

<style>
@import "assets/css/style.css";

</style>
