<template>
  <div class="flex-grid justify-center">
    <div class="col-2">
      <form @submit.prevent="register" action class="card card-form">
        <h1 class="text-center">Register</h1>

        <div class="form-group">
          <label v-model="form.name" for="name">Full Name</label>
          <input id="name" type="text" class="form-input">
        </div>

        <div class="form-group">
          <label v-model="form.username" for="username">Username</label>
          <input id="username" type="text" class="form-input">
        </div>

        <div class="form-group">
          <label v-model="form.email" for="email">Email</label>
          <input id="email" type="email" class="form-input">
        </div>

        <div class="form-group">
          <label v-model="form.password" for="password">Password</label>
          <input id="password" type="password" class="form-input">
        </div>

        <div class="form-group">
          <label v-model="form.avatar" for="avatar">Avatar</label>
          <input id="avatar" type="text" class="form-input">
        </div>

        <div class="form-actions">
          <button type="submit" class="btn-blue btn-block">Register</button>
        </div>
      </form>
      <div class="text-center push-top">
        <button class="btn-red btn-xsmall">
          <i class="fa fa-google fa-btn"></i>Sign up with Google
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: null,
        username: null,
        email: null,
        password: null,
        avatar: null
      }
    }
  },

  methods: {
    register () {
      console.log(this.form)
    }
  },

  created () {
    this.$emit('ready')
  }
}
</script>
