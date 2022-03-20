<template>
  <div class="content">
    <div>
      <div class="row">
        <div class="col-6">
          <div class="text-left top-title"><h3>Product</h3></div>
        </div>
        <div class="col-6">
          <div class="text-right top-title">
            <button class="btn btn-primary btn-sm" @click="fnAdd()">My Prod Add</button>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header text-black-50 text-left">
              상품 리스트
            </div>
            <grid v-if="gridProps.list.length > 0"
                  ref="tuiGrid"
                  :data="gridProps.list"
                  :columns="gridProps.columns"
                  :columnOptions="gridProps.columnOptions"
                  :rowHeaders="gridProps.rowHeaders"
                  :options="gridProps.options"
                  :scrollX="gridProps.scrollX"
                  :scrollY="gridProps.scrollY"
            ></grid>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from '@/utils/request'

export default {
  name: 'Product',
  data() {
    return {
      gridProps: {
        list: [],
        rowHeaders: ['rowNum'],
        options: {
          bodyHeight: 400,
          bodyWidth: 100,
          pageOptions: {
            useClient: true,
            perPage: 10
          }
        },
        columnOptions: {
          resizable: true
        },
        columns: [
          {header: '금융회사명', name: 'korCoNm', align: 'center', width: '100'},
          {header: '금융상품명', name: 'finPrdtNm', align: 'left', width: '180'},
          {
            header: '저축 금리', name: 'intrRate', align: 'left', width: '50', formatter(grid) {
              return grid.value + '%'
            }
          },
          {
            header: '최고 우대금리', name: 'intrRate2', align: 'left', width: '50', formatter(grid) {
              return grid.value + '%'
            }
          },
          {header: '금리 유형', name: 'intrRateTypeNm', align: 'left', width: '50'},
          {header: '적립 유형', name: 'rsrvTypeNm', align: 'left', width: '50'},
          {header: '최고한도', name: 'maxLimit', align: 'left', width: '50'},
          {
            header: '저축 기간', name: 'saveTrm', align: 'left', width: '20', formatter(grid) {
              return grid.value + '개월'
            }
          },
        ],
        scrollX: false,
        scrollY: true,
      }
    }
  },
  methods: {
    getMenuList() {
      this.searchData = {
        finCoNo: '0010001'
      }

      request({
        url: '/api/prod/selectProductList',
        method: 'post',
        data: this.searchData
      }).then(res => {
        console.log(res);
        this.gridProps.list = res.data;
      }).catch(err => {
        console.log(err);
      })
    },
    fnAdd() {
      let params = {};
      this.$move('/Product/usrProdAdd', params)
    }
  },
  mounted() {
    this.getMenuList();
  }
}
</script>