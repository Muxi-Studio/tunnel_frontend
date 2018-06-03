<template>
    <div class="container">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名:">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码:">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="login" type="primary" @click="login">登陆</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import Cookie from '.././cookie.js'
    
    export default {
        data() {
            return {
                form: {
                    username: "",
                    password: ""
                }
            };
        },
        methods: {
            login() {
                let message = {
                    username: this.form.username,
                    password: this.form.password
                };
                Cookie.setCookie('url', window.location.href);
                fetch("/api/signin/", {
                    method: 'POST',
                    body: JSON.stringify(message),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(res => {
                    if (res.ok) {
                        return res.json();
                    }
                }).then(res => {
                    Cookie.setCookie("token", res.token)
                    this.$router.push("/admin")
                })
            }
        },
    }
</script>

<style>
    @import '../assets/reset.css';
    .login {
        margin: 0 auto;
        display: block;
    }
    
    .container {
        display: flex;
        justify-content: center;
        padding: 100px;
    }
</style>

