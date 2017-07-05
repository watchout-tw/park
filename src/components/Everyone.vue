<template>
<div class="everyone">
  <h1 class="small">線上草民</h1>
  {{ everyone }}
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
    axios.get('/citizen/wesley_chia_wei_lin').then(response => {
      this.everyone = response.data
    }, response => {
      this.everyone.push('error') // this is temporary
    })
  }
}
</script>
