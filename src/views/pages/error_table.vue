  <template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="error"
        label="错误"
        width="180">
      </el-table-column>
      <el-table-column
        prop="count"
        label="发生次数"
        width="180">
      </el-table-column>
      <el-table-column
        prop="people"
        label="影响人数">
      </el-table-column>
    </el-table>
  </template>

  <script>
    export default {
      name: "error_table",
      data() {
        return {
          tableData: [
            {
            error: 'Network error',
            count: '130',
            people: '2203'
          }, 
            {
            error: 'Network error',
            count: '130',
            people: '2203'
          }, 
            {
            error: 'Network error',
            count: '130',
            people: '2203'
          }, 
          ]
        }
      },
      
    }
  </script>

<style scoped>
</style>