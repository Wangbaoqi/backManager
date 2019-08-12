<template>
  <footer class="content-footer">
    <b>Copyright &copy; 2017</b>
    <strong>
       Thought
    </strong>Works
  </footer>
</template>

<script>
export default {
  name: 'ContentFooter',
  data() {
    return {

    }
  }
}
</script>


<style lang="less" scoped>
.content-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30px;
  line-height: 30px;
  background: #ffffff;
  text-align: center;
  box-shadow: 0 -2px 3px #e0e0e0;
}
</style>
