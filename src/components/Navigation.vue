<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="nav-link" v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
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
.spacing {
  margin-right: 10px;
}
</style>