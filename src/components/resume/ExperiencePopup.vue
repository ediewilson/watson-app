<template>
    <div class="popup-container">
        <div class="popup-left">
            <img :src="this.item.logo" />
             <p class="company">{{ this.item.company }}</p>
             <a href="#">Company site</a>
        </div>
        <div class="popup-right">
            <div class="job-block">
                <p class="title"> {{ this.item.jobTitle }} </p>
                <p class="duration">{{ this.item.duration }}</p>
                <p v-if="show" class="description">{{ this.item.jobDescription }}</p>
            </div>
            <div class="additional-block">
                <p>skills accomplishments languages</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ExperiencePopup',
  props:
  {
    item: Object,
  },
}
</script>
<style lang="scss" scoped>
.popup-container {
    z-index: 100;
    background-color: grey;
}
</style>