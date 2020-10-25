<template>
<div class="card">
    <div v-if="this.show" class="show-card">
        <h1> {{ this.item.jobTitle }} </h1>
        <h2>{{ this.item.company }}</h2>
        <p class="duration">{{ this.item.duration }}</p>
        <p class="description">{{ this.item.jobDescription }}</p>
    </div>
    <div v-else class="hide-card">
        <h1>{{ this.item.jobTitle }}</h1>
        <h2>{{ this.item.company }}</h2>
        <p class="duration">{{ this.item.duration }}</p>
    </div>
</div>
</template>

<script>
export default {
  name: 'ExperienceCard',
  props:
  {
    item: Object,
    show: Boolean,
  },
  data() {
  },
  methods: {
      flipCard() {
          this.show = !this.show
      }
  }
}
</script>
<style>
.card{
    max-height: 100%;
    max-width: 100%;
    margin: 10px;
    padding: 10px;
}
</style>