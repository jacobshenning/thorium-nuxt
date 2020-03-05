<template>
  <div class="container">
    <div>
      <h2 class="subtitle">
        What's a good ice cream?
      </h2>
      <a
        target="_blank"
        class="button--green"
        v-on:click.stop="wrong"
      >
        yellow
      </a>
      <a
        target="_blank"
        class="button--green"
        v-on:click.stop="correct"
      >
        Blue
      </a>
      <a
        target="_blank"
        class="button--green"
        v-on:click.stop="wrong"
      >
        pink
      </a>
      <a
        target="_blank"
        class="button--green"
        v-on:click.stop="wrong"
      >
        orange
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
      this.$router.push('/fifth')
    },
    wrong ({ store }) {
      this.$store.commit('addQuestion', false)
      this.$router.push('/fifth')
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
