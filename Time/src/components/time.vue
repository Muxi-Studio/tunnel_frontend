<template>
<div id = "title">时空隧道</div>
<div id = "introduce">
    <p>一段心声+目标邮箱+未来某个日期+随意昵称=时空之匙</p>
    <p>给自己一个期冀，一次机会，一份勇气</p>
    <p>你想对未来的我或TA说什么？</p>
</div>
<div>
    <div id = "send">发送时间</div>
    <div id = "choicetime">
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    </div>
</div>
<div>
    <div id = "send">我要发给</div>
    <input type="text" id = "email"/>
</div>
<div>
    <div id = "send">想说的话</div>
    <div id = "content">
        <p>内容要求：</p>
        <p>(1)对侮辱性、诽谤性、违反国家规定等言论零容忍</p>
        <p>(2)温馨提示：真的会定时发送，望三思后码字</p>
    </div>
    <input type="text" id = "words" />
</div>
<div>
    <div id = "send">昵称</div>
    <div id = "content">
        <p>可以在这儿备注上自己的名字或者昵称</p>
    </div>
    <input type="text" id = "ID" />
</div>
<button  type="button" id = "decide">提交</button>
<div id = "muxi">Powered_by_木犀团队</div>


</template>
<script>
export default {
    data() {
        return {
            value1: '',
        };
    }
};
</script>
<style scoped>
#title{
    margin: 0 auto;
    width: 42%;
    height: 65px;
    margin-top: 120px;
    font-size: 40px;
    color:#90dbdc;
}
#introduce{
    margin: 0 auto;
    color: white;
    font-size: 26px;
    margin-top: 190px;
}
#send{
    font-size: 32px;
    color: white;
    margin: 0 auto;
    margin-top: 35px;
}
#choicetime{
    width: 78%;
    height: 88px;
}
#content{
    font-size: 26px;
    font-family: "Adobe Heiti Std";
    color: rgb(174, 169, 205);
    line-height: 1.385;
    text-align: left;
}
#email{
    width: 78%;
    height: 88px;
}
#words{
    width: 78%;
    height: 322px;
}
#ID{
    width: 78%;
    height: 88px;
}
#button{
    border-radius: 12px;
    background-color: rgba(0, 0, 0, 0);
    color: rgb(255, 255, 255);    
    width: 260px;
    height: 88px;
    line-height: 1.2;
    text-align: center;
    margin-top: 50px;

}
#muxi{
    font-size: 32px;
    font-family: "SimHei";
    color: rgb(255, 255, 255);
    line-height: 1.2;
    margin-top: 55px;
}
</style>
