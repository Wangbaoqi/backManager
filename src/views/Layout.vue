<template>
  <div>
    <nav-header></nav-header>
    <div class="tw-content">
      <side-bar></side-bar>
      <main class="view-content">
        <router-view></router-view>
      </main>
    </div>
    <content-footer></content-footer>
  </div>
</template>


<script>
import NavHeader from '@/components/global/NavHeader'
import ContentFooter from '@/components/global/ContentFooter'
import SideBar from '@/components/global/SideBar'

export default {
  components: {
    NavHeader,
    ContentFooter,
    SideBar
  }
}
</script>

<style lang="less" scoped>
.tw-content {
  display: flex;
  display: -ms-flexbox;
  display: -ms-flexbox;

  margin: 0 auto; 
  min-width: 768px; 
  max-width: 1150px;
  min-height: 916px;

  margin-top: 81px;
  margin-bottom: 30px;

  .view-content {
    padding: 15px 0 10px 30px;
    flex: 1
  }
}
</style>
