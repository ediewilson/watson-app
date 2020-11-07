<template>
  <div>
    <h1>Projects I've been working on...</h1>
  <p>
    Put Github repositories and previews/projects from workshops <a href="https://github.com/ediewilson">here... </a>
  </p>
  <div class="body"></div>
  </div>
</template>

<script>
export default {
  name: 'Projects',

  mounted() {
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', './projects/p5js/sketch.js')
    document.head.appendChild(externalScript)
    
    let externalScript2 = document.createElement('script')
    externalScript2.setAttribute('src', 'https://cdn.jsdelivr.net/npm/p5@1.0.0/lib/p5.min.js')
    externalScript2.setAttribute('integrity', 'sha384-lDbYJ/dUd7JOwvyThvjZNnNCN+NhOjHX4KaEa7PxbKcHEUbjt/lrqoiqTlHZOpRy')
    externalScript2.setAttribute('crossorigin', 'anonymous')
    document.head.appendChild(externalScript2)   
  },
}
</script>
<style>
h1 {
  margin-top: 12px;
}
.body {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

canvas {
    border: 2px solid black;
}
</style>