<template>
  <div class="agent-content">
    <content-item v-for="item in agentList" :key="item.id" :agent="item"></content-item>
  </div>
</template>


<script>
import ContentItem from '@/components/agent/AgentContentItem'

import NetWorking from '../../utils/NetWorking'
import API from '../../constants/api'

import Tool from '../../utils/dataTool'

let agentListCopy = []

export default {
  data() {
    return {
      agentTilte: '',
      agentList: []
    }
  },
  components: {ContentItem},

  created() {

  },
  beforeMount() {
    const agentType = this.$route.params.title;
    const agentRequestParams = agentType == 'all' ? null :{
      type: agentType
    }
    this.fetchData(agentRequestParams)
  },
  mounted() {
    console.log('mounted')
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  },

  
  methods: {
    /**
     * fetch data from Url 
     */
    fetchData(params) {
      NetWorking
        ._getRequest(API.getAgent, params)
        .then(res => {
          this.agentList = res
          agentListCopy = Tool.deepClone(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    /** 
     * change tab type change dataSource
     * @param {*} type 
     */
    updateData(type) {
      this.agentList = agentListCopy.filter(e => {
        if(type != 'all') {
          return e.type == type;
        }else {
          return e
        }
      })
    }
  },
  watch: {
    '$route' (to, from) {
      // debugger
      this.agentTilte = to.params.title
      const params = to.params.title == 'all' ? null : {
        type: to.params.title
      }
      this.fetchData(params)
    }
  }
}
</script>


<style lang="less" scoped>

</style>
