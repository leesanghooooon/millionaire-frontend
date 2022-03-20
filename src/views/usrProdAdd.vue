<template>
  <div class="content">
    <div>
      <div class="row">
        <div class="col-6">
          <div class="top-title"><h3>Product</h3></div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="card card-color-navy">
            <div class="card-header">
              <h5 class="title">Product Add</h5>
            </div>
            <div class="card-body">

              <div class="row">
                <div class="col-md-3">
                  <div class="form-group">
                    <div class="form-group">
                      <label class="control-label">금융회사명</label>
                      <input aria-activedescendant="addon-right addon-left" placeholder="우리은행" v-model="korCoNm" ref="korCoNm" class="form-control">
                    </div>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="form-group">
                    <div class="form-group">
                      <label class="control-label">금융상품명</label>
                      <input aria-activedescendant="addon-right addon-left" placeholder="스무살 우리 적금(정액·자유)" v-model="finPrdtNm" ref="finPrdtNm" class="form-control">
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <div class="form-group">
                      <label class="control-label">저축금액</label>
                      <input aria-activedescendant="addon-right addon-left" placeholder="200000" v-model="savMoney" ref="savMoney" class="form-control">
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <br/>
      <div class="row">
        <div class="col-6">
          <div class="card">
            <div class="card-header text-black-50 text-left">
              적금 상품 리스트
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
                  @click="fnGridClick"
            ></grid>
          </div>
        </div>

        <div class="col-6">
          <div class="card">
            <div class="card-header text-black-50 text-left">
              예금 상품 리스트
            </div>
            <grid ref="tuiGrid2"
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
import { Grid } from '@toast-ui/vue-grid'
export default {
  name: 'usrProdAdd',
  components: {
    'grid': Grid
  },
  data() {
    return {
      list : [],
      korCoNm : '',
      finPrdtNm : '',
      savMoney : '',
      gridProps: {
        list: [],
        rowHeaders: ['rowNum'],
        options: {
          bodyHeight: 210,
          bodyWidth: 100,
          pageOptions: {
            useClient: true,
            perPage: 5
          }
        },
        columnOptions: {
          resizable: false
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
        scrollX: true,
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
        this.list = res.data;
        this.gridProps.list = res.data;
      }).catch(err => {
        console.log(err);
      })
    },
    fnAdd() {
      let params = {};
      this.$move('/Product/usrProdAdd', params)
    },
    fnGridClick(evt){
      if (evt.targetType == "cell" || evt.targetType == "rowHeader") {
        // 전체 선택
        this.$refs.tuiGrid.invoke('setSelectionRange', {start:[evt.rowKey, 0], end: [evt.rowKey, 10]})
        console.log(this.list[evt.rowKey])
      }
    }
  },
  mounted() {
    this.getMenuList();
  }
}
</script>