<template>
  <div>
    <swiper :list="demo01_list" :auto="true" ></swiper>
    <br>
    <grid>
      <grid-item  v-for="i in list":key="i" style="padding:0">
        <img :src="i.imgUrl">
      </grid-item >
    </grid>
    <br>
    <div>
      <img class="previewer-demo-img" v-for="(item, index) in list2" :src="item.src" width="180" @click="show(index)">
      <previewer :list="list2" ref="previewer" ></previewer>
    </div>
    <div>
      <divider>{{ bottomFont }}</divider>
    </div>
  </div>

</template>
<script>
  import { Swiper,Grid, GridItem, GroupTitle,Previewer, Divider} from 'vux'
  import con1 from "@/assets/icon/home1.png";
  import con2 from "@/assets/icon/home2.png";
  import con3 from "@/assets/icon/home3.png";
  import con4 from "@/assets/icon/home4.png";
  import con5 from "@/assets/icon/home5.png";
  import img1 from "@/assets/homeimg/Emyli.png";
  import img2 from "@/assets/homeimg/Rev.png";
  import img3 from "@/assets/homeimg/Tyral.png";
  import img4 from "@/assets/homeimg/Vir.png";
  const baseList = [{
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
    title: '送你一朵fua'
  }, {
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
    title: '送你一辆车'
  }, {
    url: 'javascript:',
    title: '送你一次旅行',
    fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
  }]
  export default {
    components: {
      Swiper,
      Grid,
      GridItem,
      GroupTitle,
      Previewer,
      Divider
    },
    data(){
        return{
          demo01_list: baseList,
          list:[
            {imgUrl: con1},
            {imgUrl: con2},
            {imgUrl: con3},
            {imgUrl: con4},
            {imgUrl: con5}
          ],
          list2:[
            { src:img1,
              w: 600,
              h: 600
            },
              {
                src: img2,
                w: 1200,
                h: 900
              },
            {
              src: img3,
              w: 1200,
              h: 900
            },
            {
              src: img4,
              w: 1200,
              h: 900
            }
          ],
          bottomFont:'已经到底啦！'
        }
    },
    methods:{
      show (index) {
        this.$refs.previewer.show(index)
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
