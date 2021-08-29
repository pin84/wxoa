<template>
  <div id="app">
    <div id="nav" v-if="$store.state.v1.isShowNav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import wxconfig from "./wx/wxconfig";
export default {
  data(){
    return {
    }
  },

  created(){
    this.initPage()
  },
  async mounted() {
    await wxconfig();
  },

  methods:{
    initPage(){
      
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  box-sizing: border-box;
}

#nav {
  /* padding: 30px; */
  box-sizing: border-box;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
