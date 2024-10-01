<template>
    <div class="home-page-content">
        <h1>Welcome {{name}}, to Home Page</h1>
        <table border="1px">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Brand Name</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody v-for="item in restaurant" :key="item.id">
                <tr>
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.email }}</td>
                    <td><router-link :to="'/update/'+item.id">Edit</router-link></td>
                    <td><button v-on:click="confirmDelete(item.id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios';


export default{
    name:"HomeComponent",
    data(){
        return{
            name:'',
            restaurant:[]
        }
    },
    methods:{
        confirmDelete(id) {
            const confirmed = confirm("Are you sure you want to delete this restaurant?");
            if (confirmed) {
                this.deleteRestaurant(id);
            }
        },
        async deleteRestaurant(id){
        let result=await axios.delete("http://127.0.0.1:8000/api/delete/"+id);
            if(result.status==200){
                this.loadRestaurant();
            }
       },
        async loadRestaurant(){
            let user=localStorage.getItem('user-info');
            this.name=JSON.parse(user).name
            if(!user){
                this.$router.push({name:'LoginComponent'});
            }
            let result=await axios.get("http://127.0.0.1:8000/api/workers");
            console.log(result);
            this.restaurant=result.data;
        }
    },
    mounted(){
       this.loadRestaurant();
    },
   

}
</script>

<style>
    .home-page-content{
       display: flex;
       justify-content: center;
       margin-top: 10%;
       flex-direction: column;
       align-items: center;
    }
    table{
        text-align: center;
    }
    td{
        width: 100px;
    }
</style>