<template>
  <section>
      <div id="log" style="margin-top:20px;">
          <my-terminal :terminal="terminal" ref="xterm"></my-terminal>
      </div>
  </section>
</template>
 
<script>
import Console from './Console'
  export default {
    data () {
      return {
 
      env: "",
      podName: "",
      contaName: "",
      logtxt: "",
 
       terminal: {
              pid: 1,
              name: 'terminal',
              cols: 1000,
              rows: 1000
            },
        
      }
    },
    methods: {
      
    },
    mounted(){
 
       var param = this.$route.params.name;
       var arr =  param.split("==");
       this.env = arr[0]
       this.podName = arr[1]
           this.contaName = arr[2]
 
       this.$http.get('/***/api/v1/***/pod/logs?env=' + this.env + '&podName=' + this.podName + "&cntnerName=" + this.contaName)
         .then(function(response){
        let resp = response.data;
        if(resp.success){
          this.logtxt = resp.data.replicas
          this.logtxt = this.logtxt.replace(/\n/g, "\r\n")
          this.$refs.xterm.term.write(this.logtxt)
          this.$refs.xterm.term.write(this.logtxt)
          this.$refs.xterm.term.fit()
 
          }else{
            this.$message.error("获取日志信息失败！" + resp.errorMsg);
          }
        })
        .catch(function(err){
         this.$message.error("获取日志信息失败！" + err.message);
        });
      
    },
 
    components: {
        'my-terminal': Console
    }
  }
</script>
 
<style scoped>
 
 
</style>
 
 
