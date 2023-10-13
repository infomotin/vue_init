<template>
    <div>
        <h1>Vue LifeCycale </h1>
        <p>{{ title }}</p>
        <button @click="ChangeTitel">ChangeTitel</button>

    </div>
</template>

<script >
    export default{
        name : "HookVue",
        data(){
            return{
                title:"Change Me",
            }
        },
        beforeCreate(){
            console.log('befour Create');
        },
        created(){
            console.log('After Create');
        },
        beforeUpdate(){
            // this.title = ""
            console.log('berfour Update');
        },
        updated(){
            // this.title = "Chagol"
            console.log('update');
        },
        methods:{
            ChangeTitel (){
                this.title = "Its Change To Another"
                console.log('Call ChangeTitel');
            }
        } 
    }
</script>    

<style scoped>

</style>