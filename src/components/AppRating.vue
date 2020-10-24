<template>
  <div class="rating">
    <div class="rating__stars">
      <i
        v-for="(star, $starIndex) of maxStars"
        :key="$starIndex"
        class="star"
        :class="$starIndex < activeStars ? 'icon-star' : 'icon-star-empty'"
      ></i>
    </div>
    <div class="rating__summary">{{ activeStars }} of {{ maxStars }}</div>
  </div>
</template>

<script>
export default {
  props: {
    minStars: {
      type: Number
    },
    maxStars: {
      type: Number
    },
    activeStars: {
      type: Number
    }
  }
}
</script>

<style lang="css" scoped>
.rating {
  color: gray;
}

.rating__stars {
  margin-bottom: 1rem;
}

.rating__stars .star {
  cursor: pointer;
  font-size: 1.5rem;
}

.rating__stars .icon-star {
  color: gold;
}

.rating__summary {
  font-size: 1.2rem;
}
</style>