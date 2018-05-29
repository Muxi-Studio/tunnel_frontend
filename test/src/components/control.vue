<template>
<div>
   <el-date-picker      
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
      <el-button type="primary" @click = "filterHandler(scope.$index)">查询</el-button>
      <el-button >重置</el-button>
      <div class = "ChoiceAll">
        <el-button>批量发送</el-button>
        <el-button type="danger" @click = "delGroup" :disabled = "this.sels.length === 0">批量删除</el-button>
      </div>
    <el-table 
    :data="tableData" 
    style="width: 100%" 
    tooltip-effect="dark"
    @selection-change="handleSelectionChange"  
    ref="multipleTable">
    <el-table-column
    type="selection"
    width="55">
    </el-table-column>
    <el-table-column
        prop="date"
        label="日期"
        sortable
        width="180"
    >
    </el-table-column>
    <el-table-column
        prop="id"
        label="ID"
        width="180">
      <div slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>昵称: {{ scope.row.id }}</p>
          <p>想说的话: {{ scope.row.words }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.id }}</el-tag>
          </div>
        </el-popover>
      </div>
      </el-table-column>
      <el-table-column
        prop="time"
        label="发送时间"
        width="220">
      </el-table-column>
      <el-table-column
        prop="e-mail"
        label="发送地址"
        width="300">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态">
      </el-table-column>
    <el-table-column label="操作">
      <div slot-scope="scope">
        <el-button @click = "handleEdit(scope.$index, scope.row)">发送</el-button>
        <el-button type="danger" @click.native.prevent = "deleteRow(scope.$index, tableData)">删除</el-button>
      </div>
    </el-table-column>
  </el-table>
  <div class="block" style="width: 100%;">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      layout = "total, prev, pager, next, jumper"
      :page-size = "25"
      :total = "100">
    </el-pagination>
  </div>
</div>

</template>

<script>
export default {
   name: 'control',
   data() {
      return {
         value1: '',
         tableData: [],
        multipleSelection: []
      }
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

        fetch("/api/admin/pages/"+this.page+"/",{
          method: 'GET',
          headers:{
            "token": this.token,
            "Content-Type": "application/json"
          }
        }).then(res => {
          if(res.ok){
            return res.json();
          }
        }).then(res => {
          this.tableData = res.messagelist;
        })

        fetch("/api/admin/pages/"+this.page+"/time"+this.time+"/",{
          method: 'GET',
          headers:{
            "token": this.token,
            "Content-Type": "application/json"
          }
        }).then(res => {
          if(res.ok){
            return res.json();
          }
        }).then(res => {
          this.tableData = res.messagelist;
        })
        
        fetch("/api/admin/pages/"+this.page+"/time"+this.time+"/",{
          method: 'POST',
          headers:{
            "token": this.token,
            "Content-Type": "application/json"
          }
        }).then(res => {
          if(res.ok){
            return res.json();
          }
        }).then(res => {
          this.tableData = res.messagelist;
        })
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
       filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
       handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      deleteRowAll(val,rows){
          for(val in rows){
             if(val.multipleSelection){
                  rows.splice(val);
             }
          }
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    } 
  };
</script>

<style scoped>
.ChoiceAll{
  margin-top: 30px;
}
</style>