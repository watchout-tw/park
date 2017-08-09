<template>
<div class="everyone">
  <h1 class="small">線上草民</h1>
</div>
</template>

<script>
import axios from 'axios'

axios.defaults.baseURL = 'https://c0re.watchout.tw'

export default {
  data() {
    return {
      everyone: []
    }
  },
  mounted() {
    axios.get('/everyone').then(response => {
      this.everyone = response.data
    }).catch(error => {
      console.error(error)
    })
  }
}
</script>
