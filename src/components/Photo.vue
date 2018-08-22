<template>
  <div>
    <div v-for="src in list" style="text-align:center;">
      <span style="font-size:20px;">Loading</span>
      <x-img :src="src" :webp-src="`${src}?type=webp`" @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
    </div>
    <div>
      <divider>{{ ASD }}</divider>
    </div>
  </div>
</template>

<script>
  import { XImg,Divider } from 'vux'
  export default {
    components: {
      XImg,
      Divider
    },

    methods: {
      success (src, ele) {
        const span = ele.parentNode.querySelector('span')
        ele.parentNode.removeChild(span)
      },
      error (src, ele, msg) {
        const span = ele.parentNode.querySelector('span')
        span.innerText = 'load error'
      }
    },
    data () {
      return {
        list: [
          'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3753696649,3008571848&fm=27&gp=0.jpg',
          'https://o5omsejde.qnssl.com/demo/test4.jpg',
          'https://o5omsejde.qnssl.com/demo/test5.jpg',
          'https://o5omsejde.qnssl.com/demo/test6.jpg',
          'https://o5omsejde.qnssl.com/demo/test7.jpg',
        ],
        ASD:'已经到底啦'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
