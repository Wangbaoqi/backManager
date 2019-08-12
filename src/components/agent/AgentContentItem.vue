<template>
  <section class="content-item">
    <div class="item-left">
        <img :src="images[agent.os]" />
    </div>
    <div class="item-right">
      
      <div class="right-top">
        <span class="top-name"><i class="icon-desktop"></i>{{agent.name}}</span>
        <span class="top-type">{{agent.status}}</span>
        <span class="top-ip"><i class="icon-info"></i>{{agent.ip}}</span>
        <span class="top-file"><i class="icon-folder"></i>{{agent.location}}</span>
      </div>
      <div class="right-bottom">
        <em class="add-resource" @click="addResourcehandle()">
          +
          <pop-model :show="showModel" v-on:cancelModel="cancelModel()" v-on:addResources="addResources($event, agent)"></pop-model>
        </em>
        <p class="bottom-resource">
          
          <span class="resource" v-for="(item, index) in agent.resources" :key="index">
            {{item}}
            <i class="icon-trash" @click="removeResource(agent, item)"></i>
          </span>
        </p>
        <span class="bottom-deny">
          <i class="icon-deny"></i>
          Deny
        </span>
      </div>
    </div>
  </section>
</template>



<script>
import PopModel from '@/components/global/PopModel'

import NetWorking from '../../utils/NetWorking'
import API from '../../constants/api'

export default {
  props: {
    agent: {
      type: Object,
      default: {}
    }
  },
  components: {PopModel},
  data() {
    return {
      showModel: false,
      images: {
        windows: '/static/img/windows.png',
        centos: '/static/img/cent_os.png',
        debin: '/static/img/debin.png',
        suse: '/static/img/suse.png',
        ubuntu: '/static/img/ubuntu.png',
      }
    }
  },
  methods: {
    /**
     * show model
     */
    addResourcehandle() {
      this.showModel = !this.showModel;
    },
    /**
     * close model
     */
    cancelModel() {
      this.showModel = false
    },

    /**
     * async update agent resource data
     */
    updateAgentData(agent) {
      NetWorking
       ._putRequest(`${API.getAgent}/${agent.id}`, agent)
       .then(res => {
         console.log(res, 'update success')
       })
       .catch(err => {
         console.log('update failer')
       })
    },
    /**
     * add a or more resources
     */
    addResources(event, agent) {
      agent.resources = [...agent.resources, ...event.split(',')]

      this.updateAgentData(agent)
    },
    /**
     * remove a resource
     */
    removeResource(agent, item) {
      agent.resources = agent.resources.filter(e => e !== item)

      this.updateAgentData(agent)
    }
  }
}
</script>



<style lang="less" scoped>
.content-item {
  background: #ffffff;
  margin-top: 16px;
  display: flex;
  padding: 15px 20px;
  .item-left {
    margin-right: 36px;
    img {
      height: 73px;
      width: 73px
    }
  }
  .item-right {
    display: flex;
    flex-direction: column;
    flex: 1;
    font-weight: bold;
    
    i {
      display: inline-block;
      font-size: 16px;
      height: 20px;
      line-height: 19px;
      margin-right: 10px;
      vertical-align: bottom;
      color: #b2b2b2;
    }
    .right-top {
      .top-name {
        color: #00b4CF;
      }
      .top-type {
        display: inline-block;
        text-align: center;
        background: #7FBC39;
        color: #ffffff;
        font-size: 14px;
        margin: 0 25px;
        padding: 0 5px;
      }
      .top-ip {
        margin-right: 17px;
      }
    }
    .right-bottom {
      position: relative;
      display: inline-flex;
      margin-top: 20px;
      .add-resource {
        position: relative;
        display: inline-block;
        height: 25px;
        width: 25px;
        line-height: 25px;
        font-size: 18px;
        text-align: center;
        color: #FFFFFF;
        background: #00b4CF
      }
      .resource {
        display: inline-block;
        padding: 4px 5px;
        color: #3a495b;
        background: #efefef;
        margin-left: 9px;
        margin-bottom: 5px;
        i {
          color: #3a495b;
        }
      }
      .bottom-resource {
        flex: 1;
        align-self: flex-start;
        margin-right: 80px;
      }
      .bottom-deny {
        position: absolute;
        right: 0;
        padding: 5px 10px;
        color: #ffffff;
        background: #00b4CF;
        float: right;
        text-align: center;
        .icon-deny {
          color: #ffffff;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
