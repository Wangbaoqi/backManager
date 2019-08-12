<template>
  <section class="tw-header">
    <img src="../../assets/logo/logo.svg" alt="logo" class="tw-logo" />

    <summary class="header-avater">
      <img src="../../assets/logo.png" class="tw-avatar" />
      <span class="angle" :class="menuShow ? 'icon-angle-up' : 'icon-angle-down'" @click="showMenu()"></span>
      <div class="detail-menu" v-show="menuShow">
        <span><i class="icon-id-card"></i>Profile</span>
        <span><i class="icon-sign-in"></i>Profile</span>
      </div>
      <div class="mask" v-show="menuShow" @click="closeAvatar()"></div>
    </summary>
    
  </section>
</template>

<script>
export default {
  name: "NavHeader",
  data() {
    return {
      menuShow: false
    };
  },
  methods: {
    showMenu() {
      this.menuShow = !this.menuShow
    },
    closeAvatar() {
      this.menuShow = false
    }
  }
};
</script>


<style lang="less" scoped>
.tw-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 200px;
  box-shadow: 0 2px 3px #e0e0e0;
  text-align: center;
  background: #fff;
  z-index: 200;

  .tw-logo {
    height: 35px;
  }

  .header-avater {
    position: relative;
    float: right;
    .angle {
      height: 30px;
      width:  30px;
    }
    img {
      height: 40px;
      width: 40px;
    }
    .detail-menu {
      position: absolute;
      top: 45px;
      left: -20px;
      // height: 200px;
      // width: 100px;
      background: #fff;
      box-shadow: 2px 2px 6px 2px rgba(0, 0, 0, 0.3);
      padding: 10px 0;
      span {
        display: flex;
        padding: 10px 20px;
        i {
          font-size: 17px;
          margin-right: 10px;
        }
      }
      span:hover {
        background: #efefef;
      }
    }
    .mask {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
    }
  }
}
</style>
