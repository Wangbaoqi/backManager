<template>
  <div class="w-form">
    <form >
      <slot></slot>
    </form>
  </div>
</template>

<script>  
  export default {
    provide() {
      // provide the instance to child component w-form-item
      return {
        form: this
      }
    },
    props: {
      model: {
        type: Object,
        required: true
      },
      rules: {
        type: Object
      }
    },
    data() {
      return {
        filed: []
      }
    },
    created() {
      this.$on('validateAdd', item => this.filed.push(item))
    },
    methods: {
      async validate(cb) {
        console.log(this.filed);
        const tasks = this.filed.map(item => item.validate());

        const ret = await Promise.all(tasks)
        let result = true;
        for(let re of ret) {
          if(!re) {
            result = false;
          }
        }
        cb(result)
      }
    }
  }
</script>

<style lang="less" scoped>

</style>