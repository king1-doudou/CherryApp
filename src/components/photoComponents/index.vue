<template>
  <div>
    <addnew v-if="navname=='addnew'"></addnew>
    <memory v-if="navname=='memory'"></memory>
    <near v-if="navname=='near'"></near>
    <warm v-if="navname=='warm'"></warm>
  </div>
</template>

<script>
import addnew from "./addnew";
import memory from "./memory";
import near from "./near";
import warm from "./warm";
export default {
  name:'photocom',
  props: {
        navname: {
            type: String,
        }
    },
  components: {
    addnew,
    memory,
    near,
    warm,
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixin.styl"
</style>
