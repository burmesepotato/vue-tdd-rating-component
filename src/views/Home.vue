<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2>
      <a
        href="https://youtu.be/DD1fEhcEzY8"
        rel="noopener noreferrer"
        target="_blank"
        >TDD with Vue by Sarah Dayan @VueConf2020</a
      >
    </h2>
    <AppRating :maxStars="5" :activeStars="3" />
  </div>
</template>

<script>
import AppRating from '@/components/AppRating.vue'

export default {
  name: 'Home',
  components: {
    AppRating
  }
}
</script>
