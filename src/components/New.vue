<template>
  <div style="height:100%;">
    <view-box ref="viewBox">
    <x-header   @on-click-more="showMenus = true"  >
      <x-icon slot="overwrite-left" @click="show1 = true" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
      <span> {{usn}}</span>
    </x-header>
      <Panel :header="headerone"  :list="list" :type="type"></Panel>
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
      <tabbar-item link="/Login">
        <img slot="icon" src="../assets/icon/home.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot selected >
        <img slot="icon" src="../assets/icon/new.png">
        <span slot="label">资讯</span>
      </tabbar-item >
      <tabbar-item link="/Message">
        <img slot="icon"   src="../assets/icon/msg.png">
        <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item link="/Set" >
        <img slot="icon" src="../assets/icon/set.png">
        <span slot="label">设置</span>
      </tabbar-item>
    </tabbar>
    </view-box>
  </div>

</template>

<script>
  import { XHeader,Actionsheet,Popup,Group, Cell, CellBox,Alert,XSwitch,Tab, TabItem,Tabbar, TabbarItem,  ViewBox,Panel} from 'vux'
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
      ViewBox,
      Panel
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
        headerone:'最新资讯',
        type:'5',
        list: [{
          src: 'http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20180718/7a724a51e5c84e3fbb65b98da5d93861.jpg',
//          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff', 失败回调
          title: '湖人助教：隆多是在场上打球的教练',
          desc: '直播吧8月21日讯 湖人助教Jesse Mermuys接受采访时对新援隆多的篮球智商大为赞赏',
          url: '/component/cell',
          meta: {
            source: '直播吧',
            date: '2018-8-20',
            other: '其他信息'
          }
        }, {
          src: 'http://t12.baidu.com/it/u=4177471625,525398060&fm=173&app=25&f=JPEG?w=450&h=301&s=1F6049875EAA0492029DA49F0300C092',
          title: '历史第一人！诺维茨基续约独行侠，连续21赛季效力同一队超越科比',
          desc: '从1998年加盟球队以来，诺维茨基共为球队出场1,471场比赛，场均上场34.4分钟能得到21.2分7.7篮板2.5助攻。他的得分、篮板、两分球命中数、三分命中数、罚球命中数、盖帽、出场时间等均排名队史第一。。',
          url: {
            path: '/component/radio',
            replace: false
          },
          meta: {
            source: '虎扑',
            date: '2018-8-18',
            other: '体育信息'
          }
        }],
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
