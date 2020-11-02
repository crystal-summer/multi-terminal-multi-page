<template>
    <div id='login'>
        <h1>政务端登录页</h1>
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
      location.href = location.origin + "/gov/homePage.html#/"
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>