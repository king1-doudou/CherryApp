<template>
  <header class="header">
    <slot name="left"></slot>
    <span class="header_title">
      <span class="header_title_text ellipsis">
        <!-- <icon class="icon" name="cutcat20"></icon> -->
        {{title}}
      </span>
    </span>
    <slot name="right"></slot>
  </header>
</template>

<script>
  export default {
      props:{
        title:String
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../common/stylus/mixin.styl"
  .header
    background-color $color-header
    /*position fixed*/
    position relative
    z-index 100
    left 0
    top 0
    width 100%
    height $header-title-height
    .header_title
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 50%
      color #fff
      text-align center
      .header_title_text
        font-size 18px
        color $color-font
        display block

</style>
