<template>
  <div id="app">
    <h2>{{ title }}</h2>

    <NavBar></NavBar>
    <PostAxios/>
    <!-- <HookVue></HookVue> -->
    <!-- <AllFriends :friends="friends" @delete="dellist"></AllFriends>
    <OnlineFriend :friends="friends"></OnlineFriend> -->
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import AllFriends from './components/AllFriends.vue';
// import OnlineFriend from './components/OnlineFriend.vue'
import NavBar from './components/NavBar.vue';
import PostAxios from './components/PostAxios.vue';

export default {
  name: 'App',
  data(){
    return{
      title:'Well Come To Vue Js',
      friends: [
                { name: 'a', online: true },
                { name: 'b', online: false },
                { name: 'c', online: true },
                { name: 'd', online: false },
                { name: 'e', online: true }
            ]
    }
  },
  components: {
    'NavBar':NavBar,
    PostAxios,
    // HookVue,
    // 'AllFriends':AllFriends,
    // 'OnlineFriend':OnlineFriend,
  },
  methods:{
    dellist(payload){
      console.log(payload);
      this.friends = this.friends.filter(friend =>{
        return friend.name !== payload.name;
      })
      console.log('call From AllFrendes Page ');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
