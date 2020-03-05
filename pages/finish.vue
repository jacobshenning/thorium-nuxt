<template>
  <div class="container">
    <div>
      <h2 class="subtitle">
        Complete
      </h2>
      <p>You got {{correct}}/5</p>
      <NuxtLink
        to="/"
        class="button--green"
      >
        Back to Start
      </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  mounted () {
    axios
      .post('https://thorium.jacobhenning.com/api/survey',
        {
          identifier: this.$store.state.name,
          question_count: 5,
          correct_count: this.correct
        })
      .then((response) => {
        console.log(response)
      })
  },
  computed: {
    correct ({ store }) {
      let temp = 0
      for (const i in this.$store.state.questions) {
        if (this.$store.state.questions[i]) {
          temp++
        }
      }
      return temp
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
