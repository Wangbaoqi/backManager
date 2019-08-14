<template>
  <div>
    vue 实现高阶组件 
    <w-form ref="wform" :model="rulesForm" :rules="rules">
      <w-form-item prop="name" label="username">
        <w-input type="text" v-model="rulesForm.name" placeholder="Username"></w-input>
      </w-form-item>
      <w-form-item prop="pwd" label="password">
        <w-input type="password" v-model="rulesForm.pwd" placeholder="password"></w-input>
      </w-form-item>
      <w-form-item >
        <button @click="submit">submit</button>
      </w-form-item>
    </w-form>

    vuex 实践
    <button @click="increase">submit normal</button>
    <button @click="submitvueasync">submit asnyc</button>

    <div>normal {{$store.state.count}}  </div> 

    <div>normal {{count}}  </div> 

    <div>余额normal {{$store.getters.getCount}}  </div> 
    <div>余额special {{getCount}}  </div> 


    

  </div>
</template>

<script>
  import WForm from '@/components/help/WForm'
  import WFormItem from '@/components/help/WFormItem'
  import WInput from '@/components/help/WInput'

  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
  export default {
    components: { WForm, WFormItem, WInput },
    computed: {
      ...mapState(['count']),
      ...mapGetters(['getCount'])
    },
    data() {
      return {
        rulesForm: {
          name: '',
          pwd: ''
        },
        rules: {
          name: [
            { required: true, message: 'please input name'},
            { min: 6, max: 10, message: 'plase input 6-10 chars'}
          ],
          pwd: { required: true, message: 'please input pwd'}
        }
      }
    },
    created() {
    },
    mounted() {

    },
    methods: {
      ...mapMutations(['increase']),
      ...mapActions(['increaseAynsc']),
      submit() {
        this.$refs.wform.validate(valid => {
          if(valid) {
            alert('true')
          }else {
            alert('false')
            return false
          }
        })
      },
      
      submitvueasync() {
        // this.$store.dispatch('increaseAynsc')
        this.increaseAynsc()
      }
    }
  }
</script>

<style lang="less" scoped>

</style>