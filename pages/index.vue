<template>
  <div class="container">
    <div>
      <h1 class="title">
        Survey App
      </h1>
      <h2 class="subtitle">
        The average score is {{ average }}%
      </h2>
      <NuxtLink class="button--green" to="/start">Take Quiz</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      entries: []
    }
  },
  mounted () {
    axios
      .get('http://127.0.0.1:8000/api/survey')
      .then((response) => {
        this.entries = response.data
      })
  },
  computed: {
    average () {
      let average = 0
      for (const i in this.entries) {
        average += this.entries[i].correct_count
      }
      average /= (5 * this.entries.length)
      return average * 100
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
