<template>
  <div>
    <h1>Projects I've been working on...</h1>
  <p>
    If you want to check out the code behind the magic, take a look at <a href="https://github.com/ediewilson">my Github!</a>
  </p>
  <div class="tempo">
    <h2>Tempo</h2>
    <p>Tempo is an iOS app that I created with a group in my first web development class. This app used the Spotify API along with our selection criteria to create playlists. The <a href="https://github.com/ediewilson/project-workout-playlists">front end of project</a> and the <a href="https://github.com/ediewilson/project-api-workout-playlists">back end of the project</a> are on Github, but below are some screencaps from the app...</p>
    <ul>
    <li><p class="gif-header">New profile</p> 
    <img src="https://media.giphy.com/media/Id6vt52G35Rkr2Oq62/giphy.gif"/></li>
    <li><p class="gif-header">Example playlist</p>
    <img src="https://media.giphy.com/media/h4IrY661rYPyfTGcgc/giphy.gif"/></li>
    <li><p class="gif-header">Some new playlist flow</p>
    <img src="https://media.giphy.com/media/RMk2vnXfgJVXUqxlxU/giphy.gif"/></li>
    </ul>
    <h5>Some details about Tempo's architecture...</h5>
  <h5>Front end</h5>
  <ul class="front-end">
      <li>iOS app created in React Native</li>
      <li>Gets songs to make playlists from spotify API</li>
      <li>Gathers Spotify Login for auth data and uses Spotify API to authenticate it</li>
      <li>Requests music preferences and workout info from user for profile</li>
      <li>Receives generated playlist from Spotify API to display to User</li>
      <li>Allows for playlist title and other inputs to be updated</li>
  </ul>
  <h5>Back end</h5>
   <p>The backend for this project was built using Mongoose.</p>
  <ul class="back-end">
    <li><strong>Auth Controller:</strong><br/>
          Communicates with front end about account/authentication,
          and sends account information to Spotify API
    </li>
    <li><strong>User Controller:</strong><br/>
          Stores user information in our database, including preferences and playlists
    </li>
    <li><strong>Playlist Controller:</strong><br/>
          Communicates with Spotify to fetch songs for playlists, handles storing playlists, and all other auxiliary functions
    </li>
  </ul>
  </div>
    <div class="buzzfeed">
    <h2>Buzzfeed Quiz!</h2>
      <img src="../assets/img/buzzfeed.png" class="buzzfeed-quiz"/>
      <p>Have you ever wondered which Ivy League school you're the best fit for? Check out one of my first full stack development projects! Unfortunately it's not actually full stack but it is at least a little entertaining... <a href="https://ediewilson.github.io/CS-52-Lab-2/">Take the quiz</a>.</p>
      <p>This project was built using jQuery, HTML, and CSS.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
}
</script>
<style lang="scss" scoped>
h1 {
  margin-top: 12px;
}

.body {
    margin: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: row;
    list-style-type: none;
}

.gif-header {
  font-weight: bold;
}

.tempo {
  padding-left: 7%;
  padding-right: 7%;
}

.back-end {
    padding-left: 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: row;
    list-style-type: none;

    li { 
      max-width: 200px;
    }
}

.buzzfeed {
  padding-top: 50px;
  padding-left: 7%;
  padding-right: 7%;
}

.buzzfeed-quiz {
  width: 600px;
  padding-bottom: 16px;
}

.front-end {
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0;

  li {
    align-self: center;

    margin: 10px;
    border-radius: 10%;
    width: 200px;
    min-height: 50px;

  }
}
</style>