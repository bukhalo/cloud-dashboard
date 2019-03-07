<script>
export default {
  layout: 'dashboard',
  middleware: 'auth',
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/billing', {
      params: {
        out: 'bjson',
        func: 'desktop'
      }
    })
    return { data: data }
  }
}
</script>


<template>
  <div />
</template>
