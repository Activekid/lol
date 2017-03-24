<template>
   <!--  <md-card-actions v-md-ink-ripple>
     <div class="md-subhead">
       <span>effect-coverflow</span>
       <span>（</span>
       <span>3D覆盖流效果</span>
       <span>）</span>
     </div>
     <md-button class="md-icon-button"
                target="_blank"
                href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/18-effect-coverflow.vue">
       <md-icon>code</md-icon>
     </md-button>
   </md-card-actions> -->
    <div class="swiper-inner">
      <!-- swiper -->
      <swiper :options="swiperOption">
       <swiper-slide v-for="swiper in swipers" style="height:200px">
          <a :href="swiper.article_url">
            <img :src="swiper.image_url_big" style="height:200px" alt=""/>
          </a>
       </swiper-slide>
       <!-- <swiper-slide>Slide 1</swiper-slide>
       <swiper-slide>Slide 2</swiper-slide>
       <swiper-slide>Slide 3</swiper-slide>
       <swiper-slide>Slide 4</swiper-slide>
       <swiper-slide>Slide 5</swiper-slide>
       <swiper-slide>Slide 6</swiper-slide>
       <swiper-slide>Slide 7</swiper-slide> -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        swipers:[],
        swiperOption: {
          pagination: '.swiper-pagination',
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflow: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows : true
          }
        }
      }
    },
    methods:{
      getBanner:function(){
        this.$http.jsonp('http://localhost:80/vue/lol/banner.php',{
          params:{
            callback:"JSON_CALLBACK"
          }
        }).then(function(data){
          console.log(data);
          this.swipers = data.data.list;
        })
      }
    },
     mounted:function(){
        //console.log("进来了");
        this.getBanner();
      }
  }
</script>

<style scoped>
  .swiper-inner {
    width: 100%;
    height: 400px;
   /*  padding-top: 50px; */
    padding-bottom: 50px;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
  }
</style>