<template>
  <div class="agent">
    <agent-head></agent-head>
    <agent-nav></agent-nav>
    <div class="agent-main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import AgentHead from '@/components/agent/AgentHead'
import AgentNav from '@/components/agent/AgentNav'
export default {
  data() {
    return {

    }
  },
  components: { AgentHead, AgentNav }
}
</script>

<style lang="less" scoped>

</style>
