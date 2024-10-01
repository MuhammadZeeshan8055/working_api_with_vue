<template>
    <div class="home-page-content">
        <h1>Update Restaurant Page</h1>
        <form>
            <input type="text" name="" id="" placeholder="Enter Restaurant Name" v-model="restaurant.name">
            <br>
            <br>
            <input type="text" name="" id="" placeholder="Enter Restaurant Address" v-model="restaurant.email">
            <br>
            <br>
            <button type="button" v-on:click="updateRestaurant()">Update Restaurant</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios';

export default{
    name:"UpdateComponent",

    data(){
        return{
            restaurant:{
                name:'',
                email:'',
            }
        }
    },
    async mounted(){
        let user=localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name:'LoginComponent'});
        }
        let result=await axios.get("http://127.0.0.1:8000/api/search/"+this.$route.params.id);
        console.log(result.data);
        this.restaurant=result.data;
    },
    methods:{
        async updateRestaurant(){
            let result=await axios.put("http://127.0.0.1:8000/api/update/"+this.$route.params.id,{
                name:this.restaurant.name,
                email:this.restaurant.email,
            });
            if(result.status==200){
                alert('Restaurant Updated Successfully');
                this.$router.push({name:'Home'});

            }
        }
    }

}
</script>

<style>
    .home-page-content{
       display: flex;
       justify-content: center;
       margin-top: 10%;
    }
</style>