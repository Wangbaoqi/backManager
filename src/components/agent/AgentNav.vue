<template>
  <nav class="agent-nav">
    <div class="nav-left">
      <a :class='currentActive == item.id ? "active" : ""' v-for="item in agentNavList" :key="item.id" @click="agentNav(item)">
        {{item.name}}
      </a>
      <p class="nav-search">
        <i class="search icon-search"></i>
        <span class="search-input"><form-input :inputObj="navInput" ></form-input></span>
      </p>
    </div>
    <div class="nav-right">
      <span class="nav-icon icon-th-card" :class="agentGridActive == 'card'? 'grid-active': ''" @click="agentGrid('card')"></span>
      <span class="nav-icon icon-th-list" :class="agentGridActive == 'list'? 'grid-active': ''" @click="agentGrid('list')"></span>
    </div>
  </nav>
</template>

<script>

import FormInput from '@/components/global/FormInput'
export default {
  components: {FormInput},
  data() {
    return {
      currentActive: 0,
      agentGridActive: 'list',
      agentNavList: [
        {
          id: 0,
          name: 'All',
          active: true
        },{
          id: 1,
          name: 'Physical',
          active: false
        },{
          id: 2,
          name: 'Virtual',
          active: false
        }
      ],
      navInput: {
        inputStyle: {
          'padding-left': '30px',
          'background-color': '#f3f3f3',
          'border': '1px solid #e4e6e8',
          'height': '25px',
          'width': '135px'
        },
        inputType: 'text'
      }
    }
  },
  beforeMount() {
    const currentUrlName = this.$route.params.title;
    this.currentActive = this.agentNavList.filter(e => e.name.toLocaleLowerCase() == currentUrlName)[0].id || 0
  },
  mounted() {

  },
  methods: {
    // change the agent type
    agentNav(item) {
      this.currentActive = item.id
      this.$router.push({
        name: 'agentNav',
        params: { title: item.name.toLocaleLowerCase() }
      })
    },
    // change agent grid type
    agentGrid(gridType) {
      this.agentGridActive = gridType
    },
  }
}
</script>



<style lang="less" scoped>
.agent-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background: #ffffff;
  .nav-left {
    height: 50px;
    line-height: 50px;
    a {
      display: inline-block;
      width: 80px;
      height: 50px;
      text-align: center;
      border-right: 1px solid #e0e0e0;
      
    }
    .active {
      position: relative;
      color: #4db2cc;
      &::after {
        position: absolute;
        display: inline-block;
        content: '';
        height: 3px;
        bottom: 0px;
        left: 0;
        width: 80px;
        background: #4db2cc;
      }
    }
    .nav-search {
      position: relative;
      display: inline-block;
      margin-left: 25px;
      .search {
        position: absolute;
        top: 50%;
        left: 8px;
        transform: translateY(-50%);
        color: #9a9a9a;
      }
      .search-input {
        display: inline-block;
      }
    }
  }
  .nav-right{
    margin-right: 10px;
    .nav-icon {
      margin-right: 10px;
      font-size: 17px;
    }
    .grid-active {
      color: #4db2cc
    }
  }
}
</style>
