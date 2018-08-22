<template>
  <div id="app" style="height: 100%">
    <router-view navActive="/HelloWorld"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style  lang="less">
  @import 'components/styles.less';

</style>
