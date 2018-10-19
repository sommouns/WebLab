<template>
    <footer>
        Copyright © 2018 測試使用
    </footer>
</template>
<script>
export default {
  data() {
    return {
      num1: 1,
      activeIndex:'1'
    };
  },

  methods: {
    handleSelect(value) {
      console.log(value);
    }
  }
};
</script>
<style>
footer{
    height: 30px;
    background: #b3b0b0;
    text-align: center;
    line-height: 30px;
}
</style>


