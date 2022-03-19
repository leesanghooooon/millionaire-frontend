<template>
  <div class="hello">
    <Header />
    <Body />
  </div>
</template>

<script>
import Header from './Header.vue'
import Body from './Body.vue'

export default {
  name: 'Dashboard',
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