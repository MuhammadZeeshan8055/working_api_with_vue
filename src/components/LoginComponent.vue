<template>
    
    <div class="login-container">
        <h1>Login</h1>
        <input type="text" placeholder="Enter Your Email" v-model="email">
        <br><br>
        <input type="password" placeholder="Enter Your Password" v-model="password">
        <br><br>
        <button v-on:click="login()">Login</button>
        <br><br>
        <router-link to="/signup">SignUp</router-link>
    </div>

</template>
<script>
import axios from 'axios';

export default{
    name:'LoginComponent',

    data(){
        return{
           email:'',
           password:''     
        }
    },
    methods:{
        async login(){

            let result=await axios.get(
                `http://localhost:3000/user?email=${this.email}&password=${this.password}`
            );
            console.warn("login information",result);

            if(result.status==200 && result.data.length > 0){
                alert('Login Successfull');
                localStorage.setItem("user-info",JSON.stringify(result.data[0]));
                this.$router.push({name:'Home'});

            }else{
                alert('Credentials Does not Matched');
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
.login-container {
    display: flex;
    flex-direction: column; /* Stacks the items vertically */
    justify-content: center; /* Vertically centers the content */
    align-items: center; /* Horizontally centers the content */
    height: 100vh; /* Full height of the viewport */
}

input, button {
    width: 200px; /* Set a fixed width for inputs and button */
    padding: 10px; /* Adds padding for better spacing */
    margin: 5px 0; /* Adds some space between input/button */
}</style>