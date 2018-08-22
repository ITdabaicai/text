<template>
    <div>
      <div style="margin: 10px;overflow: hidden;" v-for="item in list">
        <masker style="border-radius: 2px;">
          <div class="m-img" v-bind:style="{backgroundImage:'url(' + item.img + ')'}"></div>
          <div slot="content" class="m-title">
            {{item.title}}
            <br/>
            <span class="m-time">2018-08-10</span>
          </div>
        </masker>
      </div>
      <div style="margin: 10px;overflow: hidden;">
        <masker style="border-radius: 2px;" color="black" :opacity="0.8">
          <div class="m-img"></div>
          <div slot="content" class="m-title">
            VUX
            <br/>
            <span class="m-time">2018-07-18</span>
          </div>
        </masker>
      </div>
    </div>
</template>




<script>
  import { Masker } from 'vux'
  import img1 from "@/assets/hobby/food.png";
  import img2 from "@/assets/hobby/read.png";
  import img3 from "@/assets/hobby/sport.png";
  import img4 from "@/assets/hobby/trave.png";
  export default {
    components: {
      Masker
    },
    data () {
      return {
        list: [{
          title: '运动',
          img: img3
        }, {
          title: '美食',
          img: img1
        }, {
          title: '阅读',
          img: img2
        }, {
          title: '旅游',
          img: img4
        }]
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
