<template>
  <div class="head" :class="agent.iconClass">
    <section v-if="agent.title">
      <span class="build-name">{{agent.title}}</span>
      <span class="build-num">{{agent.sum}}</span>
    </section>
    <section class="other" v-else>
      <p class="other-item other-name"><span v-for="(item, index) in agent.listTitle" :key="index">{{item}}</span></p>
      <p class="other-item other-num"><span v-for="(item, index) in agent.listSum" :key="index">{{item}}</span></p>
    </section>
  </div>
</template>


<script>
export default {
  props: {
    agent: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style lang="less" scoped>
.head {
  position: relative;
  width: 265px;
  height: 125px;
  .build-name {
    position: absolute;
    top: 14px;
    left: 10px;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
  }
  .build-num {
    position: absolute;
    bottom: 20px;
    right: 22px;
    color: #ffffff;
    font-size: 48px;
  }
  .other {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 24px;
    height: 85px;
  }
  .other-item {
    display: flex;
    span {
      flex: 1;
      text-align: center;
    }
  }
  .other-name {
    font-size: 12px;
  }
  .other-num {
    font-size: 20px;
    font-weight: bold;
  }
}
.head-build {
  background: #f6ba41;
  color: rgba(247, 196, 78, 0.5); 
}

.head-idle {
  background: #7fbc39;
  color: rgba(159, 196, 104, 0.5);
}
.head-other {
  background: #ffffff;
}

.icon-cog::before {
  position: absolute;
  display: inline-block;
  top: -10px;
  right: 55px;
  font-size: 144px;
  animation: animal 2s infinite linear;
  transform-origin: center center;
  -webkit-animation: animal 2s infinite linear;
  -webkit-transform-origin: center center;
  -ms-transform-origin: center center;
}
.icon-coffee::before {
  position: absolute;
  display: inline-block;
  top: -10px;
  right: 55px;
  font-size: 144px;
}


@keyframes animal {
  0% {
    transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
    -ms-transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
  }
}
</style>
