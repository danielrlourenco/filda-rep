<template>
  <section class="main">
      <div class="ink-grid">
          <content-menu/>
          <h1>
            Info
          </h1>
      
          <nuxt-link to="/">Home</nuxt-link>

      </div>
  </section>
</template>





      <bottom-footer/>
          


<script>
    
import ContentMenu from '~/components/ContentMenu.vue'

export default {
  components: {
    ContentMenu
  }
}
    
</script>

<style>

</style>