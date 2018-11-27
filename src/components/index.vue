<template>
<div class="main_index">
  <Header style="position:fixed;top:0;width:100%;z-index:999"></Header>
  <div style="height:66px">
  </div>
  <router-view />
</div>
</template>

<script>
import Header from '@/components/index/header'

export default {
  name: 'index',
  components: {
    Header
  },
  data() {
    return {

    }
  }
}
</script>
<style media="screen" lang="less">
.main_index {
    background: #fff;
    position: relative;
    z-index: 1;
}
</style>
