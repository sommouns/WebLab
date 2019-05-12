<template>
<div id="app" >
  <router-view />
</div>
</template>

<script>
export default {
  components: {},
  name: 'App',
  data(){
    return {
    }
  }
}
</script>

<style >
* {
  padding: 0;
  margin: 0;
}

#app {
  min-width: 1180px;
  width: 100%;
  flex: 1
}

.box-card {
  display: inline-block;

  margin-right: 15px;

  margin-block-end: 30px;

}

.el-pager li.active{
  font-size: 18px
}
#terminal,
.xterm {
  height: 100%
}
</style>
