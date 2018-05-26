<template>
<div>
<el-form :inline="true" class="demo-form-inline">   
   <el-date-picker      
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    <el-form-item>
    <el-button 
    type="primary"
    @click="filterHandler(scope.$index)">查询</el-button>
     <el-button
     @click="">重置</el-button>
  </el-form-item>
  </el-form>
  <el-button>批量发送</el-button>
  <el-button
  type="danger"
  @click.native.prevent="deleteRowAll()">批量删除</el-button>
 </div>
 <el-table 
 :data="tableData" 
 style="width: 100%" 
 tooltip-effect="dark"
 @selection-change="handleSelectionChange"  ref="multipleTable">
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
        <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>昵称: {{ scope.row.id }}</p>
          <p>想说的话: {{ scope.row.words }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.id }}</el-tag>
          </div>
        </el-popover>
      </template>
      </el-table-column>
      <el-table-column
        prop="time"
        label="发送时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="e-mail"
        label="发送地址"
        width="180">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态">
      </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">发送</el-button>
        <el-button size="mini" type="danger" @click.native.prevent="deleteRow(scope.$index, tableData)" type="text">删除</el-button>
      </template>
    </el-table-column>
  </el-table> 
  <div class="block" style="width: 100%;">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      layout="total, prev, pager, next, jumper"
      :page-size="25"
      :total="100">
    </el-pagination>
  </div>
</template>

<script>
export default {
   name: 'control',
   data() {
      return {
         value1: '',
         tableData: [{
          date: '2016-05-02',
          id: '王小虎',
          status:'已发送'
        }, {
          date: '2016-05-04',
          id: '王小虎',
          status:'已发送'
        }, {
          date: '2016-05-01',
          id: '王小虎',
          status:'未发送'
        }, {
          date: '2016-05-03',
          id: '王小虎',
          status:'已发送'
        }],
        multipleSelection: []
      }
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
