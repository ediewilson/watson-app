<template>
<div :class="['card', {'show-card': show}]" @click="togglePopup">
    <div :class="{'show-card': show}">
        <img :src="this.item.logo" />
        <p class="title"> {{ this.item.jobTitle }} </p>
        <p class="company">{{ this.item.company }}</p>
        <p class="duration">{{ this.item.duration }}</p>
        <p v-if="show" class="description">{{ this.item.jobDescription }}</p>
    </div>
    <ExperiencePopup v-if="show" :item="item"></ExperiencePopup>
</div>
</template>

<script>
import ExperiencePopup from './ExperiencePopup.vue'

export default {
  name: 'ExperienceCard',
  props:
  {
    item: Object,
  },
  data() {
      return {
          show: false,
      }
  },
  components: {
    'ExperiencePopup': ExperiencePopup,
  },
  methods: {
      togglePopup() {
          this.show = !this.show
      }
  }
}
</script>
<style lang="scss" scoped>
.card {
    display: flex;
    width: 300px;
    justify-content: center;
    align-items: center;
    margin: 10px;
    padding: 10px;

    .title {
        font-size: 2rem;
        line-height: 2.2rem;
        font-weight: 600;
        margin-bottom: 0px;
    }

    .company {
        font-size: 1.7;
        line-height: 1.85rem;
        font-weight: 500;
        margin-bottom: 8px;
    }

    img {
        height: 150px;
        width: 150px;
        padding: 8px;
    }
}

.show-card { 
    background-color: lightsteelblue;
    justify-content: start;
    align-items: flex-start;
}
</style>