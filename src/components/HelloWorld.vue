<template>
  <div class="col-full">
    <h1>Welcome to the forum</h1>
    <ThreadList :threads="threads"/>
  </div>
</template>

<script>
import sourceData from '@/data.json'
import ThreadList from './ThreadList'

console.log(sourceData)

export default {
  components: {
    ThreadList
  },

  name: 'HelloWorld',
  data () {
    return {
      threads: Object.values(sourceData.threads),
      posts: Object.values(sourceData.posts),
      users: Object.values(sourceData.users)
    }
  }
}
</script>
