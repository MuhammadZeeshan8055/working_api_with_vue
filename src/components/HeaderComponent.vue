<template>
    <div class="navbar">
        <div class="logo">
            <img alt="Vue logo" src="../assets/logo.png" height="80px" width="100px">
        </div>
        <ul>
            <li><a><router-link to="/">Home</router-link></a></li>
            <li><a><router-link to="/add">Add Restaurant</router-link></a></li>
            <li><a><router-link to="/login">Login</router-link></a></li>
            <li><a href="" v-on:click="confirmLogout">Logout</a></li>
        </ul>
    </div>
</template>
<script>
export default{
    name:"HeaderComponent",

    data(){
        return{
            islogin:false
        }
    },

    methods: {
        confirmLogout(event) {
            event.preventDefault(); // Prevents the default link behavior
            if (confirm("Are you sure you want to logout?")) {
                this.logout(); // Call the logout function if the user confirms
            }
        },
        logout() {
            localStorage.clear();
            this.$router.push({name:'LoginComponent'});
        }
    }

}
</script>
<style>
    body{
        padding: 0;
        margin: 0;
    }
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: black;
        color: white;
        padding: 10px;
    }
    ul {
        list-style: none;
        display: inline-flex;
        gap: 50px;
    }
    ul li{
        font-size: 1.3rem;
    }
    ul li a{
        text-decoration: none;
        color: white;
        padding: 20px;

    }
    ul li a:hover{
        background: white;
        color: black;
        height: 100px;
    }
</style>