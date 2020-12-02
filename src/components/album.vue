<template>
  <div class="container">
    <van-skeleton
      v-for="(ele, index) in photoList"
      :key="index"
      title
      avatar
      :row="3"
      :loading="photoList.length == 0"
    >
      <van-divider content-position="left">{{ ele.updateTime }}</van-divider>
      <div v-for="e in ele.imageMsg" :key="e.id">
        <van-card
          :desc="e.desc"
          :title="e.title"
          :thumb="e.url"
        />
      </div>
    </van-skeleton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      show: false,
      photoList: [
        {
          updateTime: "2020-12-02 12:00:00",
          imageMsg: [
            {
              id: 16,
              url: "https://img.yzcdn.cn/vant/cat.jpeg",
              title: "0我的小猫真好看",
              desc: "0我今天带着小猫出来玩",
            },
            {
              id: 17,
              url: "https://img.yzcdn.cn/vant/cat.jpeg",
              title: "0我的小猫真好看",
              desc: "0我今天带着小猫出来玩",
            },
            {
              id: 18,
              url: "https://img.yzcdn.cn/vant/cat.jpeg",
              title: "0我的小猫真好看",
              desc: "0我今天带着小猫出来玩",
            },
          ],
        },
        {
          updateTime: "2020-11-30 12:00:00",
          imageMsg: [
            {
              id: 26,
              url: "https://img.yzcdn.cn/vant/cat.jpeg",
              title: "1我的小猫真好看",
              desc: "1我今天带着小猫出来玩",
            },
            {
              id: 27,
              url: "https://img.yzcdn.cn/vant/cat.jpeg",
              title: "1我的小猫真好看",
              desc: "1我今天带着小猫出来玩",
            },
            {
              id: 28,
              url: "https://img.yzcdn.cn/vant/cat.jpeg",
              title: "1我的小猫真好看",
              desc: "1我今天带着小猫出来玩",
            },
            {
              id: 29,
              url: "https://img.yzcdn.cn/vant/cat.jpeg",
              title: "1我的小猫真好看",
              desc: "1我今天带着小猫出来玩",
            },
          ],
        },
        {
          updateTime: "2020-12-01 12:00:00",
          imageMsg: [
            {
              id: 36,
              url: "https://img.yzcdn.cn/vant/cat.jpeg",
              title: "2我的小猫真好看",
              desc: "2我今天带着小猫出来玩",
            },
            {
              id: 37,
              url: "https://img.yzcdn.cn/vant/cat.jpeg",
              title: "2我的小猫真好看",
              desc: "2我今天带着小猫出来玩",
            },
            {
              id: 38,
              url: "https://img.yzcdn.cn/vant/cat.jpeg",
              title: "2我的小猫真好看",
              desc: "2我今天带着小猫出来玩",
            },
            {
              id: 39,
              url: "https://img.yzcdn.cn/vant/cat.jpeg",
              title: "2我的小猫真好看",
              desc: "2我今天带着小猫出来玩",
            },
            {
              id: 40,
              url: "https://img.yzcdn.cn/vant/cat.jpeg",
              title: "2我的小猫真好看",
              desc: "2我今天带着小猫出来玩",
            },
            {
              id: 41,
              url: "https://img.yzcdn.cn/vant/cat.jpeg",
              title: "2我的小猫真好看",
              desc: "2我今天带着小猫出来玩",
            },
          ],
        },
      ],
    };
  },
  name: "album",
  mounted() {
    this.photoListFilter();
  },
  methods: {
    photoListFilter() {
      this.photoList = this.photoList.sort((a, b) => {
        return this.$moment(b.updateTime) - this.$moment(a.updateTime);
      });
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../common/stylus/mixin.styl"
</style>
<style scoped>
.container {
  padding-top: 0.1rem;
  padding-bottom: 1.3rem;
}
.photoItem {
  text-align: center;
  vertical-align: middle;
}
.image-preview {
  /* position: fixed; */
  top: 0px;
  height: 80vh;
}
</style>
