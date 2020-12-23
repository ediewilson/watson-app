
<template>
  <div class="resume">
    <h1>Resume</h1>
    <Contact></Contact>
    <Experiences></Experiences>
    <div class="bottom-section">
      <Honors></Honors>
      <OtherExperience></OtherExperience>
    </div>
  </div>
</template>

<script>
import Contact from './resume/Contact'
import Experiences from './resume/Experiences'
import Honors from './resume/HonorsPrizesAwards'
import OtherExperience from './resume/OtherExperience'
import Skills from './resume/Skills'




export default {
  name: 'Resume',
  
  components: {
      'Experiences': Experiences,
      'Contact': Contact,
      'Honors': Honors,
      'OtherExperience': OtherExperience,
      'Skills': Skills,
    },
}
</script>
<style lang="scss" scoped>
h1 {
  margin-top: 12px;
}

.bottom-section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 2.5%;
  margin-right: 2.5%;
}
</style>