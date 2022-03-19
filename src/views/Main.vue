<template>
  <div class="body">
    <Header />
    <Body />
  </div>
</template>

<script>
import Header from './Header.vue'
import Body from './Body.vue'

export default {
  name: 'Main',
  components: {
    Header,
    Body
  },
  data() {
      return {
          users: [],
          numberOfUsers: 0
      }
  },
  methods: {
  },
  mounted () {
  }
}
</script>