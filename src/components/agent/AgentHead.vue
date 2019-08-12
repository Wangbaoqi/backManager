<template>
  <div class="agent-head">
    <head-item :agent='agentBuild'></head-item>
    <head-item :agent='agentIdle'></head-item>
    <head-item :agent='agentOther'></head-item>
  </div>
</template>

<script>
import HeadItem from '@/components/agent/HeadItem'
export default {
  data() {
    return {
      agentBuild: {
        iconClass: 'head-build icon-cog',
        title: 'Building',
        sum: 3
      },
      agentIdle: {
        iconClass: 'head-idle icon-coffee',
        title: 'Idle',
        sum: 5
      },
      agentOther: {
        iconClass: 'head-other',
        listTitle: ['ALL', 'PHYSICAL', 'VIRTURL'],
        listSum: [8, 4, 4]
      }
    }
  },
  components: { HeadItem }
}
</script>


<style lang="less" scoped>
.agent-head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
</style>
