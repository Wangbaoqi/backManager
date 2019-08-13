<template>
  <div class="w-input">
    <input :type="type" :value="iValue" :placeholder="placeholder" @input="wInput" @blur="wBlur">
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      }
    },
    data() {
      return {
        iValue: this.value
      }
    },
    methods: {

      wCommon(e) {
        this.iValue = e.target.value;
        // notice parent component the value changes
        this.$emit('input', this.iValue);
        // TODO problem the how get correct parent component
        this.$parent.$emit('validate', this.iValue)
      },

      // input event 
      wInput(e) {
        this.wCommon(e);
      },
      wBlur(e) {
        this.wCommon(e);
      }
    }
  }
</script>

<style lang="less" scoped>

</style>