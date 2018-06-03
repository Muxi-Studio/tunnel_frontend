<template>
  <div>
    <img src="http://p688ihx0v.bkt.clouddn.com/succes.png" v-if="success" class="picture">
    <div class="timeback" v-if="!success">
      <img src="http://p688ihx0v.bkt.clouddn.com/paint.png" class="inset">
      <div class="introduce">
        <p>一段心声+目标邮箱+未来某个日期+随意昵称=时空之匙</p>
        <p>给自己一个期冀，一次机会，一份勇气</p>
        <p>你想对未来的我或TA说什么？</p>
      </div>
      <div class="SendTo">
        <div class="send">发送时间</div>
        <div class="wrap">
          <el-date-picker v-model="sent_time" type="date" placeholder="选择日期" style="width: 100%;" :picker-options="pickerOptions1">
          </el-date-picker>
        </div>
        <div class="send">我要发给</div>
        <input type="text" class="email" v-model="sent_address" placeholder="邮箱（不可为空）" />
        <div class="send">想说的话</div>
        <div class="content">
          <p>内容要求：</p>
          <p>(1)对侮辱性、诽谤性、违反国家规定等言论零容忍</p>
          <p>(2)温馨提示：真的会定时发送，望三思后码字</p>
        </div>
        <textarea type="text" class="words" v-model="sent_content" />
        <div class="send">昵称</div>
        <div class="content">
          <p>可以在这儿备注上自己的名字或者昵称</p>
        </div>
        <input type="text" class="ID" v-model="sent_name" />
      </div>
      <div class="up">
        <button type="button" class="decide" v-on:click="sent">提交</button>
      </div>
      <div class="muxi">Powered by 木犀团队</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() < Date.now();
          }
        },
        sent_content: " ",
        sent_time: "",
        sent_name: "",
        sent_address: "",
        success: false
      };
    },
    methods: {
      sent() {
        let message = {
          sent_content: this.sent_content,
          sent_time: this.sent_time,
          sent_name: this.sent_name,
          sent_address: this.sent_address
        };
        fetch("/api/message/", {
          method: "POST",
          body: JSON.stringify(message),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => {
          if (res.status === 201) {
            this.success = true;
          } else {
            this.failed = true;
          }
        });
      }
    }
  };
</script>

<style scoped>
  @import "../assets/reset.css";
  .timeback {
    background-image: url(http://p688ihx0v.bkt.clouddn.com/backgroud1.png);
    background-repeat: no-repeat;
    background-position: top center;
    background-size: 100% 100%;
    padding: 30px 0;
  }
  
  body {
    line-height: 1.2;
  }
  
  .inset {
    width: 80%;
    margin: 0 auto;
    display: block;
  }
  
  div {
    display: block;
  }
  
  .introduce {
    font-family: "Adobe Heiti Std";
    text-align: center;
    color: white;
    font-size: 14px;
    margin-top: 30px;
  }
  
  .wrap {
    margin-top: 20px;
  }
  
  .SendTo {
    padding: 0 13% 0 13%;
  }
  
  .send {
    font-size: 28px;
    color: white;
    margin-top: 35px;
  }
  
  .content {
    font-size: 23px;
    font-family: "Adobe Heiti Std";
    color: rgb(174, 169, 205);
    line-height: 1.385;
  }
  
  .email {
    margin-top: 20px;
    width: 100%;
    height: 36px;
  }
  
  .words {
    margin-top: 20px;
    width: 100%;
    height: 322px;
  }
  
  .ID {
    width: 100%;
    height: 36px;
  }
  
  .up {
    text-align: center;
  }
  
  .decide {
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
  
  .muxi {
    text-align: center;
    font-size: 20px;
    font-family: "SimHei";
    color: rgb(255, 255, 255);
    line-height: 1.2;
    margin-top: 55px;
  }
  
  .picture {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
