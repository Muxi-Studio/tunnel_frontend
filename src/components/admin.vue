<template>
  <div class="block">
    <p>时空隧道管理后台</p>
    <div>
    <el-date-picker type="date" placeholder="选择日期" v-model="time" value-format="yyyy-MM-dd">
    </el-date-picker>
    <el-button type="primary" @click="filterHandler(time)">查询</el-button>
    <el-table :data="tableData" style="width: 100%" tooltip-effect="dark" @selection-change="handleSelectionChange" ref="multipleTable">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="sent_time" sortable label="发送时间" width="200">
      </el-table-column>
      <el-table-column prop="sent_name" label="ID" width="180">
        <div slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>昵称: {{ scope.row.sent_name }}</p>
            <p>想说的话: {{ scope.row.sent_content }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.sent_name }}</el-tag>
            </div>
          </el-popover>
        </div>
      </el-table-column>
      <el-table-column prop="sent_address" label="发送地址" width="220">
      </el-table-column> 
      <el-table-column prop= "sent_status" width="100" label="状态(1-未发送 2-已发送 3-失败）">
      </el-table-column>
      <el-table-column label="操作">
        <div slot-scope="scope">
          <el-button @click="handleEdit(scope.$index, scope.row)">发送</el-button>
          <el-button type="danger" @click.native.prevent="deleteRow(scope.$index, scope.row)">删除</el-button>
        </div>
      </el-table-column>
    </el-table>
    <div class="block" style="width: 100%;">
      <el-pagination @current-change="handleCurrentChange(page)" :current-page.sync="page" layout="prev, pager, next, jumper" :page-size="15">
      </el-pagination>
    </div>
    </div>
  </div>
</template>

<script>
  import Cookie from '.././cookie.js'
  
  export default {
    name: 'admin',
    data() {
      return {
        time: '',
        tableData: [],
        multipleSelection: [],
        token: "",
        page: 1,
        map: ["","未发送","已发送","发送失败"]
      }
    },
    mounted() {
      this.token = Cookie.getCookie('token')
      this.handleCurrentChange(1);
    },
    methods: {
      handleCurrentChange(page) {
        fetch("/api/admin/pages/" + page + "/", {
          method: 'GET',
          headers: {
            "token": this.token,
            "Content-Type": "application/json"
          }
        }).then(res => {
          if (res.ok) {
            return res.json();
          }
        }).then(res => {
          this.tableData = res.messagelist;
        })
      },
      handleEdit(index, row) {
        fetch("/api/sent/" + row.id +"/", {
          method: 'POST',
          headers: {
            "token": this.token,
            "Content-Type": "application/json"
          }
        }).then(res => {
          if(res.ok) {
            this.handleCurrentChange(this.page)
          }
        })
      },
      filterHandler(time) {
        fetch("/api/admin/pages/" + this.page + "/time/" + time + "/", {
          method: 'GET',
          headers: {
            "token": this.token,
            "Content-Type": "application/json"
          }
        }).then(res => {
          if (res.ok) {
            return res.json();
          }
        }).then(res => {
          this.tableData = res.messagelist;
        })
      },
      deleteRow(index, row) {
        fetch("/api/admin/message/" + row.id + "/", {
          method: 'DELETE',
          headers: {
            "token": this.token,
            "Content-Type": "application/json"
          }
        }).then(res => {
          if(res.ok) {
            this.handleCurrentChange(this.page)
          }
        })
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  };
</script>

<style scoped>
  @import '../assets/reset.css';
  .ChoiceAll {
    margin-top: 30px;
  }
  .block{
    display: flex;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  p {
    font-size: 30px;
  }
</style>