<template>
  <section class="pop-model" :style="{ display: show ? 'block': 'none'}">
    <div class="mask" @click="modelCancel($event)"></div>
    <div class="model-content" @click="$event.stopPropagation()">
      <span class="arrow bot"></span>
      <span class="arrow top"></span>
      <div class="content">
        <span class="close-model icon-close" @click="modelCancel($event)"></span>
        <form action="">
          <label class="model-name" for="">Separate multiple resource name with cammas</label>
          <form-input 
            :inputObj="inputObj" v-model="inputObj.inputValue"
            @input.native="doInput"
            @change.native="doChange"
            @keyup.native="dokeyup"
            @keydown.native="dokeydown"
            @keypress.native="dokeypress"
            @focus.native="dofocus"
          ></form-input>
          <p class="model-btn">
            <span class="add-btn" @click="addResources()">Add Resource</span>
            <span class="cancel-btn" @click="modelCancel($event)">Cancel</span>
          </p>
        </form>
      </div>
    </div>
  </section>
</template>



<script>

import FormInput from '@/components/global/FormInput'
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  components: {FormInput},
  data() {
    return {
      inputObj: {
        inputType: 'text',
        inputPlace: 'e.g.Chorme，Firefox',
        inputValue: '',
        inputStyle: {
          'display': 'block',
          'height': '35px',
          'width': '97%',
          'border': '1px solid #aaaaaa',
          'border-radius': '4px',
          'padding': '0 5px',
          'font-size': '18px',
          'color': '#aaaaaa',
          'padding-left': '10px',
          'box-shadow': 'inset 2px 2px 3px rgba(170, 170,170, 0.8), 2px 2px 3px rgba(170, 170,170, 0.8)'
        }
      }
    }
  },
  methods: {
    doInput() {
      // console.log(this.inputObj.inputValue, 'doInput')
    },
    doChange() {
      // console.log(this.inputObj.inputValue, 'doChange')
    },
    dokeyup() {
      // console.log(this.inputObj.inputValue, 'dokeyup')
    },
    dokeydown() {
      // console.log(this.inputObj.inputValue, 'dokeydown')
    },
    dokeypress() {
      // console.log(this.inputObj.inputValue, 'dokeypress')
    },
    dofocus() {
      // console.log(this.inputObj.inputValue, 'dofoucu')
    },
    // add resources
    addResources() {
      this.$emit('addResources', this.inputObj.inputValue)
    },
    modelCancel(event) {
      event.stopPropagation();
      this.$emit('cancelModel')
      // clear input value
      this.inputObj.inputValue = ''
    }
  },
  watch: {
    'show' (oldv, newv) {
      console.log(oldv, newv)
    }
  }
}
</script>

<style lang="less" scoped>
.pop-model {
  position: absolute;
  top: 55px;
  left: -20px;
  box-shadow: 0 3px 5px rgba(0,0,0, 0.3);
  z-index: 100;
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  .model-content {
    position: relative;
    width: 570px;
    border: 1px solid #64bdd0;
    padding: 10px 20px;
    background: #ffffff;
    .arrow{
      position: absolute;
      width: 0; 
      height: 0; 
      font-size: 0; 
      overflow: hidden;
    }
    .bot{
      border-width: 21px 10px; 
      border-style: solid dashed dashed; 
      border-color: transparent transparent #64bdd0; 
      left: 21px; 
      top: -43px;
    }
    .top{
      border-width: 21px 10px;
      border-style: solid dashed dashed; 
      border-color: transparent transparent #ffffff; 
      left: 21px;
      top: -40px;
    }
    .content {
      position: relative;
      padding: 15px 0;
      color: #6d6d6d;
      text-align: left;
      .close-model {
        position: absolute;
        right: 0;
        top: 0;
        width: 12px;
        height: 12px;
        color: #64bdd0;
      }
      .model-name {
        display: block;
        margin-bottom: 10px;
      }
      .input {
        display: block;
        height: 35px;
        width: 97%;
        border: 1px solid #aaaaaa;
        border-radius: 4px;
        padding: 0 5px;
        font-size: 18px;
        color: #aaaaaa;
        padding-left: 10px;
        box-shadow: inset 2px 2px 3px rgba(170, 170,170, 0.8), 2px 2px 3px rgba(170, 170,170, 0.8);
      }
      .model-btn {
        margin-top: 20px;
        color: #ffffff;
        .add-btn{
          padding: 5px 20px;
          background: #64bdd0;
          margin-right: 10px;
        }
        .cancel-btn {
          padding: 5px 20px;
          background: #2d4050
        }
      }
    }
  }

}
</style>
