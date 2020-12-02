<template>
  <div class="wrap">
    <header-top title="家 猫 日 记"/>
    <div class="content">
      <!--<div class="">
        <van-button type="primary">主要按钮</van-button>
      </div>-->
    </div>
  </div>
</template>
<script>
  import headerTop from '../components/HeaderTop'
  export default {
    data() {
      return {
      }
    },
    mounted(){
    },
    methods:{

    },
    components:{
      headerTop
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../common/stylus/mixin.styl"
</style>
<style scoped>
.content{
  height: 90vh;
  background-image: url('../assets/images/background.jpg');
  background-size:cover;
}
</style>
