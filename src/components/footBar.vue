<template>
  <div class="footer">
    <div @click="changTab(0)" class="item">
      <icon class="icon" name="cutcat19" v-if="selIndex === 0"></icon>
      <icon class="icon" name="cutcat20" v-else></icon>
      <p :class="selIndex === 0 ? 'sel' : ''" class="text">首 页</p>
    </div>
    <div @click="changTab(1)" class="item photo">
      <icon class="icon" name="cutcat19" v-if="selIndex === 1"></icon>
      <icon class="icon" name="cutcat21" v-else></icon>
      <p :class="selIndex === 1 ? 'sel' : ''" class="text">相 册</p>
    </div>
    <div @click="changTab(2)" class="item mine">
      <icon class="icon" name="cutcat19" v-if="selIndex === 2"></icon>
      <icon class="icon" name="cutcat01" v-else></icon>
      <p :class="selIndex === 2 ? 'sel' : ''" class="text">我 的</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selIndex: -1,
      routerList: ["/",'/photo', "/me"],
    };
  },
  mounted() {
    this.selIndex = this.routerList.findIndex(
      (item) => item === this.$route.path
    );
  },
  methods: {
    changTab(index) {
      this.selIndex = index;
      this.$router.push(this.routerList[index]);
    },
  },
  computed: {},
};
</script>
<style scoped lang="stylus">
@import "../common/stylus/variable.styl"
.footer
  width: 100%;
  height: 49px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: rgba(255, 255, 255, 1);
  border-top: 1px solid #E2E2E2;

  .item
    text-align center

    img
      margin-bottom 2px

    .icon-footer
      width: 24px;
      height: 24px;

    .text
      font-size: 10px;
      font-weight: 500;
      color: rgba(52, 52, 52, 1);
      line-height: 14px;
      z-index 2;
      color $color-font-default
    .sel
      color $color-font-active
</style>
