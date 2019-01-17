<template>
  <span
    :title="timestamp | humanFriendlyDate"
  >

    {{timestamp | diffForHumans }}

  </span>
</template>


<script>
import moment from 'moment'
export default {
  props: {
    timestamp: {
      required: true,
      type: Number
    }
  },
  filters: {
    // or use it like computed with post.publishedAt argument
    // TODO: replace moment something lightweight
    humanFriendlyDate (date) {
      return moment.unix(date).format('MMMM Do YYYY, h:mm:ss a')
    },
    diffForHumans (date) {
      return moment.unix(date).fromNow()
    }
  }
}
</script>
