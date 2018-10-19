<template>
  <div class="首页">
    <Header></Header>
    <router-view/>
  </div>
  
</template>

<script>
import Header from '@/components/index/header'

export default {
  name: 'index',
  components:{
    Header
  },
  data () {
    return {
      
    }
  }
}
</script>


