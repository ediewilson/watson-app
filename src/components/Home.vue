<template>
  <div class="home">
    <div class="header">
      <h1>Pick a Pic</h1>
    </div>
    <h3>we are picking photos</h3>
      <p>{{ this.blog }}</p>
</div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      blog: 'Do you like photography',
    }
  }
}
  window.watsonAssistantChatOptions = {
      integrationID: "ad674d02-614b-4a8d-ad12-a8d24f4812cf", // The ID of this integration.
      region: "us-south", // The region your integration is hosted in.
      serviceInstanceID: "a235c2ae-c072-4d92-89a8-9561fbcf58c7", // The ID of your service instance.
      onLoad: function(instance) { instance.render(); }
    };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
    document.head.appendChild(t);
  });

</script>
<style scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: 400px;
  } 

  h1 {
    position: relative;
    top: -75px;
  }
  h3 {
    padding-top: 2.5%;
  }
</style>
