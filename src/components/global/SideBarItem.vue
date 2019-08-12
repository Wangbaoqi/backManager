<template>
  <div class="sidebar-item">
    <ul>
      <li :class='sideActive == item.id ? "sideActive": ""' v-for="item in sidebarList" :key="item.id" @click="routerLink(item)">
        <i class="fa" :class="item.icon"></i>
        <span>{{item.name}}</span>
      </li>
      
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  data() {
    return {
      sideActive: 0,
      sidebarList: [
        {
          id: 0,
          name: 'DASHBORAD',
          path: 'dashboard',
          icon: 'icon-dashboard'
        },
        {
          id: 1,
          name: 'AGENT',
          path: 'agent',
          icon: 'icon-sitemap'
        },
        {
          id: 2,
          name: 'MYCURISE',
          path: 'mycruise',
          icon: 'icon-boat'
        },
        {
          id: 3,
          name: 'HELP',
          path: 'help',
          icon: 'icon-life-bouy'
        }
      ]
    }
  },
  beforeMount() {
    const currentUrlName = this.$route.name;
    if(currentUrlName == 'agentNav') {
      this.sideActive = 1
      return 
    }
    this.sideActive = this.sidebarList.filter(e => e.path == currentUrlName)[0].id || 0
  },
  methods: {
    // click sidebar item
    routerLink(item) {
      this.sideActive = item.id;
      this.$router.push({
        name: item.path
      })
    }
  },
  watch: {
      '$route' (to, from) {

      }
    }
}
</script>

<style lang="less" scoped>
.sidebar-item {
  ul {
    li {
      padding: 20px 40px;
      .fa {
        margin-right: 10px;
      }
    }
    li:hover, .sideActive {
      background: rgba(225,228,230, 0.2);
      color: #00b4cf
    }
    
  }
}
</style>
