<template>
  <div class="navBar">
    <sidebar-item></sidebar-item>
    <sidebar-history></sidebar-history>
  </div>
</template>

<script>
import SidebarItem from '@/components/global/SideBarItem'
import SidebarHistory from '@/components/global/SideHistory'
export default {
  name: 'SideBar',
  data() {
    return {

    }
  },
  components: { SidebarItem, SidebarHistory }
}
</script>

<style lang="less" scoped>
.navBar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 265px;
  color: #f3f3f3;
  background: #2d4050;
  padding: 20px 0px;
}
</style>
