<template>
  <div class="container">
    <div>
      <h2 class="subtitle">
        Enter your identifier
      </h2>
      <input v-model="name"></input>
      <a
        target="_blank"
        class="button--green"
        v-on:click.stop="setName"
      >
        Next
      </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  },
  methods: {
    setName ({ store }) {
      this.$store.commit('setName', this.name)
      this.$router.push('/first')
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
