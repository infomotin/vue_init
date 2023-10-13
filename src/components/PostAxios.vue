<template>
    <div>
        <h1>Psot From Axios</h1>
       <input type="text" v-model="SeachTex" placeholder="Search In The Box">
        <div v-for="post in filterSeach" :key="post.id">

            <h2>{{ post.title }}</h2>
            <p>{{ post.body |snippet }}</p>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default{
     name:'PostAxios',
    data(){
        return{
            posts:[],
            SeachTex:''
        }
    },
    computed:{
        filterSeach(){
            return this.posts.filter(x =>{
                return x.title.match(this.SeachTex);
            })
        }
    }
    ,
    created(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            this.posts = response.data;
        })
        .catch(error =>{
            console.log(error)
        })
    },
    methods:{

    }
}
   
</script>

<style scoped>
    h1{
        color: aqua;
        text-align: center;
    }
</style>