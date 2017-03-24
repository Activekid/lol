<template>
<mu-paper class="bot">
  <mu-bottom-nav :value="bottomNav" @change="handleChange">
    <mu-bottom-nav-item value="news" title="资讯" href="#/index/news/1" icon="restore"/>
    <mu-bottom-nav-item value="players" title="玩家" icon="favorite"/>
    <mu-bottom-nav-item value="heros" title="英雄" icon="location_on"/>
    <mu-bottom-nav-item value="videos" title="视频" icon="ondemand_video"/>
  </mu-bottom-nav>
</mu-paper>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'recents'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>
<style>
  .bot{
    position:absolute;
    bottom:0px;
    width:100%;

  }
</style>