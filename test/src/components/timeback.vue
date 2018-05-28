<template>
  <div id="timeback">
      <div id = "picture">
        <img src = "../assets/插画.png" id = "inset">
      </div>
<div id = "introduce">
    <!-- <p>一段心声+目标邮箱+未来某个日期+随意昵称=时空之匙</p>
    <p>给自己一个期冀，一次机会，一份勇气</p>
    <p>你想对未来的我或TA说什么？</p> -->
    <p>与过去的自己不期而遇 聆听来自光阴彼端的声音</p>
    <p>在这里写下你对自己或TA的心绪或期许</p>
    <p>我将在时光的那头 说给你听</p>
</div>
<div id = "SendTo">
    <div id = "send">发送时间</div>
<div id="wrap">
      <el-date-picker
      v-model="sent_time"
      type="date"
      placeholder="选择日期"
      style="width: 100%;">
    </el-date-picker>
</div>

    <div id = "send">我要发给</div>
    <input type="text" id = "email" v-model="sent_address"/>
    <div id = "send">想说的话</div>
    <div id = "content">
        <p>内容要求：</p>
        <p>(1)对侮辱性、诽谤性、违反国家规定等言论零容忍</p>
        <p>(2)温馨提示：真的会定时发送，望三思后码字</p>
    </div>
    <input type="text" id = "words" v-model="sent_content"/>
    <div id = "send">昵称</div>
    <div id = "content">
        <p>可以在这儿备注上自己的名字或者昵称</p>
    </div>
    <input type="text" id = "ID" v-model="sent_name"/>
</div>
<div id = "up">
<button  type="button" id = "decide" v-on:click="sent">提交</button>
</div>
<div id = "muxi">Powered by 木犀团队</div>
  </div>
</template>
<script>
export default {
    name: 'time',
    data() {
        return {
            sent_content:" ",
            sent_time: "",
            sent_name: "",
            sent_address: "",
            token:""
        };
    },
    mounted(){
        // fetch("/api/signin/",{
        //     method: 'POST',
        //     body: JSON.stringify({"username": "TStunnel","password": "Ilovemuxi"}),
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
            
        // }).then(res => {
        //     if(res.ok){
        //         return res.json();
        //     }
        // })

    },
    methods: {
        sent(){
            var message = {
                "sent_content": this.sent_content,
                "sent_time": "123",
                "sent_name": this.sent_name,
                "sent_address": this.sent_address,
            };
            fetch("/api/message/",{
                method: 'POST',
                body: JSON.stringify(message),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            }).then(res => {
                if(res.ok){
                    return res.json();
                } else {
                    // console.log("x");
                    this.failed = true;
                }
                // console.log(res);
            }).then(value =>{
                //
            })
        }
    }
};
</script>
<style scoped>
input{
    border-radius:10px;
}
#timeback{
    background-image: url(../assets/background.png);
    background-repeat: no-repeat;
    background-position: top center;
    background-size: 100% 100%;
    padding: 120px 0;
}
body{
    line-height: 1.2;
}
#picture{
    text-align: center;
}
#inset{
    width: 40%;
}
div{
    display: block;
}
#introduce{
    font-family: "Adobe Heiti Std";
    text-align: center;
    color: white;
    font-size: 20px;
    margin-top: 100px;
}
#wrap{
    margin-top: 20px;
}
#SendTo{
    padding: 0 13% 0 13%;
}
#send{
    font-size: 28px;
    color: white;
    margin-top: 35px;
}
#content{
    font-size: 23px;
    font-family: "Adobe Heiti Std";
    color: rgb(174, 169, 205);
    line-height: 1.385;
}
#email{
    margin-top: 20px;
    width: 100%;
    height: 36px;
}
#words{
    margin-top: 20px;
    width: 100%;
    height: 322px;
}

#ID{
    width: 100%;
    height: 36px;
}
#up{
    text-align: center;
}
#decide{
    border-radius: 12px;
    background-color: #90dbdc;
    color: rgb(255, 255, 255);    
    width: 25%;
    height: 58px;
    font-size: 24px;
    line-height: 1.2;
    text-align: center;
    margin-top: 50px;

}
#muxi{
    text-align: center;
    font-size: 20px;
    font-family: "SimHei";
    color: rgb(255, 255, 255);
    line-height: 1.2;
    margin-top: 55px;
}
</style>
