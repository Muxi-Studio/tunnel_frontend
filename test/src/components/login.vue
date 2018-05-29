<template>
  <div id="timeback">
    <div class = "user">用户名：</div>
    <input type="text" class = "username" v-model="username"/>
    <div class = "user">密码：</div>
    <input type="text" class = "password" v-model="password"/>
  </div>
</template>
<script>
export default {
    name:"login",
    data() {
        return {
            username:"",
            password:""
        };
    },
    mounted(){
        fetch("/api/signin/",{
            method: 'POST',
            body: JSON.stringify({"username": "TStunnel","password": "Ilovemuxi"}),
            headers: {
                "Content-Type": "application/json"
            }
            
        }).then(res => {
            if(res.ok){
                return res.json();
            }
        }).then(res =>{
            this.token = res.token;
        })

    },
}
</script>
