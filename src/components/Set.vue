<template>
  <div style="height:100%;">
    <view-box ref="viewBox">
    <x-header   @on-click-more="showMenus = true"  >
      <x-icon slot="overwrite-left" @click="show1 = true" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
      <span> {{usn}}</span>
    </x-header>

      <div>
        <group>
          <cell v-for="(type, index) in types" :title="type" :key="type" :inline-desc="index === 3 ? 'size=40px' : ''">
            <spinner :type="type" :size="index === 3 ? '40px' : ''"></spinner>
          </cell>
        </group>
      </div>

    <div>
       <group>
          <cell-box>
            <img src="../assets/icon/shoucang.png" alt="">
            <span>收藏</span>
          </cell-box>
          <cell-box>
            <img src="../assets/icon/photos.png" alt="">
            <span>相册</span>
          </cell-box>
          <cell-box>
            <img src="../assets/icon/cards.png" alt="">
            <span>卡包</span>
          </cell-box>
          <cell-box>
            <img src="../assets/icon/biaoqing.png" alt="">
           <span> 表情</span>
          </cell-box>
        </group>
    </div>

      <div style="width:80%;padding-left:10%;margin-top:10px;">
        <x-button type="warn" @click.native="getout()">注销</x-button>
      </div>
    <div>
      <actionsheet :menus="menus"
                   v-model="showMenus"
                   show-cancel
                   @on-click-menu-menu1="getout()">
      </actionsheet>
    </div>
    <div >
      <popup v-model="show1" position="left" width="70%">
        <div class="position-horizontal-demo">
          <span class="vux-close" @click="show8 = false"></span>
          <div style="text-align: center;padding-top: 20px;">
            <img src="../assets/touxiang.png" style="width: 80px;height: 80px;border-radius:40px;"  alt="">
          </div>
          <group>
            <cell title="Personal"  is-link></cell>
            <cell-box is-link>
              images show
            </cell-box>
            <cell-box @click="Preject()">
              Experience on Project
            </cell-box>
            <cell title="hobby"  is-link></cell>
            <x-switch :title='nigthbtn' v-model="show2"></x-switch>
            <div >
              <alert v-model="show2" :title="tip" @on-show="onShow" @on-hide="onHide"> {{ unopen }}</alert>
            </div>
          </group>

        </div>
      </popup>
    </div>
    <tabbar slot="bottom">
      <tabbar-item  link="/Login"  >
        <img slot="icon" src="../assets/icon/home.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot  link="/New"  >
        <img slot="icon" src="../assets/icon/new.png">
        <span slot="label">资讯</span>
      </tabbar-item >
      <tabbar-item  link="/Message">
        <img slot="icon"   src="../assets/icon/msg.png">
        <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item selected >
        <img slot="icon" src="../assets/icon/set.png">
        <span slot="label">设置</span>
      </tabbar-item>
    </tabbar>
    </view-box>
  </div>

</template>

<script>
  import { XHeader,Actionsheet,Popup,Group, Cell, CellBox,Alert,XSwitch,Tab, TabItem,Tabbar, TabbarItem,  ViewBox,Confirm,XButton,Spinner} from 'vux'
  export default {
    directives: {

    },
    components: {
      XHeader,
      Actionsheet,
      Popup,
      Group,
      Cell,
      CellBox,
      Alert,
      XSwitch,
      Tab,
      TabItem,
      Tabbar,
      TabbarItem,
      ViewBox,
      Confirm,
      XButton,
      Spinner
    },
    data () {
      return {
        usn:sessionStorage.getItem('usn'),
        nigthbtn:'nigth',
        tip:'操作提示',
        unopen:'尚未开放',
        menus: {
          menu1: '注销',
        },
        showMenus: false,
        show1: false,
        show8:false,
        show2:false,
        index:0,
        types: ['android']
      }
    },
    methods:{
      getout(){
          this.$message('已注销！');
          this.$router.push({path:'/HelloWorld'})
        },
      tabClick(index){
        this.index = index
      },
      onHide () {
//        console.log('on hide')
      },
      onShow () {
//        console.log('on show')
      },
    },
    mounted () {

    },


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
