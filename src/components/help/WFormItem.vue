<template>
  <div class="w-form-item">
    <label v-if="label">{{label}}</label>
    <div class="input-slot">
      <slot></slot>
    </div>
    <p v-if="errcode == 0">{{errmes}}</p>
  </div>
</template>

<script>
import schema from "async-validator";
export default {
  // inject the attribute from parent instance
  inject: ["form"],
  props: ["label", "prop"],
  data() {
    return {
      errcode: 1,
      errmes: ""
    };
  },
  created() {
    console.log("fromItem created");
    this.$on("validate", this.validate);
  },
  mounted() {
    if (this.prop) {
      this.$parent.$emit("validateAdd", this);
    }
  },
  methods: {
    validate(value) {
      return new Promise(resolve => {
        const descripter = {
          [this.prop]: this.form.rules[this.prop]
        };
        const validator = new schema(descripter);
        const validateParams = {
          [this.prop]: this.form.model[this.prop]
        };
        validator.validate(validateParams, error => {
          if (error) {
            this.errcode = 0;
            this.errmes = error[0].message;
            resolve(false)
          } else {
            this.errcode = 1;
            this.errmes = "";
            resolve(true)
          }
        });
      });
    }
  }
};
</script>

<style lang="less" scoped>
</style>