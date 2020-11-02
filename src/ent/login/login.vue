<template>
    <div id='login'>
        <h1>企业端登录页</h1>
        <button @click='gotoPage'>前往首页</button>
    </div>
</template>

<script>
export default {
  name: 'Login',
  props: {},
  data () {
    return {}
  },
  created () {},
  mounted () {},
  watch: {},
  methods: {
    gotoPage(){
      location.href = location.origin + "/ent/homePage.html#/"
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>