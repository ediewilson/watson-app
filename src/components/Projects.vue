<template>
  <div>
    <h1>Projects I've been working on...</h1>
  <p>
    Put Github repositories and previews/projects from workshops here... {{github}}
  </p>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data(){
    return {
      github: 'https://github.com/ediewilson',
    }
  }
}
</script>