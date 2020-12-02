<template>
  <div class="wrap">
    <header-top title="家 猫 日 记" />
    <div class="content">
      <van-tabs v-model="active" animated swipeable>
        <van-tab v-for="e in navBArList" :title="e.title" :key='e.index'>
          <photocom :navname="e.name"/>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import headerTop from "../components/HeaderTop";
import photocom from '../components/photoComponents/index';
export default {
  name: "photo",
  data() {
    return {
      active:0,
      navBArList:[
        {
          index:0,
          title:'近期',
          name:'near',
        },
        {
          index:1,
          title:'回忆',
          name:'memory',
        },
        {
          index:2,
          title:'温暖',
          name:'warm',
        },
        {
          index:3,
          title:'新增',
          name:'addnew',
        },
      ]
    }
  },
  components: {
    headerTop,
    photocom,
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../common/stylus/mixin.styl"
</style>
