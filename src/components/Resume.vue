
<template>
  <div>
    <h1>Resume</h1>
    <Contact></Contact>
    <PersonalProfile></PersonalProfile>
    <Experiences></Experiences>
    <Skills></Skills>
    <Honors></Honors>
    <OtherExperience></OtherExperience>
  </div>
</template>

<script>
import Contact from './resume/Contact'
import Experiences from './resume/Experiences'
import Honors from './resume/HonorsPrizesAwards'
import OtherExperience from './resume/OtherExperience'
import PersonalProfile from './resume/PersonalProfile'
import Skills from './resume/Skills'




export default {
  name: 'Resume',
  
  components: {
      'Experiences': Experiences,
      'Contact': Contact,
      'Honors': Honors,
      'OtherExperience': OtherExperience,
      'PersonalProfile': PersonalProfile,
      'Skills': Skills,
    },
}
</script>
<style>
h1 {
  margin-top: 12px;
}
</style>