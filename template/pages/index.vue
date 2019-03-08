<template>
  <div id="app">
    <!--上半部-->
    <div class="search-bar-wrap" style="height:500px;background-color: #ccc">

    </div>
    <div class="code-list">
      <!--搜索页码框-->
      <div class="pagination-wrap">
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
      <!--button-->
        <el-button round>圆角按钮</el-button>
        <el-button type="primary" round>主要按钮</el-button>
        <el-button type="success" round>成功按钮</el-button>
        <el-button type="info" round>信息按钮</el-button>
        <el-button type="warning" round>警告按钮</el-button>
        <el-button type="danger" round>危险按钮</el-button>
       

    </div>
  </div>
</template>

<script>
export default {

};
</script>
<style>
.app{
text-align: center;
}
.code-list{
  text-align: center;width: 960px;
}
</style>