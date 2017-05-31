<template>
<div class="everyone">
  <h1>線上草民</h1>
  {{ everyone }}
</div>
</template>

<script>
import axios from 'axios'

var baseURL = 'https://apidev.watchout.tw'
export default {
  data() {
    return {
      everyone: []
    }
  },
  mounted() {
    axios.get(`${baseURL}/citizen/wesley_chia_wei_lin`).then(response => {
      this.everyone = response.data
    }, response => {
      this.everyone.push('error')
    })
  }
}
</script>
