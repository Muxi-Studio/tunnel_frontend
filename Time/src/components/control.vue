<template>
<div>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    </div>
 <el-table :data="tableData" style="width: 100%">
   <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
        prop="date"
        label="日期"
        sortable
        width="180"
        :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
      :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column
        prop="id"
        label="ID"
        width="180">
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
        prop="words"
        label="想说的话"
        width="180">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态">
      </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">发送</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
   methods: {
      handleEdit(index, row){
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
      }
      
    },
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
        }]
      }
    }
  };
</script>
