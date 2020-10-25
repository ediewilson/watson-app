<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="nav-link" v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
      <a href="https://www.linkedin.com/in/elizabeth-wilson-7a766718a/" class="nav-link"><button type="button" class="btn btn-li"><i class="fab fa-linkedin-in"></i></button></a>
      <a href="https://github.com/ediewilson" class="nav-link"><button type="button" class="btn btn-git"><i class="fab fa-github"></i></button></a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page:'/Home'
        },
        {
          id: 1,
          text: 'Projects',
          page:'/Projects'
        },
        {
          id: 2,
          text: 'Resume',
          page:'/Resume'
        },
      ]
    }
  }
}
</script>
<style>
</style>