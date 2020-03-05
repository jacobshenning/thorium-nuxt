<template>
  <div class="container">
    <div>
      <h2 class="subtitle">
        What's your animal
      </h2>
      <a
        target="_blank"
        class="button--green"
        v-on:click.stop="wrong"
      >
        monkey
      </a>
      <a
        target="_blank"
        class="button--green"
        v-on:click.stop="wrong"
      >
        person
      </a>
      <a
        target="_blank"
        class="button--green"
        v-on:click.stop="correct"
      >
        Car
      </a>
      <a
        target="_blank"
        class="button--green"
        v-on:click.stop="wrong"
      >
        wheel
      </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    correct ({ store }) {
      this.$store.commit('addQuestion', true)
      this.$router.push('/fourth')
    },
    wrong ({ store }) {
      this.$store.commit('addQuestion', false)
      this.$router.push('/fourth')
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
