<template>
   <div class="signup-container">
        <h1>SignUp</h1>
        <input type="text" placeholder="Enter Your Name" v-model="name">
        <br><br>
        <input type="text" placeholder="Enter Your Email" v-model="email">
        <br><br>
        <input type="password" placeholder="Enter Your Password" v-model="password">
        <br><br>
        <button v-on:click="signUp()">SignUp</button>
        <br><br>
        <router-link to="/login">Login</router-link>
    </div>
</template>
<script>
import axios from 'axios';

export default{

    name:"SignUp",
    data(){
        return{
            name:'',
            email:'',
            password:'',
        }
    },
    methods:{
        async signUp(){
            console.log("Login Details",this.email,this.password);
            let result=await axios.post("http://localhost:3000/user",{
                name:this.name,
                email:this.email,
                password:this.password
            });
            console.warn(result);
            if(result.status==201){
                this.$router.push({name:'Home'});
                localStorage.setItem("user-info",JSON.stringify(result.data))
            }
        }

    },
    mounted(){
        let user=localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'Home'})
        }
    }
}
</script>

<style>
.signup-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

input, button {
    width: 200px;
    padding: 10px;
    margin: 5px 0;
}

</style>