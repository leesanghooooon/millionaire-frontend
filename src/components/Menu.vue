<template>
    <div>
      <div class="band">
        Millionaire
      </div>

      <div class="sidebar">
        <ul>
          <li v-for="data in menuList" :key="data.title" :class="data.class">
            <router-link :to="data.link" :class="data.class" @click.native="fnMenuMove(data)"><i :class=data.icon></i>{{data.title}}</router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import request from '@/utils/request'

  export default {
    name: 'Menu',
    data() {
      return {
        menuList: [
          {title:'Dashboard', link:'/', icon:'', class:'active'},
          {title:'MyChart', link:'/myChart', icon:'', class:'inactive'},
          {title:'Product', link:'/product', icon:'', class:'inactive'},
          {title:'Profile', link:'/profile', icon:'', class:'inactive'},
          {title:'Contact', link:'/contact', icon:'', class:'inactive'}
        ]
      }
    },
    methods: {
      getMenuList() {
        this.searchData = {
          finCoNo:'0010001'
        }

        request({
          url: '/api/prod/selectProductList',
          method: 'post',
          data : this.searchData
        }).then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        })
      },
      fnMenuMove(data){
        let row = this.menuList.find(v => v.class === 'active');
        row.class = 'inactive';
        data.class = 'active';
      }
    },
    mounted () {
      this.getMenuList();
    }
  }
</script>