<template>
  <input
    :style="inputObj.inputStyle"
    :type="inputObj.inputType"
    :placeholder="inputObj.inputPlace"
    :value="inputObj.inputValue"
    @change="$emit('change', $event.target.value)"
    @input="$emit('input', $event.target.value)"
    @keyup="$emit('keyup', $event.target.value)"
    @keydown="$emit('keydown', $event.target.value)"
    @keypress="$emit('keypress', $event.target.value)"
    @focus="$emit('focus', $event.target.value)"
  >
</template>



<script>
export default {
  props: {
    inputObj: {
      type: Object,
      default: {}
    }
  }
}
</script>


<style lang="less" scoped>

</style>
