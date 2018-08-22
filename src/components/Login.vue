<template>
  <div style="height:100%;">
    <view-box ref="viewBox">
    <x-header   @on-click-more="showMenus = true"  >
      <x-icon slot="overwrite-left" @click="show1 = true" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
      <span> {{usn}}</span>
    </x-header>

      <tab :line-width="2"
           active-color="	#32CD32">
        <tab-item selected  @on-item-click="tabClick(0)">首页</tab-item>
        <tab-item  @on-item-click="tabClick(1)">介绍</tab-item>
        <tab-item  @on-item-click="tabClick(2)">兴趣</tab-item>
        <tab-item  @on-item-click="tabClick(3)">照片</tab-item>
      </tab>
    <div v-if="index==0">
      　<home></home>
    </div>
    <div v-else-if="index==1" >
      　<intar></intar>
    </div>
    <div v-else-if="index==2"  >
      　<hobby></hobby>
    </div>
    <div v-else >
      　<photo></photo>
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
      <tabbar-item selected >
        <img slot="icon" src="../assets/icon/home.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot  link="/New" >
        <img slot="icon" src="../assets/icon/new.png">
        <span slot="label">资讯</span>
      </tabbar-item >
      <tabbar-item  link="/Message">
        <img slot="icon"   src="../assets/icon/msg.png">
        <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item    link="/Set">
        <img slot="icon" src="../assets/icon/set.png">
        <span slot="label">设置</span>
      </tabbar-item>
    </tabbar>
    </view-box>
  </div>

</template>

<script>
  import { XHeader,Actionsheet,Popup,Group, Cell, CellBox,Alert,XSwitch,Tab, TabItem,Tabbar, TabbarItem,  ViewBox} from 'vux'
  import home from './Home';
  import intar from './Intar';
  import hobby from './Hobby';
  import photo from './Photo';
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
      home,
      intar,
      hobby,
      ViewBox,
      photo
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
        index:0
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

