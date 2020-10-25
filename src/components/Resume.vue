
<template>
  <div>
    <h1>Resume</h1>
    <p>Resume page babyyyyy</p>
    <div>
      <h3>Contact</h3>
      <p>Elizabeth Wilson</p>
      <p>EMAIL: ediewilson13@gmail.com</p>
      <p>CELL: (603) 484-3709</p>
      <p>ADDRESS: 4714 Hinman, Dartmouth College, Hanover, NH, 03755</p>
    </div>
    <Experiences></Experiences>
  </div>
</template>

<script>
import Experiences from './resume/Experiences'

export default {
  name: 'Resume', //this is the name of the component, 
  components: {
      'Experiences': Experiences,
    }
}
</script>
<style>
</style>