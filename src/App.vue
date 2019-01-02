<template>
<div id="app">
  <router-view />
</div>
</template>

<script>
export default {
  components: {},
  name: 'App'
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

#app {
  min-width: 1180px;
  width: 100%;
}

.box-card {
  display: inline-block;

  margin-right: 15px;

  margin-block-end: 30px;

}
</style>
