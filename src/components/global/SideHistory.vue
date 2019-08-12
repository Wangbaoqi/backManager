<template>
  <div class="sidebar-history">
    <em class="history-title">History</em>
    <ul>
      <li class="history-item" v-for="item in sideBarHistory" :key="item.id">
        <i></i>
        <a>{{item.history}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sideBarHistory: [
        { id: 0, history: "bjstdmngbr01/Acceptance_testddddddd" },
        { id: 1, history: "bjstdmngbr01/Acceptance_test" },
        { id: 2, history: "bjstdmngbr02/Acceptance_test" },
        { id: 3, history: "bjstdmngbr03/Acceptance_test" },
        { id: 4, history: "bjstdmngbr04/Acceptance_test" },
        { id: 5, history: "bjstdmngbr05/Acceptance_test" },
        { id: 6, history: "bjstdmngbr06/Acceptance_test" },
        { id: 7, history: "bjstdmngbr07/Acceptance_test" },
        { id: 8, history: "bjstdmngbr08/Acceptance_test" },
        { id: 9, history: "bjstdmngbr09/Acceptance_test" },
        { id: 10, history: "bjstdmngbr10/Acceptance_test" },
        { id: 11, history: "bjstdmngbr11/Acceptance_test" },
        { id: 12, history: "bjstdmngbr12/Acceptance_test" },
        { id: 13, history: "bjstdmngbr13/Acceptance_test" }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.sidebar-history {
  padding: 10px 15px;
  .history-title {
    display: block;
    font-size: 24px;
    color: #cccccc;
    margin: 10px 0;
  }
  .history-item {
    display: flex;
    display: -ms-flexbox;
    display: flexbox;
    align-items: center;
    font-size: 12px;
    color: #999;
    margin-bottom: 5px;
    i {
      display: inline-block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #999;
      margin-right: 15px;
    }
    a {
      width: 170px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
    }
  }
  .history-item:hover {
    color: #00b4cf;
  }
}
</style>
